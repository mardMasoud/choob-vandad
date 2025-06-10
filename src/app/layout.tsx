// src/app/layout.tsx
import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QueryProvider from "@/components/QueryProvider";
import Chatbot from "@/components/Chatbot"; // ۱. وارد کردن کامپوننت Chatbot

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
      <body className={`${vazir.className} flex flex-col min-h-screen bg-gray-50`}> {/* bg-gray-50 اضافه شد */}
        <QueryProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </QueryProvider>
        <Chatbot /> {/* ۲. استفاده از کامپوننت Chatbot در اینجا */}
      </body>
    </html>
  );
}