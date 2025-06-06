// src/lib/actions.ts
"use server";

import { supabase } from "@/lib/supabaseClient";

interface Product {
  id: number;
  created_at: string;
  name: string;
  description: string | null;
  price: number | null;
  image_src: string;
  stock_quantity: number;
  product_link: string | null;
  slug: string | null;
  category: string | null;
}

export async function getPaginatedProductsAction({
  page = 1,
  limit = 12,
}: {
  page: number;
  limit: number;
}): Promise<{
  products: Product[] | null;
  count: number | null;
  error: string | null;
}> {
  try {
    const offset = (page - 1) * limit;

    const [productsResponse, countResponse] = await Promise.all([
      supabase
        .from("products")
        .select("*")
        .order("name", { ascending: true })
        .range(offset, offset + limit - 1),
      supabase.from("products").select("*", { count: "exact", head: true }),
    ]);

    if (productsResponse.error || countResponse.error) {
      throw productsResponse.error || countResponse.error;
    }

    return {
      products: productsResponse.data as Product[],
      count: countResponse.count,
      error: null,
    };
  } catch (err: any) {
    console.error("Error in getPaginatedProductsAction:", err);
    return {
      products: null,
      count: null,
      error: err.message || "An unknown error occurred.",
    };
  }
}
