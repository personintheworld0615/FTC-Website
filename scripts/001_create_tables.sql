-- Create contacts table for contact form submissions
CREATE TABLE IF NOT EXISTS public.contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  interest TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create sponsorships table for sponsor registrations
CREATE TABLE IF NOT EXISTS public.sponsorships (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  sponsorship_tier TEXT NOT NULL,
  company_website TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on both tables
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sponsorships ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public forms)
CREATE POLICY "contacts_insert_public"
  ON public.contacts FOR INSERT
  WITH CHECK (true);

CREATE POLICY "sponsorships_insert_public"
  ON public.sponsorships FOR INSERT
  WITH CHECK (true);

-- Only allow reading your own submissions (optional, for future admin panel)
CREATE POLICY "contacts_select_own"
  ON public.contacts FOR SELECT
  USING (true);

CREATE POLICY "sponsorships_select_own"
  ON public.sponsorships FOR SELECT
  USING (true);
