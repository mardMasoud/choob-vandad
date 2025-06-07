import ProductCard from "@/components/ProductCard";
import { supabase } from "@/lib/supabaseClient";
import PaginationControls from "@/components/PaginationControls";

export const dynamic = 'force-dynamic';

interface ProductsPageProps {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

const PRODUCTS_PER_PAGE = 18;

export default async function ProductsPage({ searchParams: searchParamsPromise }: ProductsPageProps) {
  // حل کردن Promise برای searchParams
  const searchParams = await searchParamsPromise;
  // console.log("resolved searchParams:", searchParams); // لاگ برای دیباگ

  // مدیریت page با مقدار پیش‌فرض '1'
  let page: string = '1';
  if (searchParams && typeof searchParams.page !== 'undefined') {
    const pageParam = searchParams.page;
    if (Array.isArray(pageParam)) {
      page = pageParam.length > 0 ? pageParam[0] : '1';
    } else {
      page = pageParam || '1';
    }
  }
  // console.log("page:", page); // لاگ برای دیباگ

  const currentPage = Math.max(Number(page), 1);
  // console.log("currentPage:", currentPage); // لاگ برای دیباگ
  const offset = (currentPage - 1) * PRODUCTS_PER_PAGE;
  // console.log("offset:", offset); // لاگ برای دیباگ

  // دریافت محصولات از Supabase
  const { data: products, error: productsError } = await supabase
    .from("products")
    .select("*")
    .order("name", { ascending: true })
    .range(offset, offset + PRODUCTS_PER_PAGE - 1);

  // دریافت تعداد کل محصولات
  const { count: totalProducts, error: countError } = await supabase
    .from("products")
    .select("*", { count: "exact", head: true });

  // console.log("products:", products); // لاگ برای دیباگ
  // console.log("productsError:", productsError); // لاگ برای دیباگ
  // console.log("totalProducts:", totalProducts); // لاگ برای دیباگ
  // console.log("countError:", countError); // لاگ برای دیباگ

  if (productsError || countError) {
    console.error("Error fetching data for products page:", productsError || countError);
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-6">خطا در بارگذاری محصولات</h1>
        <p className="text-lg mb-8">متاسفانه مشکلی در دریافت اطلاعات پیش آمده است.</p>
      </div>
    );
  }

  const totalPages = Math.ceil((totalProducts || 0) / PRODUCTS_PER_PAGE);
  // console.log("totalPages:", totalPages); // لاگ برای دیباگ

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

        {products && products.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 min-h-[500px]">
            {products.map((product) => (
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
          <div className="text-center py-10">
            <p className="text-lg text-gray-600">محصولی برای نمایش در این صفحه یافت نشد.</p>
          </div>
        )}

        <div className="mt-16">
          <PaginationControls totalPages={totalPages} />
        </div>
      </div>
    </div>
  );
}