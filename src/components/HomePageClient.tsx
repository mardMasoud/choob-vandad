// src/components/HomePageClient.tsx
"use client"; // این کامپوننت به دلیل HeroSlider (Swiper) کلاینت است

import HeroSection from "@/components/HeroSection";
import IntroAndAdvantagesSection from "@/components/IntroAndAdvantagesSection";
import ProductsSection from "@/components/ProductsSection";
import TestimonialsSection from "@/components/TestimonialsSection";

// تعریف پراپ‌هایی که این کامپوننت از صفحه اصلی (Server Component) دریافت می‌کند
interface HomePageClientProps {
  advantagesData: any[]; // برای سادگی فعلاً any، بهتر است نوع دقیق تعریف شود
  productsData: any[];
  testimonialsData: any[];
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
