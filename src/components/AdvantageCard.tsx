import React from 'react'; // برای تعریف نوع IconType
import { LucideProps } from 'lucide-react'; // برای تایپ پراپ‌های آیکون

// تعریف یک نوع برای پراپ آیکون که یک کامپوننت React باشد
interface AdvantageCardProps {
  icon: React.ElementType<LucideProps>; // پراپ آیکون حالا یک کامپوننت است
  title: string;
  description: string;
}

const AdvantageCard: React.FC<AdvantageCardProps> = ({ icon: IconComponent, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
      {/* نمایش آیکون */}
      <div className="flex justify-center mb-4">
        <IconComponent className="h-12 w-12 text-teal-600" strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default AdvantageCard;