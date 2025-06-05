// src/app/layout.tsx
import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google"; // یا هر فونتی که استفاده می‌کنید
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QueryProvider from "@/components/QueryProvider"; // ۱. وارد کردن QueryProvider

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
        {/* ۲. قرار دادن QueryProvider دور بخش اصلی برنامه */}
        <QueryProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
