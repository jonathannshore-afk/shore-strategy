-- Drop the overly permissive INSERT policy
DROP POLICY IF EXISTS "Anyone can submit contact form" ON public.contact_submissions;

-- Create a more restrictive INSERT policy that still allows anonymous submissions
-- but validates that required fields are non-empty and within reasonable length
CREATE POLICY "Anyone can submit contact form with validation"
  ON public.contact_submissions
  FOR INSERT
  WITH CHECK (
    length(name) > 0 AND length(name) <= 200
    AND length(email) > 0 AND length(email) <= 255
    AND length(message) > 0 AND length(message) <= 5000
    AND (company IS NULL OR length(company) <= 200)
    AND email ~ '^[^@]+@[^@]+\.[^@]+$'
  );