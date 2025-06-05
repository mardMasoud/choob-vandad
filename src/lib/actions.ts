// src/lib/actions.ts
"use server"; // این دستور فایل را به عنوان ماژول Server Actions مشخص می‌کند

import { supabase } from "@/lib/supabaseClient"; // استفاده از کلاینت Supabase که در همین پوشه lib است

// تعریف نوع برای محصول، برای استفاده داخلی و خوانایی بهتر
// می‌توانید این اینترفیس را در یک فایل types.ts جداگانه هم تعریف و export کنید
interface Product {
  id: number;
  created_at: string;
  name: string;
  description: string | null;
  price: number | null;
  image_src: string;
  stock_quantity: number;
  product_link: string | null;
  category: string | null;
}

export async function getProductsAction(): Promise<{
  products: Product[] | null;
  error: string | null;
}> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(8);

  if (error) {
    console.error("Error fetching products in server action:", error);
    return { products: null, error: error.message };
  }
  // اطمینان از اینکه داده‌ها با نوع Product سازگار هستند (اختیاری اما خوب است)
  return { products: data as Product[], error: null };
}
