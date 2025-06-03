// src/components/HeroSlider.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// استایل‌های ضروری Swiper و ماژول‌ها
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination'; // اگر نقاط صفحه‌بندی را نمی‌خواهید، این خط را کامنت نگه دارید یا حذف کنید

// تعریف نوع برای هر آیتم تصویر در پراپ‌ها
interface SlideImage {
  src: string;
  alt: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

// تعریف پراپ‌های کامپوننت HeroSlider
interface HeroSliderProps {
  images: SlideImage[];
}

const HeroSlider: React.FC<HeroSliderProps> = ({ images }) => {
  return (
    <section className="relative h-[75vh] w-full"> {/* ارتفاع را از page.tsx به اینجا منتقل کردیم */}
      <Swiper
        modules={[Autoplay, Navigation, Pagination]} // Pagination را موقتا اضافه کردم، اگر نخواستید حذف کنید
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }} // Pagination را موقتا اضافه کردم، اگر نخواستید حذف کنید
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="h-full w-full"
      >
        {images.map((image, idx) => (
          <SwiperSlide key={idx} className="relative h-full w-full overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={idx === 0}
              className="object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6 z-10 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg">
                {image.title}
              </h1>
              <p className="text-lg md:text-xl max-w-xl lg:max-w-2xl mb-8 drop-shadow-md">
                {image.description}
              </p>
              <Link
                href={image.buttonLink}
                className="bg-teal-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 focus:ring-offset-black"
              >
                {image.buttonText}
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;