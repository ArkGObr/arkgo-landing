ALTER TABLE public.arkgo_leads
  ADD CONSTRAINT arkgo_leads_email_not_blank CHECK (length(trim(email)) > 0),
  ADD CONSTRAINT arkgo_leads_name_not_blank CHECK (length(trim(name)) > 0),
  ADD CONSTRAINT arkgo_leads_interest_check CHECK (interest IN ('fila', 'duvida', 'parceria'));

CREATE INDEX IF NOT EXISTS arkgo_leads_created_at_idx
  ON public.arkgo_leads (created_at DESC);

CREATE INDEX IF NOT EXISTS arkgo_leads_interest_idx
  ON public.arkgo_leads (interest);
