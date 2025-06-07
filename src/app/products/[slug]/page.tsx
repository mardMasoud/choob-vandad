// src/app/products/[slug]/page.tsx
import { supabase } from "@/lib/supabaseClient";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {  PackageCheck, Tag, ArrowRight } from "lucide-react";
import type { Metadata } from 'next';

export const dynamicParams = true;
export const revalidate = 3600;

export async function generateStaticParams() {
  const { data: products } = await supabase.from('products').select('slug');
  if (!products) {
    return [];
  }
  return products.slice(0, 10).map((product) => ({
    slug: product.slug,
  }));
}

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = decodeURIComponent(params.slug);
  const { data: product } = await supabase.from("products").select("name, description").eq("slug", slug).single();
  if (!product) return { title: "محصول یافت نشد" };
  return {
    title: `${product.name} | چوب ونداد`,
    description: product.description?.substring(0, 155) || `خرید ${product.name}`,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const slug = decodeURIComponent(params.slug);
  const { data: product, error } = await supabase.from("products").select("*").eq("slug", slug).single();
  if (error || !product) notFound();

  const isAvailable = product.stock_quantity > 0;

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="mb-8">
          <Link href="/products" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-teal-700 transition-colors font-semibold">
            <ArrowRight size={18} />
            <span>بازگشت به لیست محصولات</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="relative aspect-square w-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src={product.image_src}
              alt={product.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              {product.name}
            </h1>
            <div className="flex items-center gap-4 mb-6 text-lg">
              <div className="flex items-center text-teal-600 font-bold">
                <Tag size={20} className="ml-2" />
                <span>{product.price ? `${product.price.toLocaleString('fa-IR')} تومان` : 'تماس بگیرید'}</span>
              </div>
              <div className={`flex items-center font-semibold ${isAvailable ? 'text-green-600' : 'text-red-600'}`}>
                <PackageCheck size={20} className="ml-2" />
                <span>{isAvailable ? `موجودی: ${product.stock_quantity}` : 'ناموجود'}</span>
              </div>
            </div>
            <div className="prose prose-p:leading-relaxed text-gray-600 mb-8">
              <p>{product.description || 'توضیحات کاملی برای این محصول ارائه نشده است.'}</p>
            </div>
            <div className="mt-auto pt-6 border-t">
              <button
                disabled={!isAvailable}
                className={`w-full py-3 px-6 rounded-lg text-white font-bold text-lg transition-colors shadow-md 
                            ${isAvailable 
                              ? 'bg-teal-600 hover:bg-teal-700' 
                              : 'bg-gray-400 cursor-not-allowed'
                            } 
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500`}
              >
                {isAvailable ? 'افزودن به سبد خرید' : 'ناموجود'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}