// src/components/HeroSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// استایل‌های ضروری Swiper و ماژول‌ها
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// تعریف نوع برای هر آیتم تصویر در پراپ‌ها (اگر از خارج پاس داده شود)
// برای این مثال، داده‌ها را داخل خود کامپوننت تعریف می‌کنیم
interface SlideData {
  src: string;
  alt: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

// داده‌های مربوط به اسلایدر Hero Section
// این داده‌ها را می‌توانید بعداً به عنوان پراپ از page.tsx دریافت کنید
// یا مستقیماً از یک API یا فایل داده دیگر در اینجا بخوانید.
const slidesData: SlideData[] = [
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

const HeroSection = () => {
  const focusRingTeal =
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 focus:ring-offset-black";

  return (
    <section className="relative h-[75vh] w-full">
      {" "}
      {/* ارتفاع را می‌توانید به عنوان پراپ هم دریافت کنید */}
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="h-full w-full"
      >
        {slidesData.map((slide, idx) => (
          <SwiperSlide
            key={idx}
            className="relative h-full w-full overflow-hidden"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={idx === 0}
              className="object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6 z-10 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl max-w-xl lg:max-w-2xl mb-8 drop-shadow-md">
                {slide.description}
              </p>
              <Link
                href={slide.buttonLink}
                className={`bg-teal-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors shadow-lg ${focusRingTeal}`}
              >
                {slide.buttonText}
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
