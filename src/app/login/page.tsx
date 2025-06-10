// src/app/login/page.tsx
"use client"; // این صفحه باید Client Component باشد

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client'; // ✅ ایمپورت از فایل کلاینت جدید
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient(); // ✅ ایجاد نمونه کلاینت در کامپوننت

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    console.log("Attempting to sign in with:", email);

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      console.error('Supabase Sign In Error:', signInError);
      let errorMessage = "ایمیل یا رمز عبور اشتباه است.";
      if (signInError.message.includes("Invalid login credentials")) {
        errorMessage = "ایمیل یا رمز عبور وارد شده صحیح نمی‌باشد.";
      } else if (signInError.message.includes("disabled")) {
        errorMessage = "ورود با ایمیل برای این کاربر غیرفعال است.";
      }
      setError(errorMessage);
      setLoading(false);
    } else {
      setError(null);
      console.log("Sign in successful! Refreshing the page to update session...");
      
      // رفرش کردن صفحه برای اینکه session در سمت سرور (در layout ادمین) آپدیت شود و هدایت انجام گیرد.
      // بعد از رفرش، layout ادمین کاربر لاگین شده را تشخیص می‌دهد و داشبورد را نمایش می‌دهد.
      // اگر کاربر سعی کند به /admin برود، layout چک می‌کند و اجازه می‌دهد.
      // همچنین می‌توانیم یک push به /admin هم داشته باشیم تا کاربر مستقیماً هدایت شود.
      router.push('/admin'); // بعد از لاگین موفق، کاربر را به داشبورد ادمین هدایت کن
      router.refresh(); 
    }
    // setLoading(false) را از اینجا برمی‌داریم چون در صورت موفقیت، صفحه رفرش یا هدایت می‌شود
    // و در صورت خطا، setLoading قبلاً false شده است.
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
      <div className="w-full max-w-sm p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <Link href="/">
            {/* می‌توانید لوگو را هم اینجا قرار دهید */}
            <h1 className="text-2xl font-bold text-slate-800">ورود به پنل مدیریت</h1>
            <p className="mt-2 text-sm text-slate-500">فروشگاه ونداد چوب</p>
          </Link>
        </div>
        
        <form className="mt-6 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                آدرس ایمیل
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                رمز عبور
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 p-3 rounded-md">
              <p className="text-sm text-center text-red-700">
                {error}
              </p>
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-slate-800 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors"
            >
              {loading && (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              )}
              {loading ? 'در حال ورود...' : 'ورود'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}