'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
    // یک وضعیت تستی برای چک‌باکس نصب در محل
    const [installAtLocation, setInstallAtLocation] = useState(false);

    return (
        <section className="cart_section container mx-auto px-5 py-5 text-gray-800">
            {/* کل سبد خرید: در دسکتاپ دو ستونه، در موبایل تک ستونه */}
            <div className="cart_wrapper flex flex-col lg:flex-row gap-4 items-start">
                
                {/* ستون راست: لیست کالاها و گزینه‌های جانبی */}
                <div className="w-full lg:flex-1 space-y-3">
                    
                    {/* هدر سبد خرید */}
                    <div className="bg-white border border-gray-200 rounded-md p-4 flex items-center justify-between shadow-sm">
                        <div className="flex items-center gap-2">
                            <h1 className="font-bold text-lg text-gray-900">سبد خرید شما</h1>
                            <span className="bg-gray-100 text-gray-600 text-xs font-bold px-2.5 py-1 rounded-full">
                                ۱ کالا
                            </span>
                        </div>
                    </div>

                    {/* کارت محصول درون سبد خرید */}
                    <div className="bg-white border border-gray-200 rounded-md p-4 shadow-sm group relative overflow-hidden">
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            
                            {/* تصویر محصول */}
                            <div className="w-28 h-28 bg-gray-50 rounded-md overflow-hidden flex items-center justify-center shrink-0 border border-gray-100">
                                <Image 
                                    src="/images/products/1.webp" 
                                    alt="محصول سبد خرید" 
                                    width={120} 
                                    height={120} 
                                    className="object-cover"
                                />
                            </div>

                            {/* جزئیات محصول (نام، قیمت و شمارنده) */}
                            <div className="flex-1 w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div className="space-y-1">
                                    <h4 className="font-bold text-gray-900 hover:text-[#D92F4E] transition-colors">
                                        دستگاه صنعتی CNC سری البرز
                                    </h4>
                                    <p className="text-xs text-gray-400">کد محصول: Alborz-CNC-301</p>
                                </div>

                                {/* قیمت و مدیریت تعداد */}
                                <div className="flex sm:flex-col items-center sm:items-end justify-between gap-3 border-t sm:border-t-0 pt-3 sm:pt-0 border-gray-100">
                                    {/* قیمت */}
                                    <div className="flex items-center gap-1 text-base font-extrabold text-[#D92F4E]">
                                        <span>۳۶۸,۸۸۸,۹۸۱</span>
                                        <svg className="w-4 h-4 text-gray-500"><use href="#toman"></use></svg>
                                    </div>

                                    {/* دکمه‌های کم و زیاد کردن + حذف */}
                                    <div className="flex items-center bg-gray-50 border border-gray-200 rounded-md p-1 gap-3">
                                        <button className="w-7 h-7 flex items-center justify-center rounded bg-white border border-gray-200 text-gray-600 hover:bg-gray-100 font-bold cursor-pointer transition">
                                            +
                                        </button>
                                        <span className="text-sm font-bold text-gray-800 min-w-[12px] text-center">۱</span>
                                        
                                        {/* آیکون حذف (سطل زباله) - اگر ۱ بود حذف بشه */}
                                        <button className="w-7 h-7 flex items-center justify-center rounded text-gray-400 hover:text-[#D92F4E] hover:bg-red-50 cursor-pointer transition">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-4v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* گزینه نصب در محل */}
                    <div className="bg-white border border-gray-200 rounded-md p-4 flex items-center justify-between shadow-sm">
                        <label className="flex items-center gap-3 cursor-pointer select-none w-full">
                            <input 
                                type="checkbox" 
                                checked={installAtLocation}
                                onChange={(e) => setInstallAtLocation(e.target.checked)}
                                className="w-5 h-5 rounded border-gray-300 text-[#D92F4E] focus:ring-[#D92F4E] cursor-pointer" 
                            />
                            <div>
                                <span className="block font-bold text-sm text-gray-900">درخواست نصب و راه‌اندازی در محل</span>
                                <span className="block text-xs text-gray-400 mt-0.5">توسط تکنسین‌های مجرب تیم البرز CNC</span>
                            </div>
                        </label>
                    </div>

                </div>

                {/* ستون چپ: فاکتور و جزئیات خرید (حالت Sticky برای دسترسی راحت موقع اسکرول) */}
                <div className="w-full lg:w-80 shrink-0 bg-white border border-gray-200 rounded-md p-5 shadow-sm sticky top-52 space-y-4">
                    <h2 className="font-bold text-base text-gray-900 border-b border-gray-100 pb-3">
                        جزئیات خرید
                    </h2>
                    
                    {/* محاسبات قیمت */}
                    <div className="space-y-3 text-sm">
                        <div className="flex items-center justify-between text-gray-500">
                            <span>قیمت کالاها (۱)</span>
                            <div className="flex items-center gap-1 font-semibold text-gray-700">
                                <span>۴۱۰,۰۰۰,۰۰۰</span>
                                <svg className="w-3.5 h-3.5 text-gray-400"><use href="#toman"></use></svg>
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-gray-500">
                            <span>تخفیف کالاها</span>
                            <div className="flex items-center gap-1 font-semibold text-green-600">
                                <span>۴۱,۱۱۱,۰۱۹-</span>
                                <svg className="w-3.5 h-3.5 text-green-600"><use href="#toman"></use></svg>
                            </div>
                        </div>

                        {installAtLocation && (
                            <div className="flex items-center justify-between text-gray-500 transition-all">
                                <span>هزینه نصب و تست کالیبراسیون</span>
                                <span className="text-xs font-semibold text-gray-700">طبق تعرفه پس از نصب</span>
                            </div>
                        )}

                        <div className="border-t border-gray-100 pt-3 flex items-center justify-between font-bold text-gray-900 text-base">
                            <span>مجموع سبد خرید</span>
                            <div className="flex items-center gap-1 text-[#D92F4E]">
                                <span>۳۶۸,۸۸۸,۹۸۱</span>
                                <svg className="w-4 h-4 text-[#D92F4E]"><use href="#toman"></use></svg>
                            </div>
                        </div>
                    </div>

                    {/* دکمه ثبت سفارش */}
                    <button className="w-full text-white py-3 rounded-md font-bold bg-[#D92F4E] hover:bg-[#b8233f] shadow-md shadow-[#D92F4E]/10 transition duration-300 cursor-pointer text-center block text-sm">
                        ثبت و ادامه سفارش
                    </button>

                    {/* باکس هشدار زرد/نارنجی ملایم برای عدم پرداخت */}
                    <div className="bg-amber-50 border border-amber-200/70 rounded-md p-3 flex gap-2">
                        <svg className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <p className="text-[11px] text-amber-700 leading-relaxed font-medium">
                            مبلغ سفارش هنوز پرداخت نشده و در صورت اتمام موجودی، کالاها به صورت خودکار از سبد خرید شما حذف می‌شوند.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}