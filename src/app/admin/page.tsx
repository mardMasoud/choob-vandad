// src/app/admin/page.tsx
import React from 'react';

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-800 mb-6">
        داشبورد مدیریت
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-slate-700">
          به پنل مدیریت ونداد چوب خوش آمدید!
        </p>
        <p className="mt-4 text-sm text-slate-500">
          از منوی سمت راست می‌توانید بخش مورد نظر خود را برای مدیریت انتخاب کنید.
        </p>
        {/* TODO: اینجا بعداً می‌توانیم خلاصه‌ای از آمارها (تعداد محصولات، کاربران جدید و ...) را نمایش دهیم */}
      </div>
    </div>
  );
}