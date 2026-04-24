DELETE FROM public.contact_submissions
WHERE email IN (
  'alpha-test@example.com',
  'beta-test@example.com',
  'gamma-test@example.com',
  'delta-test@example.com',
  't4@example.com',
  't5@example.com',
  'test3@example.com'
)
OR name ILIKE 'Test Lead %'
OR name ILIKE 'Test %';