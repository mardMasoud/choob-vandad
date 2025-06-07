// src/app/page.tsx
// این فایل یک Server Component است و 'use client' ندارد

import HeroSection from '@/components/HeroSection';
import IntroAndAdvantagesSection from '@/components/IntroAndAdvantagesSection';
import ProductsSection from '@/components/ProductsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { supabase } from '@/lib/supabaseClient';
import type { Advantage, Product, Testimonial } from '@/lib/types';

// این تابع در سمت سرور اجرا می‌شود و تضمین می‌کند همیشه یک آرایه برگرداند
async function getHomepageProducts(): Promise<Product[]> {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(8);

    if (error) {
      console.error('Error fetching homepage products:', error);
      return []; // در صورت خطا، یک آرایه خالی برگردان
    }
    return data || []; // اگر داده null بود هم آرایه خالی برگردان
  } catch (err) {
    console.error('Caught an exception fetching homepage products:', err);
    return [];
  }
}

// داده‌های استاتیک
const advantagesData: Advantage[] = [
    { iconName: "ShieldCheck", title: 'کیفیت برتر', description: 'تضمین بهترین کیفیت مواد اولیه و محصولات نهایی مطابق با استانداردهای روز.' },
    { iconName: "LayoutGrid", title: 'تنوع بی‌نظیر', description: 'ارائه طیف گسترده‌ای از محصولات چوبی برای تمامی نیازهای ساختمانی و دکوراتیو شما.' },
    { iconName: "Users", title: 'مشاوره تخصصی', description: 'بهره‌مندی از مشاوره رایگان کارشناسان مجرب ما برای بهترین انتخاب.' },
    { iconName: "Truck", title: 'ارسال سریع', description: 'تضمین ارسال به موقع و مطمئن سفارشات شما به سراسر کشور.' },
];

const testimonialsData: Testimonial[] = [
    { avatarSrc: '/image/avatars/1.jpg', name: 'مشتری ۱ - رضا احمدی', testimonial: 'کیفیت محصولات چوب ونداد بی‌نظیر است! واقعاً از خریدم راضی هستم و به همه پیشنهاد می‌کنم.' },
    { avatarSrc: '/image/avatars/2.jpg', name: 'مشتری ۲ - سارا محمدی', testimonial: 'مشاوره تخصصی که دریافت کردم خیلی در انتخابم کمکم کرد. ممنون از تیم حرفه‌ای شما.' },
    { avatarSrc: '/image/avatars/3.jpg', name: 'مشتری ۳ - شرکت ساختمانی نوین', testimonial: 'برای پروژه جدیدمان تمام چوب مورد نیاز را از ونداد تهیه کردیم. ارسال سریع و کیفیت بالا از ویژگی‌های بارزشان بود.' },
];

// کامپوننت اصلی صفحه
export default async function Home() {
  const productsData = await getHomepageProducts();

  return (
    <main>
      <HeroSection />
      <IntroAndAdvantagesSection advantages={advantagesData} />
      {/* داده‌های واکشی شده به صورت پراپ به کامپوننت نمایشی پاس داده می‌شوند */}
      <ProductsSection products={productsData} />
      <TestimonialsSection testimonials={testimonialsData} />
    </main>
  );
}