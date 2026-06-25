import Link from "next/link"
import Image from "next/image"

export default function ArticlesSection() {
    // دیتای نمونه دسته‌بندی‌ها برای فیلتر کردن مقالات
    const categories = ["همه مقالات", "آموزشی و نگهداری", "راهنمای خرید", "فنی و تخصصی"];

    // دیتای نمونه مقالات صنعتی البرز سی‌ان‌سی
    const articlesSample = [
        { id: 1, title: "راهنمای جامع نگهداری و روان‌کاری اسپیندل‌های HQD", slug: "hqd-spindle-maintenance", date: "۰۳ تیر ۱۴۰۵", cat: "آموزشی و نگهداری", desc: "روان‌کاری اصولی اسپیندل می‌تواند عمر مفید قطعات سی‌ان‌سی شما را تا دو برابر افزایش دهد. در این مقاله به بررسی...", image: "/images/blog-1.jpg" },
        { id: 2, title: "چگونه بهترین اینسرت الماسه را برای تراشکاری فولاد انتخاب کنیم؟", slug: "choosing-carbide-inserts", date: "۲۸ خرداد ۱۴۰۵", cat: "راهنمای خرید", desc: "انتخاب گرید مناسب تنگستن کارباید نقش کلیدی در کیفیت خروجی قطعه و کاهش استهلاک دستگاه دارد. بررسی فاکتورهای...", image: "/images/blog-2.jpg" },
        { id: 3, title: "آشنایی با کدهای خطای رایج در کنترلرهای صنعتی CNC", slug: "cnc-controller-error-codes", date: "۱۵ خرداد ۱۴۰۵", cat: "فنی و تخصصی", desc: "عیب‌یابی سریع خطاهای کنترلر کارهای کارگاه را جلو می‌اندازد. در این بخش مهم‌ترین کدهای خطا و راهکار رفع آن‌ها را...", image: "/images/blog-3.jpg" },
        { id: 4, title: "راهنمای جامع نگهداری و روان‌کاری اسپیندل‌های HQD", slug: "hqd-spindle-maintenance", date: "۰۳ تیر ۱۴۰۵", cat: "آموزشی و نگهداری", desc: "روان‌کاری اصولی اسپیندل می‌تواند عمر مفید قطعات سی‌ان‌سی شما را تا دو برابر افزایش دهد. در این مقاله به بررسی...", image: "/images/blog-1.jpg" },
        { id: 5, title: "چگونه بهترین اینسرت الماسه را برای تراشکاری فولاد انتخاب کنیم؟", slug: "choosing-carbide-inserts", date: "۲۸ خرداد ۱۴۰۵", cat: "راهنمای خرید", desc: "انتخاب گرید مناسب تنگستن کارباید نقش کلیدی در کیفیت خروجی قطعه و کاهش استهلاک دستگاه دارد. بررسی فاکتورهای...", image: "/images/blog-2.jpg" },
        { id: 6, title: "آشنایی با کدهای خطای رایج در کنترلرهای صنعتی CNC", slug: "cnc-controller-error-codes", date: "۱۵ خرداد ۱۴۰۵", cat: "فنی و تخصصی", desc: "عیب‌یابی سریع خطاهای کنترلر کارهای کارگاه را جلو می‌اندازد. در این بخش مهم‌ترین کدهای خطا و راهکار رفع آن‌ها را...", image: "/images/blog-3.jpg" }
    ];

    return (
        <section className="articles_section mt-4 container rounded-3xl p-6 md:p-8 border border-gray-100">
            
            {/* هدر اصلی صفحه وبلاگ */}
            <div className="border-b border-gray-50 pb-6 mb-6 font-semibold">
                <h1 className="text-xl md:text-2xl font-black text-gray-900 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-md bg-[#D92F4E]"></span>
                    مجله تخصصی البرز سی‌ان‌سی
                </h1>
                <p className="text-xs text-gray-400 font-medium mt-1">مقالات فنی، آموزش‌های کاربردی و راهنمای انتخاب قطعات صنعتی</p>
            </div>

            {/* نوارهای فیلتر دسته‌بندی مقالات */}
            <div className="flex flex-wrap items-center gap-2 mb-8 font-bold text-xs">
                {categories.map((cat, index) => (
                    <button 
                        key={index} 
                        className={`px-4 py-2.5 rounded-xl transition-all cursor-pointer ${
                            index === 0 
                            ? 'bg-[#D92F4E] text-white shadow-md shadow-[#D92F4E]/10' 
                            : 'bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* گرید کارت‌های وبلاگ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-semibold">
                {articlesSample.map((article) => (
                    <article key={article.id} className="border bg-white border-gray-100 rounded-3xl p-4 shadow-sm shadow-gray-100/30 flex flex-col justify-between hover:border-gray-200 hover:shadow-md hover:shadow-gray-200/20 transition-all group">
                        
                        <div className="space-y-4">
                            {/* تصویر مقاله با هاور زوم افکت */}
                            <Link href={`/blog/${article.slug}`} className="block w-full h-48 bg-gray-50 rounded-2xl relative overflow-hidden cursor-pointer">
                                <div className="absolute inset-0 bg-gray-900/5 z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="absolute text-gray-300 text-xs font-bold inset-0 flex items-center justify-center">تصویر مقاله</div>
                                {/* <Image src={article.image} fill className="object-cover group-hover:scale-105 transition-transform duration-500" alt={article.title} /> */}
                            </Link>

                            {/* دسته‌بندی و تاریخ */}
                            <div className="flex items-center justify-between text-[11px] font-bold text-gray-400 px-1">
                                <span className="bg-gray-50 text-gray-500 px-2.5 py-1 rounded-lg">{article.cat}</span>
                                <span className="font-medium">{article.date}</span>
                            </div>

                            {/* عنوان مقاله */}
                            <h3 className="text-sm font-black text-gray-900 line-clamp-2 leading-6 px-1 hover:text-[#D92F4E] transition-colors">
                                <Link href={`/blog/${article.slug}`}>
                                    {article.title}
                                </Link>
                            </h3>

                            {/* لید / خلاصه متن مقاله */}
                            <p className="text-xs text-gray-500 font-medium leading-6 line-clamp-2 px-1">
                                {article.desc}
                            </p>
                        </div>

                        {/* دکمه ادامه مطلب پایین کارت */}
                        <div className="mt-5 pt-3 border-t border-gray-50/70 flex justify-end">
                            <Link 
                                href={`/blog/${article.slug}`} 
                                className="text-xs font-bold text-[#D92F4E] group-hover:underline flex items-center gap-1 cursor-pointer"
                            >
                                مطالعه مقاله
                                <svg className="w-3.5 h-3.5"><use href="#chevron-left"></use></svg>
                            </Link>
                        </div>

                    </article>
                ))}
            </div>

        </section>
    )
}