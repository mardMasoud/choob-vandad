// src/middleware.ts
import { createClient } from '@/lib/supabase/middleware' // ✅ ایمپورت از فایل جدید
import { type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const { supabase, response } = createClient(request)

  // این خط session کاربر را از کوکی‌ها می‌خواند و در صورت لزوم رفرش می‌کند
  await supabase.auth.getSession()

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}