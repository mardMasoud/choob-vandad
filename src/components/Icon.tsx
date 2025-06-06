// src/components/Icon.tsx
'use client';

import React from 'react';
// ۱. وارد کردن آیکون‌هایی که در پروژه استفاده می‌کنیم به صورت مستقیم
import { 
  ShieldCheck, 
  LayoutGrid, 
  Users, 
  Truck,
  LucideProps, // برای تایپ پراپ‌ها
  Home,
  Newspaper,
  Phone,
  Calculator,
  Search,
  User,
  Menu,
  X,
  Instagram,
  Send,
  Twitter,
  Mail,
  MapPin,
  Clock,
  PackageCheck,
  Tag,
  Award,
  TrendingUp,
  ShoppingBasket,
  DollarSign
  // هر آیکون دیگری که در پروژه استفاده می‌کنید را اینجا اضافه کنید
} from 'lucide-react';

// ۲. ساخت یک نقشه از نام آیکون‌ها به کامپوننت‌هایشان
const iconMap = {
  ShieldCheck,
  LayoutGrid,
  Users,
  Truck,
  Home,
  Newspaper,
  Phone,
  Calculator,
  Search,
  User,
  Menu,
  X,
  Instagram,
  Send,
  Twitter,
  Mail,
  MapPin,
  Clock,
  PackageCheck,
  Tag,
  Award,
  TrendingUp,
  ShoppingBasket,
  DollarSign
};

// تعریف نوع برای نام آیکون‌ها بر اساس کلیدهای نقشه
export type IconName = keyof typeof iconMap;

// تعریف پراپ‌ها
interface IconProps extends LucideProps {
  name: IconName;
}

const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  // ۳. پیدا کردن کامپوننت آیکون از روی نقشه
  const LucideIcon = iconMap[name];

  if (!LucideIcon) {
    // در این حالت، چون نوع name را محدود کرده‌ایم، این اتفاق هرگز نباید بیفتد
    // اما برای اطمینان بیشتر، آن را نگه می‌داریم.
    return null; 
  }

  return <LucideIcon {...props} />;
};

export default Icon;