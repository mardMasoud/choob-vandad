// src/components/CtaSection.tsx
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="bg-teal-600">
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          پروژه خود را با ما شروع کنید
        </h2>
        <p className="text-teal-100 text-lg max-w-2xl mx-auto mb-8">
          نمی‌دانید از کجا شروع کنید؟ تیم کارشناسان ما آماده ارائه مشاوره تخصصی و رایگان برای کمک به شما در انتخاب بهترین محصولات برای پروژه شما هستند.
        </p>
        <Link 
          href="/contact"
          className="inline-flex items-center gap-3 bg-white text-teal-700 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-lg text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
        >
          <span>دریافت مشاوره رایگان</span>
          <ArrowLeft size={22} />
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;