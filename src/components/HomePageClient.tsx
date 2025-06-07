// src/components/HomePageClient.tsx
'use client';

import HeroSection from '@/components/HeroSection';
import IntroAndAdvantagesSection from '@/components/IntroAndAdvantagesSection';
import ProductsSection from '@/components/ProductsSection';
import TestimonialsSection from '@/components/TestimonialsSection';

// ۱. وارد کردن Typeهای دقیق از فایل مشترک
import type { Advantage, Product, Testimonial } from '@/lib/types';

// ۲. تعریف پراپ‌ها با استفاده از Typeهای وارد شده
interface HomePageClientProps {
  advantagesData: Advantage[];
  productsData: Product[];
  testimonialsData: Testimonial[];
}

const HomePageClient: React.FC<HomePageClientProps> = ({
  advantagesData,
  productsData,
  testimonialsData,
}) => {
  return (
    <>
      <HeroSection />
      <IntroAndAdvantagesSection advantages={advantagesData} />
      <ProductsSection products={productsData} />
      <TestimonialsSection testimonials={testimonialsData} />
    </>
  );
};

export default HomePageClient;