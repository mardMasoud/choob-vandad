// src/components/ProductsSection.tsx
"use client"; // این کامپوننت حالا یک Client Component است

import React, { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import { getProductsAction } from "@/lib/actions"; // وارد کردن Server Action از مسیر صحیح

// تعریف نوع برای محصول، برای استفاده در state و props
// این باید با اینترفیسی که در actions.ts (یا فایل تایپ مشترک) تعریف شده، یکی باشد.
interface Product {
  id: number;
  created_at: string; // معمولاً تاریخ به صورت رشته از Supabase می‌آید
  name: string;
  description: string | null;
  price: number | null;
  image_src: string;
  stock_quantity: number;
  product_link: string | null;
  category: string | null;
}

const ProductsSection = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      setError(null); // ریست کردن خطا قبل از درخواست جدید
      const result = await getProductsAction(); // فراخوانی Server Action

      if (result.error) {
        console.error("Error loading products in component:", result.error);
        setError(result.error);
        setProducts(null);
      } else {
        setProducts(result.products);
      }
      setLoading(false);
    };

    loadProducts();
  }, []); // این effect فقط یک بار پس از اولین رندر اجرا می‌شود

  if (loading) {
    return (
      <div className="text-center py-16">
        <p>در حال بارگذاری محصولات...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <p className="text-red-500">خطا در بارگذاری محصولات: {error}</p>
      </div>
    );
  }

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
              stockQuantity={product.stock_quantity} // اینجا باید از stock_quantity استفاده شود
              productLink={product.product_link || "#"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
