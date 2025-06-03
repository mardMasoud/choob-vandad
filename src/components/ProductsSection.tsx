// src/components/ProductsSection.tsx
import React from 'react';
import ProductCard from '@/components/ProductCard'; // کامپوننت کارت محصول

// تعریف نوع برای داده‌های هر محصول
interface ProductData {
  imageSrc: string;
  name: string;
  price: string;
  productLink?: string;
  description: string;
  stockQuantity: number;
}

// تعریف پراپ برای کامپوننت ProductsSection
interface ProductsSectionProps {
  products: ProductData[];
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ products }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-12">
          محصولات ما
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              imageSrc={product.imageSrc}
              name={product.name}
              price={product.price}
              description={product.description}
              stockQuantity={product.stockQuantity}
              productLink={product.productLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;