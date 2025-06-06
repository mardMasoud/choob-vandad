import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

const PRODUCTS_PER_PAGE = 12;

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const pageParam = searchParams.get("page") || "1";
  const page = Math.max(parseInt(pageParam, 10) || 1, 1);
  const offset = (page - 1) * PRODUCTS_PER_PAGE;

  const [productsRes, countRes] = await Promise.all([
    supabase
      .from("products")
      .select("*")
      .order("name", { ascending: true })
      .range(offset, offset + PRODUCTS_PER_PAGE - 1),

    supabase.from("products").select("*", { count: "exact", head: true }),
  ]);

  if (productsRes.error || countRes.error) {
    return NextResponse.json(
      {
        error:
          productsRes.error?.message ||
          countRes.error?.message ||
          "خطا در دریافت داده‌ها",
      },
      { status: 500 }
    );
  }

  return NextResponse.json({
    products: productsRes.data,
    totalProducts: countRes.count ?? 0,
  });
}
