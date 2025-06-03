// src/components/ProductCard.tsx
import Image from 'next/image';
import Link from 'next/link';
// آیکون‌های جدید برای موجودی و قیمت
import { PackageCheck, Tag, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  imageSrc: string;
  name: string;
  price: string;
  description: string; // پراپ جدید برای توضیحات
  stockQuantity: number; // پراپ جدید برای تعداد موجودی
  productLink?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  name,
  price,
  description,
  stockQuantity,
  productLink = '#',
}) => {
  const focusRing = "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500";
  const isAvailable = stockQuantity > 0;

  return (
    <div
      className={`group relative flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden 
                  shadow-sm hover:shadow-2xl transition-all duration-300 ease-in-out 
                  transform hover:-translate-y-1 ${focusRing}`}
      tabIndex={0}
    >
      <Link href={productLink} className="block">
        <div className="w-full aspect-square overflow-hidden">
          <Image
            src={imageSrc}
            alt={name}
            width={400}
            height={400}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>

      <div className="p-4 flex flex-col flex-grow">
        <Link href={productLink} className="block mb-2">
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-teal-700 transition-colors truncate">
            {name}
          </h3>
        </Link>

        {/* توضیحات محصول */}
        <p className="text-xs text-gray-500 mb-3 line-clamp-2 leading-relaxed flex-grow">
          {description}
        </p>

        <div className="mt-auto"> {/* این div برای قرار دادن قیمت و موجودی در پایین کارت است */}
          {/* قیمت محصول */}
          <div className="flex items-center text-teal-600 mb-2">
            <Tag size={18} className="ml-2 opacity-75" /> {/* آیکون برای قیمت */}
            <p className="text-lg font-bold">
              {price}
            </p>
          </div>

          {/* تعداد موجودی */}
          <div className={`flex items-center text-sm ${isAvailable ? 'text-green-600' : 'text-red-600'}`}>
            <PackageCheck size={18} className="ml-2 opacity-75" /> {/* آیکون برای موجودی */}
            <span>
              {isAvailable ? `موجودی: ${stockQuantity} عدد` : 'ناموجود'}
            </span>
          </div>
        </div>
      </div>

      {/* (اختیاری) دکمه افزودن به سبد خرید - در آینده می‌توانیم فعال کنیم */}
      {/* <div className="p-4 border-t border-gray-200 mt-auto">
        <button 
          disabled={!isAvailable}
          className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-white font-semibold transition-colors
                      ${isAvailable 
                        ? 'bg-teal-600 hover:bg-teal-700' 
                        : 'bg-gray-400 cursor-not-allowed'}
                      ${focusRing}`}
        >
          <ShoppingCart size={18} />
          {isAvailable ? 'افزودن به سبد' : 'ناموجود'}
        </button>
      </div> */}
    </div>
  );
};

export default ProductCard;