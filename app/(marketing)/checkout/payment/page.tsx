'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function PaymentPage() {
    // مدیریت روش پرداخت (پیش‌فرض: online)
    const [paymentMethod, setPaymentMethod] = useState('online');

    return (
        <section className="cart_section container mx-auto px-5 py-5 text-gray-800">
            {/* کل ساختار: در دسکتاپ دو ستونه، در موبایل تک ستونه */}
            <div className="cart_wrapper flex flex-col lg:flex-row gap-4 items-start">
                
                {/* ستون راست: انتخاب روش پرداخت و خدمات جانبی */}
                <div className="w-full lg:flex-1 space-y-3">
                    
                    {/* هدر صفحه */}
                    <div className="bg-white border border-gray-200 rounded-md p-4 flex items-center justify-between shadow-sm">
                        <h1 className="font-bold text-lg text-gray-900">انتخاب روش پرداخت</h1>
                    </div>

                    {/* کانتینر روش‌های پرداخت (رادیو کارت‌های هوشمند و متصل به استیت) */}
                    <div className="bg-white border border-gray-200 rounded-md p-5 shadow-sm space-y-3">
                        
                        {/* گزینه اول: پرداخت آنلاین */}
                        <label 
                            onClick={() => setPaymentMethod('online')}
                            className={`flex items-center gap-4 p-4 rounded-md border cursor-pointer transition-all duration-200 select-none ${
                                paymentMethod === 'online' 
                                ? 'border-[#D92F4E] bg-red-50/10 shadow-sm' 
                                : 'border-gray-100 hover:border-gray-200 bg-white'
                            }`}
                        >
                            <input 
                                type="radio" 
                                name="payment_type"
                                checked={paymentMethod === 'online'}
                                onChange={() => setPaymentMethod('online')}
                                className="w-4 h-4 text-[#D92F4E] focus:ring-[#D92F4E] cursor-pointer accent-[#D92F4E]" 
                            />
                            <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-md ${paymentMethod === 'online' ? 'bg-red-50 text-[#D92F4E]' : 'bg-gray-50 text-gray-400'}`}>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="block font-bold text-sm text-gray-900">پرداخت آنلاین</span>
                                    <span className="block text-xs text-gray-400 mt-0.5">شامل تمام کارت‌های عضو شتاب</span>
                                </div>
                            </div>
                        </label>

                        {/* گزینه دوم: پرداخت درب محل */}
                        <label 
                            onClick={() => setPaymentMethod('delivery')}
                            className={`flex items-center gap-4 p-4 rounded-md border cursor-pointer transition-all duration-200 select-none ${
                                paymentMethod === 'delivery' 
                                ? 'border-[#D92F4E] bg-red-50/10 shadow-sm' 
                                : 'border-gray-100 hover:border-gray-200 bg-white'
                            }`}
                        >
                            <input 
                                type="radio" 
                                name="payment_type"
                                checked={paymentMethod === 'delivery'}
                                onChange={() => setPaymentMethod('delivery')}
                                className="w-4 h-4 text-[#D92F4E] focus:ring-[#D92F4E] cursor-pointer accent-[#D92F4E]" 
                            />
                            <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-md ${paymentMethod === 'delivery' ? 'bg-red-50 text-[#D92F4E]' : 'bg-gray-50 text-gray-400'}`}>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 00-2 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="block font-bold text-sm text-gray-900">پرداخت درب محل</span>
                                    <span className="block text-xs text-gray-400 mt-0.5">پرداخت با کارتخوان موقع تحویل محصول</span>
                                </div>
                            </div>
                        </label>

                    </div>

                    {/* گزینه خدمات نصب در محل (ثابت و اطلاعاتی) */}
                    <div className="bg-white border border-gray-200 rounded-md p-4 flex items-center gap-3 shadow-sm">
                        <div className="p-2 bg-gray-50 text-[#D92F4E] rounded-md shrink-0">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div>
                            <span className="block font-bold text-sm text-gray-900">درخواست نصب و راه‌اندازی در محل</span>
                            <span className="block text-xs text-gray-400 mt-0.5">توسط تکنسین‌های مجرب تیم البرز CNC</span>
                        </div>
                    </div>

                </div>

                {/* ستون چپ: فاکتور نهایی و جزئیات خرید */}
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

                        <div className="border-t border-gray-100 pt-3 flex items-center justify-between font-bold text-gray-900 text-base">
                            <span>مجموع سبد خرید</span>
                            <div className="flex items-center gap-1 text-[#D92F4E]">
                                <span>۳۶۸,۸۸۸,۹۸۱</span>
                                <svg className="w-4 h-4 text-[#D92F4E]"><use href="#toman"></use></svg>
                            </div>
                        </div>
                    </div>

                    {/* دکمه ثبت سفارش و هدایت به درگاه یا اتمام فرآیند */}
                    <Link href='/checkout/payment' className="w-full text-white py-3 rounded-md font-bold bg-[#D92F4E] hover:bg-[#b8233f] shadow-md shadow-[#D92F4E]/10 transition duration-300 cursor-pointer text-center block text-sm">
                        پرداخت و تکمیل سفارش
                    </Link>

                    {/* باکس هشدار عدم پرداخت */}
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