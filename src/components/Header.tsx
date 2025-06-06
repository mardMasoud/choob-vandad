// src/components/Header.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Search,
  User,
  Home,
  Newspaper,
  Users,
  Phone,
  Calculator,
  Menu,
  X,
} from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const focusRing =
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500";

  const navItems = [
    { href: "/", icon: Home, label: "صفحه اصلی" },
    { href: "/blog", icon: Newspaper, label: "وبلاگ" },
    { href: "/about", icon: Users, label: "درباره ما" },
    { href: "/contact", icon: Phone, label: "تماس با ما" },
  ];

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-1 gap-4">
            <div className="flex-shrink-0">
              <Link
                href="/"
                className={`rounded-lg ${focusRing}`}
              >
                <Image
                  src="/logo.png"
                  alt="لوگوی چوب ونداد"
                  width={120}
                  height={32}
                  priority
                />
              </Link>
            </div>
            <div className="relative flex-grow max-w-3xl hidden lg:block">
              <input
                type="text"
                placeholder="جستجو در محصولات..."
                className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-1.5 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <Search
                  size={20}
                  className="text-gray-400"
                />
              </div>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="/auth/login"
                className={`hidden lg:flex items-center gap-2 text-sm text-gray-600 border border-gray-300 rounded-lg px-3 py-1 hover:bg-gray-100 transition-colors ${focusRing}`}
              >
                <User size={18} />
                <span>ورود | ثبت‌نام</span>
              </Link>
              <div className="lg:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`text-gray-700 hover:text-teal-600 p-1 rounded relative z-50 ${focusRing}`}
                >
                  <span className="sr-only">باز کردن منو</span>
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
          <nav className="hidden lg:flex justify-center items-center border-t border-gray-100 py-1.5 gap-x-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 text-gray-600 hover:bg-gray-100 transition-colors px-3 py-1.5 rounded-lg text-sm font-medium ${focusRing}`}
              >
                <item.icon size={16} />
                <span>{item.label}</span>
              </Link>
            ))}
            <Link
              href="/quick-inquiry"
              className={`flex items-center gap-2 bg-teal-600 text-white px-4 py-1.5 rounded-lg hover:bg-teal-700 transition-colors shadow-md text-sm font-medium ${focusRing}`}
            >
              <Calculator size={16} />
              <span>استعلام سریع قیمت</span>
            </Link>
          </nav>
        </div>

        {/* تغییر اصلی در اینجا: انیمیشن کرکره‌ای با max-height */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          {/* محتوای منوی موبایل */}
          <nav className="flex flex-col p-4 gap-y-2">
            <div className="relative mb-2">
              <input
                type="text"
                placeholder="جستجو ..."
                className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <Search
                  size={20}
                  className="text-gray-400"
                />
              </div>
            </div>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 text-gray-700 hover:bg-gray-100 px-4 py-3 rounded-lg ${focusRing}`}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </Link>
            ))}
            <Link
              href="/quick-inquiry"
              className={`flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-3 rounded-lg font-bold ${focusRing}`}
            >
              <Calculator size={20} />
              <span>استعلام سریع قیمت</span>
            </Link>
            <hr className="my-2" />
            <Link
              href="/auth/login"
              className={`flex items-center gap-2 text-gray-700 hover:bg-gray-100 px-4 py-3 rounded-lg ${focusRing}`}
            >
              <User size={20} />
              <span>ورود | ثبت‌نام</span>
            </Link>
          </nav>
        </div>
      </header>
      {/* Overlay برای منوی موبایل */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-20"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Header;
