// src/components/ProductCard.tsx
import Image from "next/image";
import Link from "next/link";
import { PackageCheck, Tag } from "lucide-react";

interface ProductCardProps {
  imageSrc: string;
  name: string;
  price: string;
  description: string;
  stockQuantity: number;
  slug: string; // تغییر در اینجا: به جای productLink از slug استفاده می‌کنیم
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  name,
  price,
  description,
  stockQuantity,
  slug, // دریافت slug
}) => {
  const focusRing =
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500";
  const isAvailable = stockQuantity > 0;

  // ساخت لینک با استفاده از slug
  const productHref = `/products/${slug}`;

  return (
    <div
      className={`group relative flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden 
                  shadow-sm hover:shadow-2xl transition-all duration-300 ease-in-out 
                  transform hover:-translate-y-1 ${focusRing}`}
      tabIndex={0}
    >
      <Link
        href={productHref}
        className="block"
      >
        <div className="w-full aspect-square bg-gray-100 overflow-hidden">
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
        <Link
          href={productHref}
          className="block mb-2"
        >
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-teal-700 transition-colors truncate">
            {name}
          </h3>
        </Link>

        <p className="text-xs text-gray-500 mb-3 line-clamp-2 leading-relaxed flex-grow">
          {description}
        </p>

        <div className="mt-auto">
          <div className="flex items-center text-teal-600 mb-2">
            <Tag
              size={18}
              className="ml-2 opacity-75"
            />
            <p className="text-lg font-bold">{price}</p>
          </div>
          <div
            className={`flex items-center text-sm ${
              isAvailable ? "text-green-600" : "text-red-600"
            }`}
          >
            <PackageCheck
              size={18}
              className="ml-2 opacity-75"
            />
            <span>
              {isAvailable ? `موجودی: ${stockQuantity} عدد` : "ناموجود"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
