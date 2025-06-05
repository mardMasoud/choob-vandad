// src/components/ProductsSection.tsx
import React from "react";
import ProductCard from "@/components/ProductCard";
import { supabase } from "@/lib/supabaseClient";

// اینترفیس ProductData حذف شد، چون نوع داده از Supabase استنتاج می‌شود یا می‌توانیم
// از تایپ‌های خود Supabase استفاده کنیم اگر نیاز به تعریف صریح باشد.

const ProductsSection = async () => {
  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(8);

  if (error) {
    console.error("Error fetching products:", error);
    return <p className="text-center text-red-500">خطا در بارگذاری محصولات.</p>;
  }

  if (!products || products.length === 0) {
    return (
      <p className="text-center text-gray-500">محصولی برای نمایش وجود ندارد.</p>
    );
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-12">
          محصولات ما
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* TypeScript در اینجا نوع 'product' را از نتیجه 'supabase.from('products').select('*')' استنتاج می‌کند.
            اگر بخواهید نوع آن را صریحاً مشخص کنید، می‌توانید از تایپ‌های تولید شده توسط Supabase CLI استفاده کنید 
            یا یک اینترفیس مشابه آنچه قبلاً داشتید، نگه دارید و 'products' را به آن cast کنید:
            `products.map((product: ProductData) => (`
            اما برای این مرحله، حذف اینترفیس بلااستفاده کافی است.
          */}
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
