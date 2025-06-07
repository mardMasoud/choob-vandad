// src/components/PaginationControls.tsx
"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface PaginationControlsProps {
  totalPages: number;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  totalPages,
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(pageNumber));
    if (pageNumber <= 1) {
      params.delete("page");
    }
    const queryString = params.toString();
    return queryString ? `${pathname}?${queryString}` : pathname;
  };

  if (totalPages <= 1) {
    return null;
  }

  const canGoPrevious = currentPage > 1;
  const canGoNext = currentPage < totalPages;
  const focusRing =
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500";

  // --- بخش جدید: منطق تولید شماره صفحات برای نمایش ---
  const getPageNumbers = () => {
    const pageNumbers: (number | string)[] = [];
    // منطق نمایش: 1 ... 4 5 6 ... 10
    // Sibling count: تعداد صفحاتی که در هر طرف صفحه فعلی نمایش داده می‌شود
    const siblingCount = 1;
    // تعداد کل آیتم‌های قابل مشاهده: 1(اول) + ... + sibling + current + sibling + ... + 1(آخر)
    const totalVisiblePages = siblingCount + 5;

    // اگر تعداد کل صفحات کمتر از تعداد قابل نمایش است، همه را نشان بده
    if (totalPages <= totalVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
      return pageNumbers;
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 1;

    const firstPageIndex = 1;
    pageNumbers.push(firstPageIndex);

    if (shouldShowLeftDots) {
      pageNumbers.push("...");
    }

    for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
      // فقط اعدادی را اضافه کن که قبلاً اضافه نشده‌اند
      if (i !== firstPageIndex && i !== totalPages) {
        pageNumbers.push(i);
      }
    }

    if (shouldShowRightDots) {
      pageNumbers.push("...");
    }

    pageNumbers.push(totalPages);

    return pageNumbers;
  };

  const pages = getPageNumbers();
  // --- پایان بخش جدید ---

  return (
    <nav
      className="flex items-center justify-center gap-x-1 sm:gap-x-2 mt-12"
      aria-label="Pagination"
    >
      {/* دکمه صفحه قبلی */}
      <Link
        href={canGoPrevious ? createPageURL(currentPage - 1) : "#"}
        className={`inline-flex items-center justify-center rounded-md p-2.5 text-sm font-medium transition-colors
                    ${
                      canGoPrevious
                        ? `bg-white text-gray-700 hover:bg-gray-100 border ${focusRing}`
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
        aria-disabled={!canGoPrevious}
        tabIndex={!canGoPrevious ? -1 : undefined}
        scroll={false}
      >
        <ChevronRight size={18} />
        <span className="sr-only">صفحه قبلی</span>
      </Link>

      {/* تغییر در اینجا: نمایش شماره صفحات */}
      <div className="flex items-center gap-x-1 sm:gap-x-2">
        {pages.map((page, index) =>
          typeof page === "string" ? (
            <span
              key={`ellipsis-${index}`}
              className="px-1.5 py-2 text-sm text-gray-500"
            >
              ...
            </span>
          ) : (
            <Link
              key={page}
              href={createPageURL(page)}
              className={`inline-flex items-center justify-center rounded-md w-9 h-9 text-sm font-medium transition-colors
                          ${
                            currentPage === page
                              ? `bg-teal-600 text-white shadow-md ${focusRing}`
                              : `bg-white text-gray-700 hover:bg-gray-100 border ${focusRing}`
                          }`}
              aria-current={currentPage === page ? "page" : undefined}
              scroll={false}
            >
              {page}
            </Link>
          )
        )}
      </div>

      {/* دکمه صفحه بعدی */}
      <Link
        href={canGoNext ? createPageURL(currentPage + 1) : "#"}
        className={`inline-flex items-center justify-center rounded-md p-2.5 text-sm font-medium transition-colors
                    ${
                      canGoNext
                        ? `bg-white text-gray-700 hover:bg-gray-100 border ${focusRing}`
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
        aria-disabled={!canGoNext}
        tabIndex={!canGoNext ? -1 : undefined}
        scroll={false}
      >
        <ChevronLeft size={18} />
        <span className="sr-only">صفحه بعدی</span>
      </Link>
    </nav>
  );
};

export default PaginationControls;
