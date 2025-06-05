// src/components/PaginationControls.tsx
"use client";

import Link from "next/link";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
  currentSearchQuery?: string; // رشته کوئری فعلی مثل filter=abc&sort=name
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  totalPages,
  basePath,
  currentSearchQuery,
}) => {
  // تولید URL صفحه با حفظ سایر پارامترهای کوئری
  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(currentSearchQuery || "");
    params.delete("page");
    if (pageNumber > 1) {
      params.set("page", pageNumber.toString());
    }
    const queryString = params.toString();
    return queryString ? `${basePath}?${queryString}` : basePath;
  };

  if (totalPages <= 1) return null; // اگر فقط یک صفحه بود نیاز به Pagination نیست

  const canGoPrevious = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  // آرایه شماره صفحات: ساده همه صفحات رو لیست می‌کنیم
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const focusRing =
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500";

  return (
    <nav
      className="flex items-center justify-center gap-x-1 sm:gap-x-2 mt-12"
      aria-label="Pagination"
    >
      {/* دکمه قبلی */}
      <Link
        href={createPageURL(currentPage - 1)}
        className={`inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors ${
          canGoPrevious
            ? `bg-teal-600 text-white hover:bg-teal-700 ${focusRing}`
            : "bg-gray-200 text-gray-400 cursor-not-allowed opacity-50"
        }`}
        aria-disabled={!canGoPrevious}
        tabIndex={!canGoPrevious ? -1 : undefined}
        scroll={false}
      >
        <ChevronLeft
          size={18}
          className="h-4 w-4"
        />
        <span className="sr-only">صفحه قبلی</span>
      </Link>

      {/* دکمه شماره صفحات */}
      {pageNumbers.map((page) => (
        <Link
          key={page}
          href={createPageURL(page)}
          className={`inline-flex items-center justify-center rounded-md w-9 h-9 text-sm font-medium transition-colors ${
            currentPage === page
              ? `bg-teal-600 text-white ring-2 ring-teal-500 ring-offset-2 ${focusRing}`
              : `bg-white text-gray-700 hover:bg-gray-100 ${focusRing}`
          }`}
          aria-current={currentPage === page ? "page" : undefined}
          scroll={false}
        >
          {page}
        </Link>
      ))}

      {/* دکمه بعدی */}
      <Link
        href={createPageURL(currentPage + 1)}
        className={`inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors ${
          canGoNext
            ? `bg-teal-600 text-white hover:bg-teal-700 ${focusRing}`
            : "bg-gray-200 text-gray-400 cursor-not-allowed opacity-50"
        }`}
        aria-disabled={!canGoNext}
        tabIndex={!canGoNext ? -1 : undefined}
        scroll={false}
      >
        <ChevronRight
          size={18}
          className="h-4 w-4"
        />
        <span className="sr-only">صفحه بعدی</span>
      </Link>
    </nav>
  );
};

export default PaginationControls;
