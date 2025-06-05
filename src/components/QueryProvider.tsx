// src/components/QueryProvider.tsx
"use client"; // این کامپوننت باید یک Client Component باشد

import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"; // ابزار توسعه‌دهنده

interface QueryProviderProps {
  children: React.ReactNode;
}

const QueryProvider: React.FC<QueryProviderProps> = ({ children }) => {
  // با استفاده از useState، اطمینان حاصل می‌کنیم که QueryClient فقط یک بار در سمت کلاینت ایجاد می‌شود.
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // می‌توانید تنظیمات پیش‌فرض برای تمام کوئری‌ها را اینجا قرار دهید
            // مثلاً: staleTime: 5 * 60 * 1000, // 5 دقیقه (داده‌ها به مدت ۵ دقیقه تازه در نظر گرفته می‌شوند)
            // refetchOnWindowFocus: false, // جلوگیری از واکشی مجدد هنگام فوکوس روی پنجره
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* ابزار توسعه‌دهنده فقط در محیط توسعه نمایش داده می‌شود */}
      {/* initialIsOpen={false} باعث می‌شود به صورت پیش‌فرض بسته باشد */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default QueryProvider;
