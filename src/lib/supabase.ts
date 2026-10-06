import { createClient } from "@supabase/supabase-js";

// Server-only. Prefer the secret/service key (bypasses RLS, so RLS can stay ON
// and the public anon key can't read or modify data directly).
const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: false },
});
