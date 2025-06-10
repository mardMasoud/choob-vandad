// src/app/admin/layout.tsx
import { createClient } from '@/lib/supabase/server' // ✅ ایمپورت از فایل سرور
import { redirect } from 'next/navigation'
// ... بقیه ایمپورت‌ها مثل Link, lucide-react ...

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient()

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    // اگر کاربر لاگین نکرده بود، به صفحه لاگین هدایتش کن
    return redirect('/login')
  }

  // اگر کاربر لاگین کرده بود، layout ادمین را نمایش بده
  return (
    <div className="flex min-h-screen bg-slate-100">
      <aside className="w-64 bg-slate-800 text-white p-6 flex flex-col">
        {/* ... کد Sidebar شما ... */}
      </aside>
      <main className="flex-grow p-6 lg:p-8">
        {children}
      </main>
    </div>
  );
}