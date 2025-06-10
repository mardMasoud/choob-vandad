// src/lib/auth-actions.ts
'use server';

import { createClient } from '@/lib/supabase/server'; 
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function login( formData: FormData) {
  // تغییر اصلی: اطمینان از وجود await در اینجا چون createClient حالا async است
  const supabase = await createClient(); 

  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    return { message: 'ایمیل و رمز عبور نمی‌توانند خالی باشند.' };
  }

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    if (error.message === 'Invalid login credentials') {
      return {
        message: 'ایمیل یا رمز عبور اشتباه است.',
      };
    }
    console.error("Supabase login error:", error.message);
    return {
      message: 'خطا در ورود. لطفاً بعداً دوباره امتحان کنید.',
    };
  }

  revalidatePath('/', 'layout');
  redirect('/admin/dashboard'); 
}