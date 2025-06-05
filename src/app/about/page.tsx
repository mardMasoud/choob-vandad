// src/app/about/page.tsx
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-4xl font-bold mb-6">صفحه درباره ما</h1>
      <p className="text-lg mb-8">
        در این صفحه، اطلاعاتی در مورد تاریخچه، تیم، اهداف و ارزش‌های "چوب ونداد"
        ارائه خواهد شد.
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
