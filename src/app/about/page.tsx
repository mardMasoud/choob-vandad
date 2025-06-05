// src/app/about/page.tsx
import Image from "next/image"; // اگر می‌خواهید تصویر اضافه کنید
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      <header className="text-center mb-12 lg:mb-16">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800">
          درباره چوب ونداد
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          آشنایی بیشتر با داستان، اهداف و تیمی که در پشت کیفیت و نوآوری ما قرار
          دارد.
        </p>
      </header>

      <section className="mb-12 lg:mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-700 mb-4">
              داستان ما
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {/* متن نمونه: لطفاً با داستان واقعی شرکت خود جایگزین کنید */}
              چوب ونداد فعالیت خود را از سال ۱۳۹۸ با هدف ارائه باکیفیت‌ترین
              محصولات چوبی و فرآورده‌های مرتبط در بازار ایران آغاز کرد. از همان
              ابتدا، تمرکز ما بر روی تامین مواد اولیه مرغوب، بهره‌گیری از دانش
              روز و ارائه مشاوره تخصصی به مشتریان بوده است. ما باور داریم که هر
              پروژه، از کوچکترین کار دکوراتیو تا بزرگترین سازه چوبی، شایسته
              بهترین‌هاست.
            </p>
            <p className="text-gray-600 leading-relaxed">
              {/* متن نمونه */}
              در طول این سال‌ها، با تکیه بر اعتماد شما و تلاش بی‌وقفه تیم متخصص
              خود، توانسته‌ایم طیف وسیعی از محصولات، از انواع ورق‌های MDF و
              نئوپان گرفته تا چوب‌های خاص و یراق‌آلات مدرن را فراهم آوریم.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            {/* یک تصویر مرتبط با شرکت یا تیم خود اینجا قرار دهید */}
            {/* مثلاً: public/images/about/company-story.jpg */}
            <Image
              src="/image/about/vandad-story.jpg" // مسیر جدید تصویر شما
              alt="داستان شرکت چوب ونداد"
              width={600}
              height={400}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="mb-12 lg:mb-16 py-12 bg-slate-50 rounded-lg">
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-700">
            چرا چوب ونداد؟
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8">
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-teal-600 mb-2">
              کیفیت بی‌رقیب
            </h3>
            <p className="text-sm text-gray-500">
              ما تنها از بهترین و مرغوب‌ترین مواد اولیه برای تولید و عرضه
              محصولات خود استفاده می‌کنیم.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-teal-600 mb-2">
              تعهد به مشتری
            </h3>
            <p className="text-sm text-gray-500">
              رضایت شما اولویت اصلی ماست و در تمامی مراحل، از مشاوره تا پس از
              فروش، در کنار شما هستیم.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-teal-600 mb-2">
              نوآوری و تجربه
            </h3>
            <p className="text-sm text-gray-500">
              ترکیبی از تجربه چندین ساله و به‌روزترین دانش صنعت چوب برای ارائه
              بهترین راه‌حل‌ها.
            </p>
          </div>
        </div>
      </section>

      <div className="text-center mt-12">
        <Link
          href="/contact"
          className="bg-teal-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
        >
          با ما تماس بگیرید
        </Link>
      </div>
    </div>
  );
}
