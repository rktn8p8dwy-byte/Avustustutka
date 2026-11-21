import 'server-only';
import { createClient } from '@supabase/supabase-js';

// Do not instantiate the service-role client during module import or static builds.
// This client bypasses RLS: use it only in authenticated server-side operations.
export function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error('Supabase-palvelimen asetukset puuttuvat.');
  }
  return createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
}
