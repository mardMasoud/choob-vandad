// src/app/products/page.tsx
import ProductCard from "@/components/ProductCard";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";

interface Product {
  id: number;
  created_at: string;
  name: string;
  description: string | null;
  price: number | null;
  image_src: string;
  stock_quantity: number;
  product_link: string | null;
  category: string | null;
}

export default async function ProductsPage() {
  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .order("name", { ascending: true });

  if (error) {
    console.error("Error fetching products for products page:", error);
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-6">
          خطا در بارگذاری محصولات
        </h1>
        <p className="text-lg mb-8">
          متاسفانه مشکلی در دریافت اطلاعات محصولات پیش آمده است.
        </p>
        <Link
          href="/"
          className="text-teal-600 hover:text-teal-700 font-semibold"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold text-gray-700 mb-6">محصولات</h1>
        <p className="text-lg mb-8">
          در حال حاضر محصولی برای نمایش وجود ندارد.
        </p>
        <Link
          href="/"
          className="text-teal-600 hover:text-teal-700 font-semibold"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12 lg:mb-16">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800">
            همه محصولات
          </h1>
          {/* اصلاح شده: استفاده از &quot; برای نقل قول */}
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
            جدیدترین و باکیفیت‌ترین محصولات چوبی را در &quot;چوب ونداد&quot;
            بیابید.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
              productLink={product.product_link || `/products/${product.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
