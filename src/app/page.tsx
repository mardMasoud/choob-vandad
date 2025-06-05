// src/app/page.tsx
"use client";

import HeroSection from "@/components/HeroSection";
import IntroAndAdvantagesSection from "@/components/IntroAndAdvantagesSection";
import ProductsSection from "@/components/ProductsSection"; // این کامپوننت حالا از useQuery استفاده می‌کند
import TestimonialsSection from "@/components/TestimonialsSection";

// وارد کردن آیکون‌ها برای advantagesData
import { ShieldCheck, LayoutGrid, Users, Truck } from "lucide-react";

// --- داده‌های صفحه ---
// این داده‌ها (images, advantagesData, testimonialsData) به صورت استاتیک تعریف شده‌اند.
// HeroSection داده‌های خود را داخلی مدیریت می‌کند.
// ProductsSection داده‌های خود را با TanStack Query از Supabase واکشی می‌کند.

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

// آرایه productsData دیگر در اینجا لازم نیست، چون ProductsSection خودش داده‌ها را واکشی می‌کند.

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
      {/* HeroSection داده‌های خود (slidesData) را به صورت داخلی دارد یا اگر بخواهیم می‌توانیم images را به آن پاس دهیم.
          با توجه به کد HeroSection.tsx که شما ارسال کردید، داده‌های slidesData داخل آن تعریف شده‌اند.
          بنابراین، نیازی به پاس دادن پراپ images به آن نیست.
      */}
      <HeroSection />
      <IntroAndAdvantagesSection advantages={advantagesData} />
      <ProductsSection />{" "}
      {/* این کامپوننت داده‌هایش را خودش با TanStack Query واکشی می‌کند */}
      <TestimonialsSection testimonials={testimonialsData} />
    </main>
  );
}
