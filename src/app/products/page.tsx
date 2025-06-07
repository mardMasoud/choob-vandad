// src/app/products/page.tsx
"use client";

import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "@/components/ProductCard";
import PaginationControls from "@/components/PaginationControls";
import { getPaginatedProductsAction } from "@/lib/actions";

interface Product {
  id: number;
  name: string;
  description: string | null;
  price: number | null;
  image_src: string;
  stock_quantity: number;
  slug: string | null;
}

const PRODUCTS_PER_PAGE = 12;

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  const currentPage = Math.max(Number(page), 1);

  const { data, isLoading, isError, error, isPlaceholderData } = useQuery({
    // isPlaceholderData را هم اضافه می‌کنیم
    queryKey: ["products", currentPage],
    queryFn: () =>
      getPaginatedProductsAction({
        page: currentPage,
        limit: PRODUCTS_PER_PAGE,
      }),
    // تغییر در اینجا: استفاده از placeholderData به جای keepPreviousData
    placeholderData: (previousData) => previousData,
  });

  const products = data?.products;
  const totalProducts = data?.count;
  const totalPages = Math.ceil((totalProducts || 0) / PRODUCTS_PER_PAGE);

  return (
    <div className="bg-white py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12 lg:mb-16">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800">
            همه محصولات
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
            جدیدترین و باکیفیت‌ترین محصولات چوبی را در &quot;چوب ونداد&quot;
            بیابید.
          </p>
        </header>

        {/* اگر isLoading است و داده placeholder نداریم، لودینگ را نشان بده */}
        {isLoading && !isPlaceholderData ? (
          <div className="text-center py-20">در حال بارگذاری محصولات...</div>
        ) : isError ? (
          <div className="text-center py-20 text-red-500">
            خطا در بارگذاری محصولات: {error.message}
          </div>
        ) : !products || products.length === 0 ? (
          <div className="text-center py-20 text-gray-600">
            محصولی برای نمایش یافت نشد.
          </div>
        ) : (
          <>
            {/* یک استایل برای زمانی که داده‌ها در حال لود شدن در پس‌زمینه هستند */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 min-h-[500px] 
                            ${
                              isPlaceholderData
                                ? "opacity-50 transition-opacity duration-300"
                                : "opacity-100"
                            }`}
            >
              {products.map((product: Product) => (
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
            <PaginationControls totalPages={totalPages} />
          </>
        )}
      </div>
    </div>
  );
}
