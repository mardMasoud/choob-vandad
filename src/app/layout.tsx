// src/app/layout.tsx

import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer"; // ۱. وارد کردن کامپوننت Footer

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
    <html
      lang="fa"
      dir="rtl"
    >
      <body className={`${vazir.className} flex flex-col min-h-screen`}>
        {" "}
        {/* اضافه کردن flex flex-col min-h-screen */}
        <Header />
        <main className="flex-grow">{children}</main>{" "}
        {/* اضافه کردن flex-grow */}
        <Footer /> {/* ۲. قرار دادن فوتر در اینجا */}
      </body>
    </html>
  );
}
