// src/app/page.tsx
// این فایل یک Server Component است و 'use client' ندارد

import HomePageClient from "@/components/HomePageClient";
// تغییر در اینجا: وارد کردن کلاینت supabase از مسیر صحیح و مشترک
import { supabase } from "@/lib/supabaseClient";

// وارد کردن آیکون‌ها برای advantagesData
// import { ShieldCheck, LayoutGrid, Users, Truck } from "lucide-react";

// تابع واکشی داده‌ها در سمت سرور
async function getProducts() {
  // دیگر نیازی به createClient() نیست، مستقیماً از supabase وارد شده استفاده می‌کنیم
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(8);

  if (error) {
    console.error("Error fetching products on homepage:", error);
    return []; // در صورت خطا، یک آرایه خالی برگردان
  }
  return data;
}

// تعریف داده‌های استاتیک
const advantagesData = [
  {
    iconName: "ShieldCheck",
    title: "کیفیت برتر",
    description:
      "تضمین بهترین کیفیت مواد اولیه و محصولات نهایی مطابق با استانداردهای روز.",
  },
  {
    iconName: "LayoutGrid",
    title: "تنوع بی‌نظیر",
    description:
      "ارائه طیف گسترده‌ای از محصولات چوبی برای تمامی نیازهای ساختمانی و دکوراتیو شما.",
  },
  {
    iconName: "Users",
    title: "مشاوره تخصصی",
    description:
      "بهره‌مندی از مشاوره رایگان کارشناسان مجرب ما برای بهترین انتخاب.",
  },
  {
    iconName: "Truck",
    title: "ارسال سریع",
    description: "تضمین ارسال به موقع و مطمئن سفارشات شما به سراسر کشور.",
  },
];

const testimonialsData = [
  {
    avatarSrc: "/image/avatars/1.jpg",
    name: "مشتری ۱ - رضا احمدی",
    testimonial:
      "کیفیت محصولات چوب ونداد بی‌نظیر است! واقعاً از خریدم راضی هستم و به همه پیشنهاد می‌کنم.",
  },
  {
    avatarSrc: "/image/avatars/2.jpg",
    name: "مشتری ۲ - سارا محمدی",
    testimonial:
      "مشاوره تخصصی که دریافت کردم خیلی در انتخابم کمکم کرد. ممنون از تیم حرفه‌ای شما.",
  },
  {
    avatarSrc: "/image/avatars/3.jpg",
    name: "مشتری ۳ - شرکت ساختمانی نوین",
    testimonial:
      "برای پروژه جدیدمان تمام چوب مورد نیاز را از ونداد تهیه کردیم. ارسال سریع و کیفیت بالا از ویژگی‌های بارزشان بود.",
  },
];

// کامپوننت اصلی صفحه که حالا یک Server Component است
export default async function Home() {
  // واکشی داده‌های محصولات در سمت سرور
  const productsData = await getProducts();

  return (
    <main>
      {/* پاس دادن داده‌های سرور و استاتیک به کامپوننت کلاینت */}
      <HomePageClient
        advantagesData={advantagesData}
        productsData={productsData || []} // اگر productsData null بود، آرایه خالی پاس بده
        testimonialsData={testimonialsData}
      />
    </main>
  );
}
