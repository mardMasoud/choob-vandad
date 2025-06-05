// src/app/projects/page.tsx
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-4xl font-bold mb-6">صفحه پروژه‌های ما</h1>
      <p className="text-lg mb-8">
        در این بخش، نمونه کارها و پروژه‌های انجام شده توسط &quot;چوب ونداد&quot;
        به نمایش در خواهد آمد.
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
