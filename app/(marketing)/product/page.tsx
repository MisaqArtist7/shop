'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function DigikalaStyleProductPage() {
    // دیتای هماهنگ‌شده با مدل تجهیزات البرز سی‌ان‌سی
    const product = {
        title: "اسپیندل موتور ۴.۵ کیلووات HQD مدل X1504VA - بلبرینگ سرامیکی ۳۸۰ ولت",
        englishTitle: "HQD Spindle Motor 4.5kW X1504VA - Ceramic Bearing",
        rating: "۴.۵",
        commentsCount: "۲۴ دیدگاه",
        brand: "اتوماسیون HQD",
        guarantee: "گارانتی ۱۲ ماهه شرکتی البرز سی‌ان‌سی",
        seller: "البرز سی‌ان‌سی (تامین‌کننده اصلی)",
        price: "۴۴,۲۰۰,۰۰۰",
        oldPrice: "۴۸,۵۰۰,۰۰۰",
        discount: "۸٪",
        features: [
            { id: 1, title: "نوع سیستم خنک‌کننده:", value: "هوا خنک (Fan-Cooled)" },
            { id: 2, title: "ولتاژ ورودی صنعتی:", value: "۳۸۰ ولت سه فاز" },
            { id: 3, title: "سرعت دورانی موتور:", value: "۲۴,۰۰۰ دور بر دقیقه" },
            { id: 4, title: "نوع بلبرینگ:", value: "سرامیکی High-Speed" }
        ],
        specs: [
            { key: "توان خروجی", value: "۴.۵ کیلووات (4.5 kW)" },
            { key: "فرکانس کاری", value: "۴۰۰ هرتز (Hz)" },
            { key: "کشور سازنده", value: "درجه یک چین (اصلی)" }
        ]
    };

    return (
        <main className="min-h-screen p-6 md:p-12 font-semibold bg-gray-50/50">
            <div className="mx-auto p-6 md:p-10 space-y-12">
                
                {/* ستون‌بندی اصلی ۳ ستونه به سبک دیجی‌کالا */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start">
                    
                    {/* ستون ۱: بخش تصویر و گالری محصول (سمت راست) */}
                    <div className="lg:col-span-3 flex flex-col items-center gap-6 sticky top-8">
                        <div className="w-full aspect-square border border-gray-100 rounded-2xl bg-white flex items-center justify-center p-4 relative group">
                            <span className="absolute top-3 right-3 bg-red-50 text-[#D92F4E] border border-red-100 text-[11px] px-2.5 py-1 rounded-xl">
                                {product.discount} تخفیف ویژه
                            </span>
                            <Image 
                                src='/images/products/1.webp' 
                                alt={product.title}
                                width={500} 
                                height={500}
                                className="w-60 h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                            />
                        </div>
                    </div>

                    {/* ستون ۲: عنوان، ویژگی‌های کلیدی و مشخصات (وسط) */}
                    <div className="lg:col-span-6 space-y-6">
                        {/* برند و اصالت کالا */}
                        <div className="flex items-center gap-3 text-xs text-[#D92F4E] font-bold">
                            <span className="bg-[#D92F4E]/5 px-3 py-1.5 rounded-xl">{product.brand}</span>
                            <span className="text-gray-400" dir="ltr">/ {product.englishTitle}</span>
                        </div>

                        {/* عنوان اصلی کالا */}
                        <h1 className="text-xl md:text-2xl text-gray-900 leading-snug">
                            {product.title}
                        </h1>

                        {/* امتیاز و نظرات کاربران */}
                        <div className="flex items-center gap-2 text-xs text-gray-400 border-b border-gray-50 pb-4">
                            <span className="text-amber-500 flex items-center gap-1">
                                ★ {product.rating}
                            </span>
                            <span>•</span>
                            <span className="hover:text-gray-900 cursor-pointer font-bold">{product.commentsCount}</span>
                        </div>

                        {/* ویژگی‌های مهم محصول (خلاصه مشخصات دیجی‌کالایی) */}
                        <div className="space-y-4 pt-2">
                            <h3 className="text-sm text-gray-900">ویژگی‌های خلاصه محصول:</h3>
                            <ul className="space-y-3">
                                {product.features.map((feat) => (
                                    <li key={feat.id} className="text-sm flex items-start gap-2">
                                        <span className="text-gray-400 font-bold">{feat.title}</span>
                                        <span className="text-gray-800">{feat.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* بخش مشخصات فنی کامل */}
                        <div className="border-t bg-white border-gray-100 pt-6 space-y-4 rounded-xl">
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-md bg-[#D92F4E]"></span>
                                <h2 className="text-sm md:text-base text-gray-900">مشخصات فنی قطعات صنعتی</h2>
                            </div>

                            <div className="overflow-hidden border border-gray-100 rounded-2xl text-xs md:text-sm">
                                <table className="w-full text-right border-collapse">
                                    <tbody>
                                        {product.specs.map((spec, index) => (
                                            <tr key={index} className={`border-b border-gray-50 last:border-0 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                                <td className="p-3 font-bold text-gray-400 w-1/3 bg-gray-50/10">{spec.key}</td>
                                                <td className="p-3 text-gray-800">{spec.value}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* ستون ۳: باکس خرید چسبان / کارت قیمت (سمت چپ) */}
                    <div className="lg:col-span-3 bg-white border border-gray-200/70 rounded-2xl p-6 space-y-6 sticky top-8">
                        <h3 className="text-sm text-gray-900 border-b border-gray-200/60 pb-3">وضعیت فروش و قیمت</h3>
                        
                        <div className="space-y-4 text-xs text-gray-600 font-bold">
                            <div className="flex items-center gap-2.5">
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1" /></svg>
                                <span>فروشنده: <span className="text-gray-900">{product.seller}</span></span>
                            </div>
                            <div className="flex items-center gap-2.5 border-t border-gray-200/40 pt-3">
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-13.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                                <span className="text-gray-800">{product.guarantee}</span>
                            </div>
                        </div>

                        <div className="border-t border-gray-200/40 pt-4 text-left space-y-1">
                            <div className="flex justify-between items-center w-full">
                                <span className="bg-[#D92F4E] text-white text-[10px] px-2 py-0.5 rounded-lg">{product.discount}</span>
                                <span className="text-gray-400 line-through text-xs">{product.oldPrice}</span>
                            </div>
                            <div className="text-xl text-gray-900 flex items-center justify-end gap-1 pt-1">
                                {product.price}
                                <span className="text-xs font-sans text-gray-500 font-bold">تومان</span>
                            </div>
                        </div>

                        <button className="w-full bg-[#D92F4E] text-white py-3.5 rounded-xl text-sm font-bold hover:bg-[#b8253f] transition-colors shadow-md shadow-[#D92F4E]/10 cursor-pointer text-center block">
                            افزودن به سبد خرید
                        </button>
                    </div>

                </div>

                {/* ۱. اصلاح شده: بخش نشان‌های اعتماد (ویژگی‌های خرید دیجی‌کالایی) */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 py-6 border-t border-b border-gray-100 bg-white rounded-2xl p-4">
                    {[
                        { src: 'express-delivery', label: 'تحویل اکسپرس' },
                        { src: 'cash-on-delivery', label: 'پرداخت در محل' },
                        { src: 'support', label: 'پشتیبانی ۲۴/۷' },
                        { src: 'days-return', label: '۷ روز ضمانت بازگشت' },
                        { src: 'original-products', label: 'ضمانت اصل بودن' },
                    ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center gap-3 group cursor-pointer">
                            <div className="w-16 h-16 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-sm group-hover:scale-105 group-hover:border-[#D92F4E]/30 transition-all duration-300">
                                <Image 
                                    src={`/images/footer/${item.src}.svg`} 
                                    width={40} 
                                    height={40} 
                                    alt={item.label} 
                                    className="w-10 h-10 object-contain"
                                />
                            </div>
                            <span className="text-xs text-gray-600 font-bold transition-colors group-hover:text-gray-900">{item.label}</span>
                        </div>
                    ))}
                </div>

                {/* ۲. اصلاح شده: بخش کالاهای مشابه با طراحی گرید تمیز دیجی‌کالایی */}
                <div className="space-y-4 bg-white border border-gray-100 rounded-2xl p-6">
                    <div className="flex items-center gap-2 pb-2 border-b border-gray-50">
                        <span className="w-2.5 h-2.5 rounded-md bg-[#D92F4E]"></span>
                        <h2 className="text-base text-gray-900 font-bold">کالاهای مشابه</h2>
                    </div>
                    
                    {/* گرید کارت‌های محصولات مشابه (ریسپانسیو از ۱ تا ۴ ستون) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="border border-gray-100 rounded-xl p-4 space-y-3 hover:shadow-lg transition-all duration-300 bg-white flex flex-col justify-between">
                                <div className="flex justify-center p-2 bg-gray-50/50 rounded-lg">
                                    <div className="w-32 h-32 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center text-xs text-gray-400">تصویر محصول</div>
                                </div>
                                <h3 className="text-xs text-gray-800 line-clamp-2 h-8 leading-relaxed">اسپیندل موتور مشابه مدل {item} جی HQD</h3>
                                <div className="text-left pt-2">
                                    <span className="text-sm text-gray-900 font-bold">۴۲,۰۰۰,۰۰۰ <span className="text-[10px] text-gray-500">تومان</span></span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </main>
    );
}