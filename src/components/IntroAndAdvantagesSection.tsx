// src/components/IntroAndAdvantagesSection.tsx
import React from 'react';
import IntroductionText from '@/components/IntroductionText';
import AdvantagesGrid from '@/components/AdvantagesGrid';
import { LucideProps } from 'lucide-react'; // برای تایپ پراپ آیکون در Advantage

// تعریف نوع برای داده‌های هر مزیت (این باید با نوعی که در AdvantagesGrid استفاده می‌شود یکی باشد)
interface Advantage {
  icon: React.ElementType<LucideProps>;
  title: string;
  description: string;
}

// تعریف پراپ برای کامپوننت IntroAndAdvantagesSection
interface IntroAndAdvantagesSectionProps {
  advantages: Advantage[];
}

const IntroAndAdvantagesSection: React.FC<IntroAndAdvantagesSectionProps> = ({ advantages }) => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 text-center">
        <IntroductionText />
        <AdvantagesGrid advantages={advantages} />
      </div>
    </section>
  );
};

export default IntroAndAdvantagesSection;