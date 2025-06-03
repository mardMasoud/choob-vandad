// src/components/AdvantagesGrid.tsx
import React from 'react';
import AdvantageCard from '@/components/AdvantageCard'; // کامپوننت کارت مزیت
import { LucideProps, ShieldCheck, LayoutGrid, Users, Truck } from 'lucide-react'; // آیکون‌ها

// تعریف نوع برای داده‌های مزایا
interface Advantage {
  icon: React.ElementType<LucideProps>;
  title: string;
  description: string;
}

// داده‌های مزایا را به عنوان پراپ دریافت می‌کنیم
interface AdvantagesGridProps {
  advantages: Advantage[];
}

const AdvantagesGrid: React.FC<AdvantagesGridProps> = ({ advantages }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {advantages.map((advantage, index) => (
        <AdvantageCard
          key={index}
          icon={advantage.icon}
          title={advantage.title}
          description={advantage.description}
        />
      ))}
    </div>
  );
};

export default AdvantagesGrid;
