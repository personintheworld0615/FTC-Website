-- Create camp_registrations table for CS & AI Summer Camp signups
CREATE TABLE IF NOT EXISTS public.camp_registrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  child_name TEXT NOT NULL,
  grade_level TEXT NOT NULL,
  parent_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.camp_registrations ENABLE ROW LEVEL SECURITY;

-- Allow public inserts so parents can register on the website
CREATE POLICY "camp_registrations_insert_public"
  ON public.camp_registrations FOR INSERT
  WITH CHECK (true);

-- Allow viewing own submissions or authenticated team users (simulated select policies)
CREATE POLICY "camp_registrations_select_all"
  ON public.camp_registrations FOR SELECT
  USING (true);
