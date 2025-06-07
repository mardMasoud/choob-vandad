

//tsx:src/components/ProductsSection.tsx
import React from 'react';
import ProductCard from '@/components/ProductCard';
import type { Product } from '@/lib/types';
import Link from 'next/link'; // ۱. وارد کردن کامپوننت Link
import { ArrowLeft } from 'lucide-react'; // ۲. وارد کردن آیکون برای دکمه

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

        {/* ۳. بخش جدید: دکمه مشاهده همه محصولات */}
        {/* این دکمه فقط در صورتی نمایش داده می‌شود که محصولی وجود داشته باشد */}
        {products.length > 0 && (
          <div className="mt-12 text-center">
            <Link 
              href="/products" 
              className="inline-flex items-center gap-2 bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              <span>مشاهده همه محصولات</span>
              <ArrowLeft size={20} />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
};

export default ProductsSection;
