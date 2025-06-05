// src/lib/supabaseClient.ts
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  // در محیط سرور، این خطا در ترمینال نمایش داده می‌شود.
  // در محیط کلاینت، اگر مستقیماً استفاده شود، ممکن است نیاز به مدیریت خطای بهتری باشد.
  console.error("Supabase URL or Anon Key is missing from .env.local");
  throw new Error(
    "Supabase URL or Anon Key is missing. Check server logs or .env.local"
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
