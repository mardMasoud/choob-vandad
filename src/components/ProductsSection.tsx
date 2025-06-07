// src/components/ProductsSection.tsx
import React from 'react';
import ProductCard from '@/components/ProductCard';
import type { Product } from '@/lib/types';

interface ProductsSectionProps {
  products: Product[];
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ products }) => {
  if (!Array.isArray(products)) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-12">
            محصولات ما
          </h2>
          <p className="text-center text-red-500">خطا در بارگذاری محصولات.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-12">
          محصولات ما
        </h2>
        
        {products.length > 0 ? (
          // تغییر در اینجا: کلاس‌های گرید و فاصله برای ۶ ستون به‌روز شدند
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                imageSrc={product.image_src}
                name={product.name}
                price={product.price ? `${product.price.toLocaleString('fa-IR')} تومان` : 'تماس بگیرید'}
                description={product.description || 'توضیحات موجود نیست.'}
                stockQuantity={product.stock_quantity}
                slug={product.slug || product.id.toString()}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">محصولی برای نمایش وجود ندارد.</p>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;