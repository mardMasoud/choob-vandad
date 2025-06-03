// src/app/page.tsx
'use client'; // اگر از قبل وجود دارد، نگه دارید

// ایمپورت‌های Swiper و Image و Link دیگر در اینجا لازم نیستند، چون به HeroSlider منتقل شده‌اند.

// کامپوننت AdvantageCard و آیکون‌های آن همچنان اینجا هستند
import AdvantageCard from '@/components/AdvantageCard';
import { ShieldCheck, LayoutGrid, Users, Truck } from 'lucide-react';

// ۱. وارد کردن کامپوننت HeroSlider
import HeroSlider from '@/components/HeroSlider';

// ۲. آرایه images همچنان در اینجا تعریف می‌شود (یا می‌تواند از یک فایل داده جداگانه بیاید)
const images = [
  { src: '/image/hero/hero-slide-1.jpg', alt: 'اسلاید اول چوب ونداد', title: 'تخصص در بهترین نوع چوب', description: 'محصولات ما با دقت و از بهترین مواد اولیه تهیه می‌شوند.', buttonText: 'مشاهده محصولات', buttonLink: '/products' },
  { src: '/image/hero/hero-slide-2.jpg', alt: 'اسلاید دوم چوب ونداد', title: 'طراحی مدرن، کیفیت بی‌نظیر', description: 'با چوب ونداد، زیبایی و دوام را به خانه خود بیاورید.', buttonText: 'پروژه‌های ما', buttonLink: '/projects' },
  { src: '/image/hero/hero-slide-3.jpg', alt: 'اسلاید سوم چوب ونداد', title: 'مشاوره تخصصی رایگان', description: 'کارشناسان ما آماده ارائه مشاوره برای انتخاب بهترین محصول هستند.', buttonText: 'تماس با ما', buttonLink: '/contact' },
  { src: '/image/hero/hero-slide-4.jpg', alt: 'اسلاید چهارم چوب ونداد', title: 'تنوع بی‌نظیر محصولات', description: 'انواع چوب‌های ساختمانی و دکوراتیو با بهترین قیمت.', buttonText: 'همه محصولات', buttonLink: '/products' },
  { src: '/image/hero/hero-slide-5.jpg', alt: 'اسلاید پنجم چوب ونداد', title: 'کیفیت اتفاقی نیست!', description: 'تجربه سال‌ها حضور در بازار چوب ایران.', buttonText: 'درباره ما', buttonLink: '/about' },
];

const advantagesData = [
  { icon: ShieldCheck, title: 'کیفیت برتر', description: 'تضمین بهترین کیفیت مواد اولیه و محصولات نهایی مطابق با استانداردهای روز.' },
  { icon: LayoutGrid, title: 'تنوع بی‌نظیر', description: 'ارائه طیف گسترده‌ای از محصولات چوبی برای تمامی نیازهای ساختمانی و دکوراتیو شما.' },
  { icon: Users, title: 'مشاوره تخصصی', description: 'بهره‌مندی از مشاوره رایگان کارشناسان مجرب ما برای بهترین انتخاب.' },
  { icon: Truck, title: 'ارسال سریع', description: 'تضمین ارسال به موقع و مطمئن سفارشات شما به سراسر کشور.' },
];

export default function Home() {
  return (
    <main>
      {/* ۳. استفاده از کامپوننت HeroSlider و پاس دادن پراپ images */}
      <HeroSlider images={images} />

      {/* بخش معرفی و مزایای کلیدی (بدون تغییر) */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            چوب ونداد، انتخابی هوشمندانه برای پروژه‌های شما
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            ما در چوب ونداد با سال‌ها تجربه در زمینه تامین و توزیع انواع فرآورده‌های چوبی، متعهد به ارائه محصولات باکیفیت و خدمات متمایز به مشتریان خود هستیم. هدف ما جلب رضایت شما از طریق ارائه مشاوره تخصصی و بهترین قیمت‌ها در بازار است.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantagesData.map((advantage, index) => (
              <AdvantageCard
                key={index}
                icon={advantage.icon}
                title={advantage.title}
                description={advantage.description}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}