-- Table to store maturity assessment submissions
CREATE TABLE public.maturity_assessments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT,
  email TEXT,
  company TEXT,
  role TEXT,
  answers JSONB NOT NULL,
  stage TEXT,
  score NUMERIC,
  ai_summary JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.maturity_assessments ENABLE ROW LEVEL SECURITY;

-- Anyone can submit an assessment (validated server-side via edge function)
CREATE POLICY "Anyone can submit assessment"
ON public.maturity_assessments
FOR INSERT
TO anon, authenticated
WITH CHECK (
  jsonb_typeof(answers) = 'object'
  AND (name IS NULL OR length(name) <= 200)
  AND (email IS NULL OR length(email) <= 255)
  AND (company IS NULL OR length(company) <= 200)
  AND (role IS NULL OR length(role) <= 100)
);

-- Nobody can read submissions publicly (only service role)
CREATE POLICY "No public reads of assessments"
ON public.maturity_assessments
FOR SELECT
TO anon, authenticated
USING (false);