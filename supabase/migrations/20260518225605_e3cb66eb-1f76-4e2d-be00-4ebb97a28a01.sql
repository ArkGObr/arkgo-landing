
CREATE TABLE public.arkgo_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  city TEXT,
  interest TEXT NOT NULL DEFAULT 'fila',
  message TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.arkgo_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anyone can insert leads"
  ON public.arkgo_leads FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
