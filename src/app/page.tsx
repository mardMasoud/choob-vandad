// src/app/page.tsx
"use client";

// وارد کردن کامپوننت‌های اصلی بخش‌های صفحه
import HeroSlider from "@/components/HeroSlider";
import IntroAndAdvantagesSection from "@/components/IntroAndAdvantagesSection";
import ProductsSection from "@/components/ProductsSection"; // حالا خودش داده‌ها را از Supabase می‌خواند
import TestimonialsSection from "@/components/TestimonialsSection";

// وارد کردن آیکون‌ها فقط برای داده‌هایی که در همین فایل تعریف می‌شوند (advantagesData)
import { ShieldCheck, LayoutGrid, Users, Truck } from "lucide-react";

// --- داده‌های صفحه ---
// این داده‌ها در آینده می‌توانند از یک API خوانده شوند یا به فایل‌های جداگانه منتقل شوند.

const images = [
  {
    src: "/image/hero/hero-slide-1.jpg",
    alt: "اسلاید اول چوب ونداد",
    title: "تخصص در بهترین نوع چوب",
    description: "محصولات ما با دقت و از بهترین مواد اولیه تهیه می‌شوند.",
    buttonText: "مشاهده محصولات",
    buttonLink: "/products",
  },
  {
    src: "/image/hero/hero-slide-2.jpg",
    alt: "اسلاید دوم چوب ونداد",
    title: "طراحی مدرن، کیفیت بی‌نظیر",
    description: "با چوب ونداد، زیبایی و دوام را به خانه خود بیاورید.",
    buttonText: "پروژه‌های ما",
    buttonLink: "/projects",
  },
  {
    src: "/image/hero/hero-slide-3.jpg",
    alt: "اسلاید سوم چوب ونداد",
    title: "مشاوره تخصصی رایگان",
    description:
      "کارشناسان ما آماده ارائه مشاوره برای انتخاب بهترین محصول هستند.",
    buttonText: "تماس با ما",
    buttonLink: "/contact",
  },
  {
    src: "/image/hero/hero-slide-4.jpg",
    alt: "اسلاید چهارم چوب ونداد",
    title: "تنوع بی‌نظیر محصولات",
    description: "انواع چوب‌های ساختمانی و دکوراتیو با بهترین قیمت.",
    buttonText: "همه محصولات",
    buttonLink: "/products",
  },
  {
    src: "/image/hero/hero-slide-5.jpg",
    alt: "اسلاید پنجم چوب ونداد",
    title: "کیفیت اتفاقی نیست!",
    description: "تجربه سال‌ها حضور در بازار چوب ایران.",
    buttonText: "درباره ما",
    buttonLink: "/about",
  },
];

const advantagesData = [
  {
    icon: ShieldCheck,
    title: "کیفیت برتر",
    description:
      "تضمین بهترین کیفیت مواد اولیه و محصولات نهایی مطابق با استانداردهای روز.",
  },
  {
    icon: LayoutGrid,
    title: "تنوع بی‌نظیر",
    description:
      "ارائه طیف گسترده‌ای از محصولات چوبی برای تمامی نیازهای ساختمانی و دکوراتیو شما.",
  },
  {
    icon: Users,
    title: "مشاوره تخصصی",
    description:
      "بهره‌مندی از مشاوره رایگان کارشناسان مجرب ما برای بهترین انتخاب.",
  },
  {
    icon: Truck,
    title: "ارسال سریع",
    description: "تضمین ارسال به موقع و مطمئن سفارشات شما به سراسر کشور.",
  },
];

// آرایه productsData دیگر در اینجا لازم نیست، چون ProductsSection خودش داده‌ها را از Supabase می‌خواند
// const productsData = [ ... ];

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

export default function Home() {
  return (
    <main>
      <HeroSlider images={images} />
      <IntroAndAdvantagesSection advantages={advantagesData} />
      {/* کامپوننت ProductsSection دیگر پراپ products را دریافت نمی‌کند */}
      <ProductsSection />
      <TestimonialsSection testimonials={testimonialsData} />
      {/* <Footer /> */} {/* فوتر در layout.tsx قرار دارد */}
    </main>
  );
}
