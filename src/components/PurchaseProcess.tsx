// src/components/PurchaseProcess.tsx
import { MessageSquare, FileText, Package, Truck } from 'lucide-react';
import React from 'react';

const processSteps = [
  {
    icon: MessageSquare,
    title: '۱. مشاوره و استعلام',
    description: 'با کارشناسان ما تماس بگیرید و پس از دریافت مشاوره تخصصی، پیش‌فاکتور خود را دریافت کنید.',
  },
  {
    icon: FileText,
    title: '۲. ثبت نهایی سفارش',
    description: 'پس از تایید پیش‌فاکتور و انجام هماهنگی‌های لازم، سفارش شما به صورت رسمی ثبت و آماده‌سازی می‌شود.',
  },
  {
    icon: Package,
    title: '۳. آماده‌سازی و بارگیری',
    description: 'محصولات شما با دقت و بهترین کیفیت بسته‌بندی شده و آماده ارسال از انبار ما می‌شوند.',
  },
  {
    icon: Truck,
    title: '۴. ارسال و تحویل',
    description: 'سفارش شما در سریع‌ترین زمان ممکن به محل پروژه شما در سراسر کشور ارسال و تحویل داده می‌شود.',
  },
];

const PurchaseProcess = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-800">
            فرآیند خرید در چهار مرحله ساده
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            از مشاوره تا تحویل، ما در هر قدم کنار شما هستیم.
          </p>
        </div>

        <div className="relative">
          {/* خط اتصال‌دهنده در پس‌زمینه */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-300 transform -translate-y-1/2"></div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="relative z-10 flex items-center justify-center w-24 h-24 bg-white border-4 border-teal-500 rounded-full shadow-lg mb-4">
                  <step.icon className="w-12 h-12 text-teal-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 max-w-xs">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurchaseProcess;