// src/lib/actions.ts
'use server';

import { supabase } from '@/lib/supabaseClient';
import type { Product } from './types';

// تابع جدید برای ارتباط با Gemini
export async function getGeminiResponseAction(chatHistory: { role: string, parts: { text: string }[] }[]) {
  const apiKey = process.env.GEMINI_API_KEY;
  const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent";

  if (!apiKey) {
    return { error: "کلید API برای Gemini تنظیم نشده است." };
  }

  // اضافه کردن یک دستور اولیه به تاریخچه چت برای تعیین نقش چت‌بات
  const systemInstruction = {
    role: 'user',
    parts: [{ text: "شما یک دستیار فروش برای شرکت 'چوب ونداد' هستید. به سوالات کاربران در مورد محصولات چوبی، ام‌دی‌اف و خدمات شرکت به صورت مودبانه و مفید پاسخ دهید. پاسخ‌هایتان را کوتاه و مختصر نگه دارید." }],
  };

  const botResponseInstruction = {
    role: 'model',
    parts: [{ text: "سلام! چطور می‌توانم در مورد محصولات و خدمات چوب ونداد کمکتان کنم؟" }]
  }

  try {
    const response = await fetch(`${API_URL}?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [systemInstruction, botResponseInstruction, ...chatHistory],
      }),
    });

    if (!response.ok) {
      throw new Error(`Error from Gemini API: ${response.statusText}`);
    }

    const data = await response.json();

    // استخراج متن از پاسخ پیچیده Gemini
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "متاسفانه قادر به پاسخگویی نیستم.";

    return { response: text };

  } catch (err: unknown) {
    let errorMessage = "An unknown error occurred.";
    if (err instanceof Error) {
      errorMessage = err.message;
    }
    console.error('Error in getGeminiResponseAction:', errorMessage);
    return { error: errorMessage };
  }
}


// --- توابع قبلی (بدون تغییر) ---

// تابع برای واکشی محصولات صفحه‌بندی شده
export async function getPaginatedProductsAction({ page = 1, limit = 12 }: { page: number; limit: number; })
: Promise<{ products: Product[] | null; count: number | null; error: string | null }> {
  // ... (کد این تابع مثل قبل)
    try {
        const offset = (page - 1) * limit;

        const [productsResponse, countResponse] = await Promise.all([
        supabase
            .from('products')
            .select('*')
            .order('name', { ascending: true })
            .range(offset, offset + limit - 1),
        supabase
            .from('products')
            .select('*', { count: 'exact', head: true })
        ]);

        if (productsResponse.error || countResponse.error) {
        throw productsResponse.error || countResponse.error;
        }

        return { products: productsResponse.data as Product[], count: countResponse.count, error: null };

    } catch (err: unknown) {
        let errorMessage = "An unknown error occurred.";
        if (err instanceof Error) {
        errorMessage = err.message;
        }
        console.error('Error in getPaginatedProductsAction:', errorMessage);
        return { products: null, count: null, error: errorMessage };
    }
}