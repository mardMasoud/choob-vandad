// src/app/page.tsx
"use client";

// کامپوننت‌های اصلی هر بخش از صفحه
import HeroSection from "@/components/HeroSection"; // کامپوننت جدید برای Hero Section
import IntroAndAdvantagesSection from "@/components/IntroAndAdvantagesSection";
import ProductsSection from "@/components/ProductsSection";
import TestimonialsSection from "@/components/TestimonialsSection";

// وارد کردن آیکون‌ها فقط برای داده‌هایی که در همین فایل تعریف می‌شوند (advantagesData)
import { ShieldCheck, LayoutGrid, Users, Truck } from "lucide-react";

// --- داده‌های صفحه ---
// این داده‌ها می‌توانند در آینده از یک API خوانده شوند یا به فایل‌های جداگانه منتقل شوند.

// داده‌های images حالا داخل HeroSection.tsx هستند و دیگر در این فایل لازم نیستند.
// const images = [ ... ];

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

const productsData = [
  {
    imageSrc: "/image/products/1.jpg",
    name: "محصول چوبی شماره ۱",
    price: "تماس بگیرید",
    productLink: "/products/product-1",
    description:
      "توضیح کوتاه برای محصول شماره ۱ که ویژگی‌های اصلی آن را بیان می‌کند.",
    stockQuantity: 10,
  },
  {
    imageSrc: "/image/products/2.jpg",
    name: "محصول چوبی شماره ۲",
    price: "۱,۵۰۰,۰۰۰ تومان",
    productLink: "/products/product-2",
    description:
      "این محصول با بهترین چوب گردو ساخته شده و مناسب فضاهای کلاسیک است.",
    stockQuantity: 5,
  },
  {
    imageSrc: "/image/products/3.jpg",
    name: "محصول چوبی شماره ۳",
    price: "۹۵۰,۰۰۰ تومان",
    productLink: "/products/product-3",
    description: "یک انتخاب اقتصادی و با دوام برای پروژه‌های ساختمانی.",
    stockQuantity: 0,
  },
  {
    imageSrc: "/image/products/4.jpg",
    name: "محصول چوبی شماره ۴",
    price: "۲,۲۰۰,۰۰۰ تومان",
    productLink: "/products/product-4",
    description:
      "طراحی منحصربه‌فرد با ترکیب چوب و فلز، ایده‌آل برای دکوراسیون مدرن.",
    stockQuantity: 12,
  },
  {
    imageSrc: "/image/products/5.jpg",
    name: "محصول چوبی شماره ۵",
    price: "۷۸۰,۰۰۰ تومان",
    productLink: "/products/product-5",
    description:
      "مناسب برای استفاده در فضای باز، مقاوم در برابر رطوبت و نور خورشید.",
    stockQuantity: 8,
  },
  {
    imageSrc: "/image/products/6.jpg",
    name: "محصول چوبی شماره ۶",
    price: "۳,۱۰۰,۰۰۰ تومان",
    productLink: "/products/product-6",
    description:
      "محصولی لوکس با جزئیات دقیق و ساخت بی‌نظیر برای افراد خاص‌پسند.",
    stockQuantity: 3,
  },
  {
    imageSrc: "/image/products/7.jpg",
    name: "محصول چوبی شماره ۷",
    price: "۱,۲۵۰,۰۰۰ تومان",
    productLink: "/products/product-7",
    description: "کاربردی و زیبا، مناسب برای هدیه دادن و استفاده روزمره.",
    stockQuantity: 20,
  },
  {
    imageSrc: "/image/products/8.jpg",
    name: "محصول چوبی شماره ۸",
    price: "۴,۵۰۰,۰۰۰ تومان",
    productLink: "/products/product-8",
    description: "یک سرمایه‌گذاری برای زیبایی و دوام، ساخته شده از چوب کمیاب.",
    stockQuantity: 2,
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

export default function Home() {
  return (
    <main>
      {/* استفاده از کامپوننت HeroSection */}
      {/* داده‌های اسلایدر (images) حالا داخل خود کامپوننت HeroSection مدیریت می‌شوند */}
      <HeroSection />

      <IntroAndAdvantagesSection advantages={advantagesData} />
      <ProductsSection products={productsData} />
      <TestimonialsSection testimonials={testimonialsData} />

      {/* در آینده می‌توانید کامپوننت Footer را نیز در اینجا یا در layout.tsx قرار دهید */}
      {/* <Footer /> */}
    </main>
  );
}
