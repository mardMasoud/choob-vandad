// src/components/IntroAndAdvantagesSection.tsx
import React from "react";
import IntroductionText from "@/components/IntroductionText";
import AdvantagesGrid from "@/components/AdvantagesGrid";

// تعریف نوع برای داده‌های هر مزیت (این باید با نوعی که در AdvantagesGrid استفاده می‌شود یکی باشد)
// تغییر در اینجا: پراپرتی icon به iconName تغییر کرد تا با داده‌های ورودی مطابقت داشته باشد.
interface Advantage {
  iconName: string; // به جای icon
  title: string;
  description: string;
}

// تعریف پراپ برای کامپوننت IntroAndAdvantagesSection
interface IntroAndAdvantagesSectionProps {
  advantages: Advantage[];
}

const IntroAndAdvantagesSection: React.FC<IntroAndAdvantagesSectionProps> = ({
  advantages,
}) => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 text-center">
        <IntroductionText />
        {/* این کامپوننت حالا داده‌ها را با فرمت صحیح دریافت می‌کند */}
        <AdvantagesGrid advantages={advantages} />
      </div>
    </section>
  );
};

export default IntroAndAdvantagesSection;
