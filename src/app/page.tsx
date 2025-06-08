// src/app/page.tsx
import HomePageClient from '@/components/HomePageClient';
import { supabase } from '@/lib/supabaseClient';
import type { Advantage, Product, Testimonial, Category } from '@/lib/types';

async function getHomepageProducts(): Promise<Product[]> {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(12);

    if (error) {
      console.error('Error fetching homepage products:', error);
      return [];
    }
    return data || [];
  } catch (err) {
    console.error('Caught an exception fetching homepage products:', err);
    return [];
  }
}

const advantagesData: Advantage[] = [
    { iconName: "ShieldCheck", title: 'کیفیت برتر', description: 'تضمین بهترین کیفیت مواد اولیه.' },
    { iconName: "LayoutGrid", title: 'تنوع بی‌نظیر', description: 'طیف گسترده‌ای از محصولات چوبی.' },
    { iconName: "Users", title: 'مشاوره تخصصی', description: 'مشاوره رایگان توسط کارشناسان مجرب.' },
    { iconName: "Truck", title: 'ارسال سریع', description: 'ارسال به موقع و مطمئن به سراسر کشور.' },
];

const testimonialsData: Testimonial[] = [
    { avatarSrc: '/image/avatars/1.jpg', name: 'رضا احمدی', testimonial: 'کیفیت محصولات واقعاً بی‌نظیر است! از خریدم کاملاً راضی هستم.' },
    { avatarSrc: '/image/avatars/2.jpg', name: 'سارا محمدی', testimonial: 'مشاوره تخصصی که دریافت کردم خیلی در انتخابم کمکم کرد. ممنونم.' },
    { avatarSrc: '/image/avatars/3.jpg', name: 'شرکت ساختمانی نوین', testimonial: 'ارسال سریع و کیفیت بالا از ویژگی‌های بارز چوب ونداد بود.' },
];

// تغییر در اینجا: عناوین دسته‌بندی‌ها به‌روز شدند
const categoriesData: Category[] = [
  { name: 'ورق‌های MDF', image: '/image/categories/mdf.jpg', link: '/categories/mdf' },
  { name: 'ورقهای هایگلاس', image: '/image/categories/high-gloss.jpg', link: '/categories/high-gloss' }, // چوب طبیعی به ورقهای هایگلاس تغییر کرد
  { name: 'صفحه‌های Mdf', image: '/image/categories/mdf-sheets.jpg', link: '/categories/mdf-sheets' }, // یراق آلات به صفحه‌های Mdf تغییر کرد
];

export default async function Home() {
  const productsData = await getHomepageProducts();

  return (
    <main>
      <HomePageClient
        advantagesData={advantagesData}
        productsData={productsData}
        testimonialsData={testimonialsData}
        categoriesData={categoriesData}
      />
    </main>
  );
}