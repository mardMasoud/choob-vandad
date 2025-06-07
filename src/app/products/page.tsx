// src/app/products/page.tsx
import ProductCard from "@/components/ProductCard";
import { supabase } from "@/lib/supabaseClient";

import PaginationControls from "@/components/PaginationControls";


export const dynamic = 'force-dynamic';

interface ProductsPageProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}

const PRODUCTS_PER_PAGE = 12;

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const page = searchParams?.['page'] ?? '1';
  const currentPage = Math.max(Number(page), 1);
  const offset = (currentPage - 1) * PRODUCTS_PER_PAGE;

  // واکشی داده‌ها
  const { data: products, error: productsError } = await supabase
    .from("products")
    .select("*")
    .order("name", { ascending: true })
    .range(offset, offset + PRODUCTS_PER_PAGE - 1);

  const { count: totalProducts, error: countError } = await supabase
    .from("products")
    .select("*", { count: "exact", head: true });

  // اگر در هر یک از کوئری‌ها خطایی رخ داد، یک آرایه خالی برای محصولات برگردانده می‌شود
  // و کامپوننت به جای کرش کردن، پیام خطا را نمایش می‌دهد.
  if (productsError || countError) {
    console.error("Error fetching data for products page:", productsError || countError);
    // شما می‌توانید در اینجا یک صفحه خطای کامل‌تر را رندر کنید
  }

  const totalPages = Math.ceil((totalProducts || 0) / PRODUCTS_PER_PAGE);

  return (
    <div className="bg-white py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12 lg:mb-16">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800">
            همه محصولات
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
            جدیدترین و باکیفیت‌ترین محصولات چوبی را در &quot;چوب ونداد&quot; بیابید.
          </p>
        </header>
        
        {/* گارد محافظ: ابتدا وجود products را بررسی می‌کنیم */}
        {products && products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 min-h-[500px]">
            {products.map((product) => ( // در اینجا products دیگر undefined نخواهد بود
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
          // اگر خطایی رخ داده باشد یا محصولی نباشد، این پیام نمایش داده می‌شود
          <div className="text-center py-10">
            <p className="text-lg text-gray-600">
              {productsError || countError ? "خطا در بارگذاری محصولات." : "محصولی برای نمایش یافت نشد."}
            </p>
          </div>
        )}
    
        <div className="mt-16">
          <PaginationControls
            totalPages={totalPages}
          />
        </div>
      </div>
    </div>
  );
}