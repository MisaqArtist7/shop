'use client'
import { useState } from 'react';
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
                                <div className={`flex-row-center p-2 rounded-md ${paymentMethod === 'online' ? 'bg-red-50 text-[#D92F4E]' : 'bg-gray-50 text-gray-400'}`}>
                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="block font-bold text-gray-900">پرداخت آنلاین</span>
                                    <span className="block text-gray-400 mt-0.5 font-medium">شامل تمام کارت‌های عضو شتاب</span>
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
                                <div className={`flex-row-center p-2 rounded-md ${paymentMethod === 'delivery' ? 'bg-red-50 text-[#D92F4E]' : 'bg-gray-50 text-gray-400'}`}>
                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 00-2 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="block font-bold text-gray-900">پرداخت درب محل</span>
                                    <span className="block text-gray-400 mt-0.5 font-medium">پرداخت با کارتخوان موقع تحویل محصول</span>
                                </div>
                            </div>
                        </label>

                    </div>

                    <div className="bg-white border border-gray-200 rounded-md p-4 flex items-center justify-between shadow-sm mt-7">
                        <h2 className="font-bold text-lg text-gray-900 flex-row-center gap-1">
                            کد سفارش : 
                            <span>۱۱۵۳۷۱۵۶۲۶</span>
                        </h2>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-md p-5 shadow-sm space-y-4">
                        {/* هدر کوچک بخش مشخصات */}
                        <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
                            <svg className="w-5 h-5 text-[#D92F4E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <h3 className="font-bold text-sm text-gray-900">مشخصات و آدرس تحویل</h3>
                        </div>

                        {/* اطلاعات به صورت گرید منظم */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                            <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-md border border-gray-100">
                                <span className="text-gray-500 font-medium shrink-0">نام گیرنده:</span>
                                <span className="font-bold text-gray-800">میثاق باباخانی</span>
                            </div>

                            <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-md border border-gray-100">
                                <span className="text-gray-500 font-medium shrink-0">شماره تماس:</span>
                                <span className="font-bold text-gray-800 tracking-wide">۰۹۳۰۲۳۴۰۲۷۹</span>
                            </div>

                            <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-md border border-gray-100">
                                <span className="text-gray-500 font-medium shrink-0">بازه تحویل:</span>
                                <span className="font-bold text-[#D92F4E]">۳ تا ۵ روز کاری</span>
                            </div>

                            {/* بخش آدرس (به صورت عریض در کل عرض گرید) */}
                            <div className="sm:col-span-2 flex items-start gap-2 bg-gray-100 p-3 rounded-md border border-gray-100">
                                <span className="text-gray-500 font-medium shrink-0">آدرس گیرنده:</span>
                                <span className="font-bold text-gray-800 leading-relaxed">
                                    تهران، بزرگراه فتح، نبش خیابان هفدهم، مجتمع صنعتی البرز، پلاک ۱۲، واحد ۴
                                </span>
                            </div>
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
                            <span>مجموع هزینه ارسال</span>
                            <div className="flex items-center gap-1 font-semibold text-gray-700">
                                <span>۴۱۰,۰۰۰,۰۰۰</span>
                                <svg className="w-3.5 h-3.5 text-gray-400"><use href="#toman"></use></svg>
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
                        پرداخت
                    </Link>

                </div>

            </div>
        </section>
    );
}