import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // ۱. ایمپورت کردن هدر

const vazir = Vazirmatn({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: "چوب ونداد - فروشگاه تخصصی محصولات چوبی",
  description: "فروش آنلاین انواع ورق ام‌دی‌اف، نئوپان و هایگلاس",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazir.className}>
        <Header /> {/* ۲. قرار دادن هدر در اینجا */}
        <main>{children}</main>
        {/* می‌توانیم فوتر را هم بعداً به اینجا اضافه کنیم */}
      </body>
    </html>
  );
}