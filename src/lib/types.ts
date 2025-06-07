// src/lib/types.ts

// ۱. وارد کردن نوع IconName از کامپوننت Icon برای استفاده در Advantage
import type { IconName } from "@/components/Icon";

// ۲. تعریف و export کردن اینترفیس Product
export interface Product {
  id: number;
  name: string;
  description: string | null;
  price: number | null;
  image_src: string;
  stock_quantity: number;
  slug: string | null;
}

// ۳. تعریف و export کردن اینترفیس Advantage
export interface Advantage {
  iconName: IconName; // استفاده از نوع دقیق برای نام آیکون
  title: string;
  description: string;
}

// ۴. تعریف و export کردن اینترفیس Testimonial
export interface Testimonial {
  avatarSrc: string;
  name: string;
  testimonial: string;
}