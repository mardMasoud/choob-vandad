// src/components/ProductsSection.tsx
"use client"; // این کامپوننت برای استفاده از useQuery باید کلاینت باشد

import React from "react";
import ProductCard from "@/components/ProductCard";
import { useQuery } from "@tanstack/react-query"; // ۱. وارد کردن useQuery
import { getProductsAction } from "@/lib/actions"; // ۲. وارد کردن Server Action که قبلاً ساختیم

// تعریف نوع برای محصول (این باید با نوعی که در actions.ts تعریف شده، یکی باشد)
interface Product {
  id: number;
  created_at: string;
  name: string;
  description: string | null;
  price: number | null;
  image_src: string;
  stock_quantity: number;
  product_link: string | null;
  category: string | null;
}

const ProductsSection = () => {
  // ۳. استفاده از useQuery برای واکشی داده‌ها
  const {
    data: queryResult, // نتیجه شامل products و error خواهد بود
    isLoading, // وضعیت در حال بارگذاری
    isError, // وضعیت خطا
    error, // خود آبجکت خطا
  } = useQuery<{ products: Product[] | null; error: string | null }, Error>({
    // تعریف نوع داده و نوع خطا
    queryKey: ["products", "homepage"], // یک کلید یکتا برای این کوئری
    queryFn: getProductsAction, // تابعی که داده‌ها را واکشی می‌کند (Server Action ما)
    // می‌توانید گزینه‌های دیگری مانند staleTime, cacheTime و ... را اینجا اضافه کنید
    // staleTime: 5 * 60 * 1000, // 5 دقیقه
  });

  if (isLoading) {
    return (
      <div className="text-center py-16">
        <p>در حال بارگذاری محصولات...</p>
      </div>
    );
  }

  // در useQuery، خطا در پراپرتی error قرار می‌گیرد
  if (isError || queryResult?.error) {
    console.error(
      "Error fetching products with useQuery:",
      error || queryResult?.error
    );
    return (
      <div className="text-center py-16">
        <p className="text-red-500">
          خطا در بارگذاری محصولات: {error?.message || queryResult?.error}
        </p>
      </div>
    );
  }

  const products = queryResult?.products;

  if (!products || products.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500">محصولی برای نمایش وجود ندارد.</p>
      </div>
    );
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-12">
          محصولات ما
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              imageSrc={product.image_src}
              name={product.name}
              price={
                product.price
                  ? `${product.price.toLocaleString("fa-IR")} تومان`
                  : "تماس بگیرید"
              }
              description={product.description || "توضیحات موجود نیست."}
              stockQuantity={product.stock_quantity}
              productLink={product.product_link || "#"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
