"use client";

import { useState, useEffect } from "react";
import useSWR from "swr";
import ProductCard from "@/components/ProductCard";
import PaginationControls from "@/components/PaginationControls";
import { useSearchParams, useRouter } from "next/navigation";

const PRODUCTS_PER_PAGE = 12;

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // صفحه فعلی را از URL می‌خوانیم یا صفحه ۱ را انتخاب می‌کنیم
  const initialPageStr = searchParams.get("page") || "1";
  const initialPage = parseInt(initialPageStr, 10);
  const [currentPage, setCurrentPage] = useState(
    initialPage > 0 ? initialPage : 1
  );

  const apiUrl = `/api/products?page=${currentPage}`;

  const { data, error, isLoading } = useSWR(apiUrl, fetcher);

  // وقتی URL تغییر کرد (مثلاً کاربر مستقیم لینک زد)، صفحه بروزرسانی شود
  useEffect(() => {
    const pageFromURL = parseInt(searchParams.get("page") || "1", 10);
    if (pageFromURL !== currentPage && pageFromURL > 0) {
      setCurrentPage(pageFromURL);
    }
  }, [searchParams]);

  // وقتی صفحه عوض شد، URL بدون رفرش صفحه آپدیت شود
  function onPageChange(newPage: number) {
    if (
      newPage < 1 ||
      (data && newPage > Math.ceil(data.totalProducts / PRODUCTS_PER_PAGE))
    ) {
      return;
    }
    setCurrentPage(newPage);

    const url = new URL(window.location.href);
    if (newPage === 1) {
      url.searchParams.delete("page");
    } else {
      url.searchParams.set("page", newPage.toString());
    }
    router.replace(url.toString(), { scroll: false });
  }

  if (error) return <div>خطا در بارگذاری داده‌ها: {error.error}</div>;
  if (isLoading || !data) return <div>در حال بارگذاری...</div>;

  const products = data.products;
  const totalPages = Math.ceil(data.totalProducts / PRODUCTS_PER_PAGE);

  // حذف پارامتر page برای ارسال به PaginationControls
  const currentQuery = (() => {
    const params = new URLSearchParams(window.location.search);
    params.delete("page");
    return params.toString();
  })();

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((p: any) => (
          <ProductCard
            key={p.id}
            imageSrc={p.image_src}
            name={p.name}
            price={
              p.price
                ? `${p.price.toLocaleString("fa-IR")} تومان`
                : "تماس بگیرید"
            }
            description={p.description || ""}
            stockQuantity={p.stock_quantity}
            productLink={`/products/${p.id}`}
          />
        ))}
      </div>

      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        basePath="/products"
        currentSearchQuery={currentQuery}
        onPageChange={onPageChange} // به PaginationControls اضافه می‌کنیم
      />
    </div>
  );
}
