// src/components/ProductsSection.tsx
import React from "react";
import ProductCard from "@/components/ProductCard";

// تعریف نوع داده برای یک محصول
interface Product {
  id: number;
  name: string;
  description: string | null;
  price: number | null;
  image_src: string;
  stock_quantity: number;
  slug: string | null;
}

// تعریف پراپ‌هایی که این کامپوننت دریافت می‌کند
interface ProductsSectionProps {
  products: Product[];
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ products }) => {
  // این کامپوننت دیگر async نیست و خودش داده‌ای واکشی نمی‌کند
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-12">
          محصولات ما
        </h2>

        {/* بررسی اینکه آیا محصولی برای نمایش وجود دارد */}
        {products && products.length > 0 ? (
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
                slug={product.slug || product.id.toString()}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            محصولی برای نمایش یافت نشد.
          </p>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;
