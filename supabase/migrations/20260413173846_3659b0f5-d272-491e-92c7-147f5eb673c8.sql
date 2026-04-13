
CREATE TABLE public.rate_limits (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  ip_address TEXT NOT NULL,
  endpoint TEXT NOT NULL DEFAULT 'contact',
  request_count INTEGER NOT NULL DEFAULT 1,
  window_start TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX idx_rate_limits_ip_endpoint ON public.rate_limits (ip_address, endpoint);

ALTER TABLE public.rate_limits ENABLE ROW LEVEL SECURITY;

-- No public access at all - only service role can access
CREATE POLICY "No public access to rate_limits"
ON public.rate_limits
FOR ALL
USING (false);
