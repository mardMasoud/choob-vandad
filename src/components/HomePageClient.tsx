// src/components/HomePageClient.tsx
'use client';

import HeroSection from '@/components/HeroSection';
import IntroAndAdvantagesSection from '@/components/IntroAndAdvantagesSection';
import ProductsSection from '@/components/ProductsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FeaturedCategories from '@/components/FeaturedCategories'; // کامپوننت جدید
import CtaSection from '@/components/CtaSection'; // کامپوننت جدید

import type { Advantage, Product, Testimonial, Category } from '@/lib/types';

interface HomePageClientProps {
  advantagesData: Advantage[];
  productsData: Product[];
  testimonialsData: Testimonial[];
  categoriesData: Category[]; // پراپ جدید
}

const HomePageClient: React.FC<HomePageClientProps> = ({
  advantagesData,
  productsData,
  testimonialsData,
  categoriesData, // دریافت پراپ جدید
}) => {
  return (
    <>
      <HeroSection />
      <IntroAndAdvantagesSection advantages={advantagesData} />
      <FeaturedCategories categories={categoriesData} /> {/* استفاده از کامپوننت جدید */}
      <ProductsSection products={productsData} />
      <TestimonialsSection testimonials={testimonialsData} />
      <CtaSection /> {/* استفاده از کامپوننت جدید */}
    </>
  );
};

export default HomePageClient;