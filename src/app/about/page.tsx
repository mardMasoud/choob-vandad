// src/app/about/page.tsx
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Users, TrendingUp, Award } from "lucide-react"; // آیکون‌های استفاده شده در این صفحه

export default function AboutPage() {
  const focusRingTeal =
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500";

  return (
    <div className="bg-white">
      {/* بخش Hero کوچک برای صفحه درباره ما */}
      <section
        className="relative h-[40vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/image/about/company-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg">
            داستان <span className="text-teal-400">چوب ونداد</span>
          </h1>
          {/* اصلاح شده: استفاده از &quot; برای نقل قول */}
          <p className="mt-4 text-lg md:text-xl max-w-2xl drop-shadow-md">
            سفری از تجربه و تعهد به سوی کیفیت و نوآوری در صنعت &quot;چوب&quot;.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        {/* بخش داستان ما با سناریو */}
        <section className="mb-16 lg:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="prose prose-lg prose-p:leading-relaxed prose-headings:text-gray-800 max-w-none text-justify">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6 !text-right">
                از بازنشستگی تا بنیان‌گذاری: آغاز راه ونداد
              </h2>
              <p>
                {/* اصلاح شده: استفاده از &quot; برای نقل قول */}
                داستان &quot;چوب ونداد&quot; از جایی شروع شد که سه برادر، حمید،
                محمد و مهدی، پس از سال‌ها خدمت و کسب تجربه در عرصه‌های مختلف
                صنعتی و مدیریتی، به دوران بازنشستگی رسیدند. اما برای آن‌ها،
                بازنشستگی نه به معنای پایان فعالیت، بلکه سرآغازی برای تحقق یک
                رویای مشترک بود: تاسیس شرکتی که بر پایه دانش، تعهد و عشق به صنعت
                چوب بنا شود.
              </p>
              <p>
                هر سه برادر، با کوله‌باری از تجربه و با نگاهی به آینده، تصمیم
                گرفتند تا در کنار هم، کسب‌وکاری را راه‌اندازی کنند که نه تنها یک
                منبع درآمد، بلکه محلی برای انتقال تجربیات و ارائه خدماتی متمایز
                به بازار باشد. آن‌ها با بررسی دقیق نیازهای بازار و با اتکا به
                شبکه‌ای از متخصصین و تامین‌کنندگان معتبر، &quot;چوب ونداد&quot;
                را با هدف ارائه بهترین و باکیفیت‌ترین محصولات چوبی و فرآورده‌های
                مرتبط بنیان نهادند. شور و اشتیاق روزهای اول، با چالش‌های شیرین
                راه‌اندازی یک کسب‌وکار جدید همراه بود، اما هدف مشترک و برادری
                آن‌ها، مسیر را هموارتر می‌کرد.
              </p>
              <p>
                امروز، &quot;چوب ونداد&quot; با افتخار به مسیری که طی کرده
                می‌نگرد و با همان تعهد اولیه، به دنبال ارائه بهترین‌ها به شما
                مشتریان گرامی است.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl order-first md:order-last">
              <Image
                src="/image/about/vandad-story.jpg"
                alt="داستان چوب ونداد"
                width={600}
                height={450}
                className="object-cover w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* بخش ارزش‌های ما */}
        <section className="mb-16 lg:mb-20 py-12 bg-slate-50 rounded-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
              ارزش‌های ما، تعهد ما
            </h2>
            <p className="mt-3 text-lg text-gray-600 max-w-xl mx-auto">
              آنچه ما را در مسیر پیشرفت هدایت می‌کند و به کارمان معنا می‌بخشد.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-8">
            {[
              {
                icon: ShieldCheck,
                title: "تضمین کیفیت",
                description:
                  "استفاده از بهترین مواد اولیه و نظارت دقیق بر فرآیندها برای ارائه محصولاتی بی‌نقص.",
              },
              {
                icon: Users,
                title: "مشتری‌مداری",
                description:
                  "رضایت شما اولویت ماست؛ از مشاوره تا خدمات پس از فروش، همواره در کنار شماییم.",
              },
              {
                icon: TrendingUp,
                title: "نوآوری و پیشرفت",
                description:
                  "به‌روز بودن با آخرین دستاوردهای صنعت چوب و ارائه راه‌حل‌های خلاقانه و مدرن.",
              },
              {
                icon: Award,
                title: "تعهد و مسئولیت‌پذیری",
                description:
                  "پایبندی به اصول حرفه‌ای و پاسخگویی در قبال تمام محصولات و خدمات ارائه شده.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg text-center transition-all duration-300 hover:shadow-teal-200 hover:shadow-md"
              >
                <div className="flex justify-center mb-4">
                  <value.icon
                    className="h-12 w-12 text-teal-600"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-xl font-semibold text-teal-700 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* بخش دعوت به اقدام */}
        <section className="text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
            آماده همکاری با شما هستیم!
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
            برای دریافت مشاوره رایگان یا کسب اطلاعات بیشتر در مورد محصولات و
            خدمات ما، با ما تماس بگیرید.
          </p>
          <Link
            href="/contact"
            className={`inline-block bg-teal-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors shadow-lg ${focusRingTeal}`}
          >
            تماس با کارشناسان ما
          </Link>
        </section>
      </div>
    </div>
  );
}
