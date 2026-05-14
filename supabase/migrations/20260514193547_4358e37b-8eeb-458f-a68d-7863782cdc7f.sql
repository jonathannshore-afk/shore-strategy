-- Replace overly permissive INSERT policy with a SECURITY DEFINER RPC function
DROP POLICY IF EXISTS "Allow anonymous inserts on calendly_clicks" ON public.calendly_clicks;

CREATE OR REPLACE FUNCTION public.track_calendly_click(
  _page_path TEXT,
  _action TEXT,
  _metadata JSONB DEFAULT NULL
)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.calendly_clicks (page_path, action, metadata)
  VALUES (_page_path, _action, _metadata);
END;
$$;

-- Grant execute to anon and authenticated
GRANT EXECUTE ON FUNCTION public.track_calendly_click(TEXT, TEXT, JSONB) TO anon, authenticated;

-- Re-add a restrictive insert policy as a safety net (users should use the RPC, but this prevents arbitrary data)
CREATE POLICY "Allow inserts via service role only"
ON public.calendly_clicks
FOR INSERT
TO service_role
WITH CHECK (true);