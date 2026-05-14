CREATE TABLE public.calendly_clicks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    page_path TEXT NOT NULL,
    action TEXT NOT NULL,
    metadata JSONB,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.calendly_clicks ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (anonymous tracking, no auth required)
CREATE POLICY "Allow anonymous inserts on calendly_clicks"
ON public.calendly_clicks
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only service role or authenticated users can read (no public reads)
CREATE POLICY "Restrict reads on calendly_clicks"
ON public.calendly_clicks
FOR SELECT
TO authenticated
USING (true);