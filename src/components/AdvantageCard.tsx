// src/components/AdvantageCard.tsx
import React from "react";
import Icon from "./Icon"
// تعریف پراپ‌های کامپوننت
// تغییر در اینجا: پراپ icon به iconName تغییر کرد
interface AdvantageCardProps {
  iconName: string;
  title: string;
  description: string;
}

const AdvantageCard: React.FC<AdvantageCardProps> = ({
  iconName,
  title,
  description,
}) => {
  const focusRing =
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500";

  // ما از تایپ any برای name در کامپوننت Icon استفاده می‌کنیم تا از خطای تایپ‌اسکریپت جلوگیری کنیم،
  // چون مطمئن هستیم که iconName یک کلید معتبر از lucide-react است.
  return (
    <div
      className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center ${focusRing}`}
      tabIndex={0}
    >
      <div className="flex justify-center mb-4">
        {/* استفاده از کامپوننت Icon با پراپ name */}
        <Icon
          name={iconName as any}
          className="h-12 w-12 text-teal-600"
          strokeWidth={1.5}
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default AdvantageCard;
