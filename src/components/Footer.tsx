// src/components/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Instagram, Send, Twitter } from "lucide-react";

const Footer = () => {
  const focusRing =
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 focus:ring-offset-gray-800";

  return (
    <footer className="bg-gray-800 text-gray-300 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* ستون اول: درباره ما و لوگو */}
          <div className="space-y-4">
            <Link
              href="/"
              className={`inline-block mb-2 rounded ${focusRing}`}
            >
              <Image
                src="/logo.png"
                alt="لوگوی چوب ونداد"
                width={150}
                height={40}
              />
            </Link>
            <p className="text-sm leading-relaxed">
              چوب ونداد، ارائه‌دهنده برتر انواع محصولات چوبی با کیفیت و خدمات
              تخصصی. ما به زیبایی و دوام پروژه‌های شما اهمیت می‌دهیم.
            </p>
          </div>

          {/* ستون دوم: لینک‌های سریع */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              لینک‌های سریع
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className={`hover:text-teal-400 transition-colors ${focusRing} rounded`}
                >
                  درباره ما
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className={`hover:text-teal-400 transition-colors ${focusRing} rounded`}
                >
                  محصولات
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className={`hover:text-teal-400 transition-colors ${focusRing} rounded`}
                >
                  وبلاگ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`hover:text-teal-400 transition-colors ${focusRing} rounded`}
                >
                  تماس با ما
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className={`hover:text-teal-400 transition-colors ${focusRing} rounded`}
                >
                  سوالات متداول
                </Link>
              </li>
            </ul>
          </div>

          {/* ستون سوم: اطلاعات تماس */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              تماس با ما
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin
                  size={20}
                  className="ml-2 mt-1 text-teal-400 flex-shrink-0"
                />{" "}
                {/* در RTL، ml مارجین راست ایجاد میکند */}
                <span>خراسان رضوی، گلبهار، تلاش ۱۰، پلاک ۲۰</span>
              </li>
              <li className="flex items-center">
                <Phone
                  size={20}
                  className="ml-2 text-teal-400 flex-shrink-0"
                />
                <a
                  href="tel:+98518325636"
                  className={`hover:text-teal-400 transition-colors ${focusRing} rounded`}
                  dir="ltr"
                >
                  +۹۸ (۵۱) ۸۳۲ ۵۶۳۶
                </a>
              </li>
              <li className="flex items-center">
                <Mail
                  size={20}
                  className="ml-2 text-teal-400 flex-shrink-0"
                />
                <a
                  href="mailto:info@choobvandad.com"
                  className={`hover:text-teal-400 transition-colors ${focusRing} rounded`}
                >
                  info@choobvandad.com
                </a>
              </li>
            </ul>
          </div>

          {/* ستون چهارم: شبکه‌های اجتماعی */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              ما را دنبال کنید
            </h3>
            {/* استفاده از gap-x-4 برای فاصله یکسان و justify-start برای چیدمان از راست در RTL */}
            <div className="flex justify-start md:justify-start gap-x-4">
              <Link
                href="#"
                className={`hover:text-teal-400 transition-colors p-1 ${focusRing} rounded-full`}
                aria-label="اینستاگرام"
              >
                <Instagram size={24} />
              </Link>
              <Link
                href="#"
                className={`hover:text-teal-400 transition-colors p-1 ${focusRing} rounded-full`}
                aria-label="تلگرام"
              >
                <Send size={24} />
              </Link>
              <Link
                href="#"
                className={`hover:text-teal-400 transition-colors p-1 ${focusRing} rounded-full`}
                aria-label="توییتر"
              >
                <Twitter size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* بخش کپی‌رایت */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} تمامی حقوق برای چوب ونداد محفوظ
            است.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
