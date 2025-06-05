// src/app/contact/page.tsx
import { Phone, Mail, MapPin, Clock } from "lucide-react";
// import Link from 'next/link'; // حذف شد چون در این نسخه از کد استفاده نشده بود

export default function ContactPage() {
  const focusRing =
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500";

  return (
    <div className="bg-white py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12 lg:mb-16">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800">
            تماس با ما
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
            ما همیشه آماده پاسخگویی به سوالات، پیشنهادات و درخواست‌های شما
            هستیم. از طریق راه‌های زیر با ما در ارتباط باشید.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-6 bg-slate-50 p-6 sm:p-8 rounded-lg shadow-md">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-700 mb-6">
              اطلاعات تماس چوب ونداد
            </h2>
            <div className="flex items-start">
              <MapPin
                size={24}
                className="ml-3 mt-1 text-teal-600 flex-shrink-0"
              />
              <div>
                <h3 className="font-semibold text-gray-700">
                  آدرس کارخانه و دفتر مرکزی:
                </h3>
                <p className="text-gray-600">
                  خراسان رضوی، گلبهار، تلاش ۱۰، پلاک ۲۰
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <Phone
                size={24}
                className="ml-3 text-teal-600 flex-shrink-0"
              />
              <div>
                <h3 className="font-semibold text-gray-700">تلفن تماس:</h3>
                <a
                  href="tel:+98518325636"
                  className={`text-gray-600 hover:text-teal-700 ${focusRing} rounded`}
                  dir="ltr"
                >
                  +۹۸ (۵۱) ۸۳۲ ۵۶۳۶
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <Mail
                size={24}
                className="ml-3 text-teal-600 flex-shrink-0"
              />
              <div>
                <h3 className="font-semibold text-gray-700">ایمیل:</h3>
                <a
                  href="mailto:info@choobvandad.com"
                  className={`text-gray-600 hover:text-teal-700 ${focusRing} rounded`}
                >
                  info@choobvandad.com
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <Clock
                size={24}
                className="ml-3 text-teal-600 flex-shrink-0"
              />
              <div>
                <h3 className="font-semibold text-gray-700">ساعات کاری:</h3>
                <p className="text-gray-600">
                  شنبه تا چهارشنبه: ۸ صبح الی ۵ عصر
                </p>
                <p className="text-gray-600">پنج‌شنبه‌ها: ۸ صبح الی ۱ ظهر</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 p-6 sm:p-8 rounded-lg shadow-md">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-700 mb-6">
              برای ما پیام بگذارید
            </h2>
            <form
              action="#"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  نام و نام خانوادگی
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  className={`w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:border-teal-500 focus:ring-teal-500 ${focusRing}`}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  ایمیل
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className={`w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:border-teal-500 focus:ring-teal-500 ${focusRing}`}
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  موضوع
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className={`w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:border-teal-500 focus:ring-teal-500 ${focusRing}`}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  پیام شما
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className={`w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:border-teal-500 focus:ring-teal-500 ${focusRing}`}
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-teal-600 hover:bg-teal-700 ${focusRing}`}
                >
                  ارسال پیام
                </button>
              </div>
            </form>
            <p className="mt-4 text-xs text-gray-500 text-center">
              ما در اسرع وقت به پیام شما پاسخ خواهیم داد.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
