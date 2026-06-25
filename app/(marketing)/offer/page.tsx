'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function OfferPage() {
    // مدیریت تب‌های مرتب‌سازی بر اساس تم جدید
    const [sortBy, setSortBy] = useState('newest');

    return (
        <section className="offer_section mx-auto py-5 text-gray-800">
            <div className="px-5 mx-auto flex flex-col lg:flex-row gap-4"> 
                
                {/* ستون فیلترها (کاملاً هماهنگ با کانتینرهای لایت سایت) */}
                <aside className="w-full lg:w-68 shrink-0 bg-white border border-gray-200 rounded-md p-6 h-fit sticky top-52 shadow-sm">
                    <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-3">
                        <h3 className="font-bold text-lg text-gray-900">فیلترهای پیشرفته</h3>
                        <button className="text-xs text-[#D92F4E] font-semibold hover:underline">حذف همه</button>
                    </div>
                    
                    {/* سکشن‌های فیلتر */}
                    <div className="space-y-6">
                        <div>
                            <span className="block font-bold mb-3 text-gray-700 text-sm">دسته‌بندی محصولات</span>
                            <div className="space-y-2.5 text-sm text-gray-600">
                                <label className="flex items-center gap-2.5 cursor-pointer">
                                    <input type="checkbox" className="rounded border-gray-300 text-[#D92F4E] focus:ring-[#D92F4E]" /> 
                                    دستگاه‌های CNC
                                </label>
                                <label className="flex items-center gap-2.5 cursor-pointer">
                                    <input type="checkbox" className="rounded border-gray-300 text-[#D92F4E] focus:ring-[#D92F4E]" /> 
                                    قطعات یدکی
                                </label>
                                <label className="flex items-center gap-2.5 cursor-pointer">
                                    <input type="checkbox" className="rounded border-gray-300 text-[#D92F4E] focus:ring-[#D92F4E]" /> 
                                    ابزارآلات برشی
                                </label>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* بخش اصلی: مرتب‌سازی و گرید محصولات */}
                <main className="flex-1 space-y-2">
                    
                    {/* نوار مرتب‌سازی (Sort Bar) با رنگ‌بندی قرمز و لایت */}
                    <div className="bg-white border border-gray-200 rounded-md p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
                        <div className="flex items-center gap-2 text-sm text-gray-500 overflow-x-auto whitespace-nowrap pb-2 sm:pb-0 scrollbar-none">
                            <span className="font-bold text-gray-700 ml-2">مرتب‌سازی:</span>
                            
                            <button 
                                onClick={() => setSortBy('newest')} 
                                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${sortBy === 'newest' ? 'bg-[#D92F4E] text-white shadow-md shadow-[#D92F4E]/20' : 'hover:bg-gray-100 text-gray-600'}`}>
                                جدیدترین‌ها
                            </button>
                            <button 
                                onClick={() => setSortBy('most_viewed')} 
                                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${sortBy === 'most_viewed' ? 'bg-[#D92F4E] text-white shadow-md shadow-[#D92F4E]/20' : 'hover:bg-gray-100 text-gray-600'}`}>
                                پربازدیدترین‌ها
                            </button>
                            <button 
                                onClick={() => setSortBy('best_selling')} 
                                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${sortBy === 'best_selling' ? 'bg-[#D92F4E] text-white shadow-md shadow-[#D92F4E]/20' : 'hover:bg-gray-100 text-gray-600'}`}>
                                پرفروش‌ترین‌ها
                            </button>
                            <button 
                                onClick={() => setSortBy('most_cheapest')} 
                                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${sortBy === 'most_cheapest' ? 'bg-[#D92F4E] text-white shadow-md shadow-[#D92F4E]/20' : 'hover:bg-gray-100 text-gray-600'}`}>
                                ارزان ترین ها
                            </button>
                            <button 
                                onClick={() => setSortBy('most_expensive')} 
                                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${sortBy === 'most_expensive' ? 'bg-[#D92F4E] text-white shadow-md shadow-[#D92F4E]/20' : 'hover:bg-gray-100 text-gray-600'}`}>
                                گران ترین ها
                            </button>
                        </div>
                        
                        <div className="text-xs text-gray-400 font-medium">
                            نمایش <span className="text-gray-800 font-bold">۱۲</span> محصول آفر
                        </div>
                    </div>

                    {/* گرید محصولات (تصاویر به صورت زنده با Next/Image هندل شدند) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-1">
                        
                        {/* این بخش روی دیتای ورودی مپ می‌شود */}
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
                            <Link href="" key={item} className="bg-white border border-gray-200 hover:border-gray-300 rounded-md flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden">
                                <div>
                                    {/* تصویر محصول با Next/Image */}
                                    <div className="w-full aspect-square mb-4 overflow-hidden flex items-center justify-center relative">
                                        <Image 
                                            src='/images/products/1.webp'
                                            alt="محصولات البرز CNC" 
                                            width={500} 
                                            height={500} 
                                            className="w-60 h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        {/* بج تخفیف با رنگ قرمز فرم تماس */}
                                        <span className="absolute top-3 right-3 bg-[#D92F4E] text-white text-[10px] font-bold px-2.5 py-1 rounded-lg shadow-sm">
                                            پیشنهاد ویژه
                                        </span>
                                    </div>
                                    <div className='px-3'>
                                        {/* عناوین و متن‌ها */}
                                        <h4 className="font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-[#D92F4E] transition-colors">
                                            دستگاه صنعتی CNC سری البرز
                                        </h4>
                                        <p className="text-xs text-gray-500 line-clamp-2 mb-4 leading-relaxed">
                                            توضیحات تکمیلی قطعات، موتور و سیستم کنترلر با بالاترین کیفیت بازدهی...
                                        </p>
                                    </div>
                                </div>
                                
                                {/* بخش قیمت و دکمه اکشن */}
                                <div className="border-t border-gray-100 flex items-center justify-between p-3">
                                    <div className="flex flex-col">
                                        <span className="text-gray-400 line-through">410,000,000</span>
                                        <span className="flex items-center justify-center gap-1 text-sm font-extrabold text-[#D92F4E]">368.888.981
                                            <svg className="w-4 h-4 text-gray-500"><use href="#toman"></use></svg>
                                        </span>
                                    </div>
                                    
                                    {/* دکمه با تم دایره‌ای و پیکان به سمت محصول */}
                                    <button className="p-2.5 rounded-full bg-gray-50 group-hover:bg-[#D92F4E] text-gray-500 group-hover:text-white transition-all duration-300 border border-gray-100 group-hover:border-[#D92F4E] cursor-pointer">
                                        <svg className="w-4 h-4 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </div>
                            </Link>
                        ))}

                    </div>
                </main>

            </div>
        </section>
    );
}