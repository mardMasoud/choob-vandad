// src/types/index.ts
export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  short_description: string | null;
  main_image_url: string | null;
  gallery_image_urls: string[] | null;
  hpl_finish: string | null;
  thickness_mm: number | null;
  dimensions_info: {
    standard_length_cm?: number;
    standard_widths_cm?: number[];
    notes?: string;
    [key: string]: any;
  } | null;
  color_palette: string[] | null;
  categories: string[] | null;
  sku: string | null;
  stock_status?: string | null;
  price?: number | null;
  price_indicator?: string | null;
  is_featured?: boolean;
  is_published?: boolean;
}