import React from 'react';
import Icon, { IconName } from './Icon'; // وارد کردن Icon و نوع IconName

interface AdvantageCardProps {
  iconName: IconName; // استفاده از نوع امن و دقیق
  title: string;
  description: string;
}

const AdvantageCard: React.FC<AdvantageCardProps> = ({ iconName, title, description }) => {
  const focusRing = "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500";
  
  return (
    <div 
      className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center ${focusRing}`}
      tabIndex={0}
    >
      <div className="flex justify-center mb-4">
        {/* دیگر نیازی به as any نیست */}
        <Icon name={iconName} className="h-12 w-12 text-teal-600" strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default AdvantageCard;