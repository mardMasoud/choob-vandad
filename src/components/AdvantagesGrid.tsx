// src/components/AdvantagesGrid.tsx
import React from "react";
import AdvantageCard from "@/components/AdvantageCard";
// دیگر نیازی به import مستقیم آیکون‌ها در این فایل نیست

// تعریف نوع برای داده‌های هر مزیت (با iconName)
// تغییر در اینجا: پراپرتی icon به iconName تغییر کرد
interface Advantage {
  iconName: string; // به جای icon
  title: string;
  description: string;
}

// تعریف پراپ برای کامپوننت AdvantagesGrid
interface AdvantagesGridProps {
  advantages: Advantage[];
}

const AdvantagesGrid: React.FC<AdvantagesGridProps> = ({ advantages }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {advantages.map((advantage, index) => (
        <AdvantageCard
          key={index}
          iconName={advantage.iconName} // پاس دادن iconName به AdvantageCard
          title={advantage.title}
          description={advantage.description}
        />
      ))}
    </div>
  );
};

export default AdvantagesGrid;
