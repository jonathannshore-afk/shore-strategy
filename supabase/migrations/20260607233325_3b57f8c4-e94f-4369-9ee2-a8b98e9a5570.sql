-- 1) Restrict server-computed fields on maturity_assessments inserts
DROP POLICY IF EXISTS "Anyone can submit assessment" ON public.maturity_assessments;

CREATE POLICY "Anyone can submit assessment"
ON public.maturity_assessments
FOR INSERT
TO anon, authenticated
WITH CHECK (
  (jsonb_typeof(answers) = 'object')
  AND ((name IS NULL) OR (length(name) <= 200))
  AND ((email IS NULL) OR (length(email) <= 255))
  AND ((company IS NULL) OR (length(company) <= 200))
  AND ((role IS NULL) OR (length(role) <= 100))
  AND stage IS NULL
  AND score IS NULL
  AND ai_summary IS NULL
);

-- 2) Length guards for calendly_clicks
ALTER TABLE public.calendly_clicks
  ADD CONSTRAINT chk_calendly_page_path_len CHECK (length(page_path) <= 500),
  ADD CONSTRAINT chk_calendly_action_len    CHECK (length(action) <= 100);

CREATE OR REPLACE FUNCTION public.track_calendly_click(_page_path text, _action text, _metadata jsonb DEFAULT NULL::jsonb)
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
BEGIN
  IF _page_path IS NULL OR length(_page_path) = 0 OR length(_page_path) > 500 THEN
    RAISE EXCEPTION 'Invalid page_path';
  END IF;
  IF _action IS NULL OR length(_action) = 0 OR length(_action) > 100 THEN
    RAISE EXCEPTION 'Invalid action';
  END IF;
  IF _metadata IS NOT NULL AND pg_column_size(_metadata) > 2048 THEN
    RAISE EXCEPTION 'Metadata too large';
  END IF;

  INSERT INTO public.calendly_clicks (page_path, action, metadata)
  VALUES (_page_path, _action, _metadata);
END;
$function$;