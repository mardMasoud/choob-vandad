// src/components/FeaturedCategories.tsx
import Link from 'next/link';
import Image from 'next/image';
import type { Category } from '@/lib/types';

interface FeaturedCategoriesProps {
  categories: Category[];
}

const FeaturedCategories: React.FC<FeaturedCategoriesProps> = ({ categories }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-800">
            دسته‌بندی‌های اصلی محصولات
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            محصول مورد نظر خود را در دسته‌بندی تخصصی آن بیابید.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link key={index} href={category.link} className="group block">
              <div className="relative w-full overflow-hidden rounded-lg shadow-lg aspect-square transition-all duration-500 transform group-hover:shadow-2xl group-hover:-translate-y-2">
                {/* ۱. تصویر در پایین‌ترین لایه */}
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* ۲. لایه متن با پس‌زمینه گرادیانت */}
                {/* این لایه جایگزین لایه تیره و لایه متن قبلی شده است */}
                <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
                  <h3 className="text-2xl font-bold text-white drop-shadow-md">
                    {category.name}
                  </h3>
                </div>

              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;