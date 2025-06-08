// src/components/HomePageClient.tsx
'use client';

import HeroSection from '@/components/HeroSection';
import IntroAndAdvantagesSection from '@/components/IntroAndAdvantagesSection';
import ProductsSection from '@/components/ProductsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FeaturedCategories from '@/components/FeaturedCategories';
import CtaSection from '@/components/CtaSection';
import PurchaseProcess from '@/components/PurchaseProcess'; // ۱. وارد کردن کامپوننت جدید

import type { Advantage, Product, Testimonial, Category } from '@/lib/types';

interface HomePageClientProps {
  advantagesData: Advantage[];
  productsData: Product[];
  testimonialsData: Testimonial[];
  categoriesData: Category[];
}

const HomePageClient: React.FC<HomePageClientProps> = ({
  advantagesData,
  productsData,
  testimonialsData,
  categoriesData,
}) => {
  return (
    <>
      <HeroSection />
      <IntroAndAdvantagesSection advantages={advantagesData} />
      <FeaturedCategories categories={categoriesData} />
      <ProductsSection products={productsData} />
      <PurchaseProcess /> {/* ۲. استفاده از کامپوننت جدید */}
      <TestimonialsSection testimonials={testimonialsData} />
      <CtaSection />
    </>
  );
};

export default HomePageClient;