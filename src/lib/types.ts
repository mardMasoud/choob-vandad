// src/lib/types.ts
import type { IconName } from "@/components/Icon";

export interface Product {
  id: number;
  name: string;
  description: string | null;
  price: number | null;
  image_src: string;
  stock_quantity: number;
  slug: string | null;
}

export interface Advantage {
  iconName: IconName;
  title: string;
  description: string;
}

export interface Testimonial {
  avatarSrc: string;
  name: string;
  testimonial: string;
}

// این اینترفیس جدید را اضافه کنید
export interface Category {
  name: string;
  image: string;
  link: string;
}