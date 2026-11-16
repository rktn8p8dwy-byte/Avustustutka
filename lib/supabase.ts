import { createClient } from '@supabase/supabase-js';

// Server-only. Never import this module into Client Components or expose the service-role key.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  throw new Error(
    'Supabase-ympäristömuuttujat puuttuvat: aseta NEXT_PUBLIC_SUPABASE_URL ja SUPABASE_SERVICE_ROLE_KEY.',
  );
}

export const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);
