'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  '/image/hero/hero-slide-1.jpg',
  '/image/hero/hero-slide-2.jpg',
  '/image/hero/hero-slide-3.jpg',
  '/image/hero/hero-slide-4.jpg',
  '/image/hero/hero-slide-5.jpg',
];

export default function Home() {
  return (
    <main>
      {/* Ensure this section has a defined height */}
      <section className="relative h-[60vh] w-full bg-gray-200"> {/* Added a light bg to parent for visibility */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="h-full w-full" // Swiper component itself needs full height/width of its parent
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx} className="relative h-full w-full bg-pink-200"> {/* Added a light bg to slide for visibility */}
              <Image
                src={src}
                alt={`اسلاید ${idx + 1}`}
                fill
                priority={idx === 0}
                className="object-cover"
              />
              {/* لایه تیره موقتا حذف شد
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              */}
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </main>
  );
}