// src/components/ProductCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { PackageCheck, Tag } from 'lucide-react';
// import type { Product } from '@/lib/types';

interface ProductCardProps {
  imageSrc: string;
  name: string;
  price: string;
  description: string;
  stockQuantity: number;
  slug: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  name,
  price,
  description,
  stockQuantity,
  slug,
}) => {
  // const focusRing = "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500";
  const isAvailable = stockQuantity > 0;
  const productHref = `/products/${slug}`;

  return (
    <div
      className={`group relative flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden 
                  shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out 
                  transform hover:-translate-y-1`}
    >
      <Link href={productHref} className="block">
        <div className="w-full aspect-square bg-gray-100 overflow-hidden">
          <Image
            src={imageSrc}
            alt={name}
            width={300}
            height={300}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      
      <div className="p-3 flex flex-col flex-grow"> {/* کاهش پدینگ */}
        <Link href={productHref} className="block mb-2">
          <h3 className="text-base font-semibold text-gray-800 group-hover:text-teal-700 transition-colors truncate h-6"> {/* کاهش اندازه فونت */}
            {name}
          </h3>
        </Link>

        <p className="text-xs text-gray-500 mb-3 line-clamp-2 leading-relaxed flex-grow">
          {description}
        </p>

        <div className="mt-auto pt-2 border-t border-gray-100">
          <div className="flex items-center text-teal-600 mb-1.5">
            <Tag size={16} className="ml-1.5 opacity-80" /> {/* کاهش اندازه آیکون */}
            <p className="text-sm font-bold"> {/* کاهش اندازه فونت */}
              {price}
            </p>
          </div>
          <div className={`flex items-center text-xs ${isAvailable ? 'text-green-600' : 'text-red-600'}`}>
            <PackageCheck size={16} className="ml-1.5 opacity-80" /> {/* کاهش اندازه آیکون */}
            <span>
              {isAvailable ? `موجودی: ${stockQuantity} عدد` : 'ناموجود'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;