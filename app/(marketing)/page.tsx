
import CarouselComponent from '@/_components/ui/Carousel/Carousel';
import AmazingOfferComponent from '@/_components/ui/AmazingOffer/AmazingOffer';
import ProductsComponent from '@/_components/ui/Products/Products';
import BrandsComponent from '@/_components/ui/Brands/Brands';
import Image from 'next/image';
import Link from 'next/link';
const articlesSample = [
        { id: 1, title: "راهنمای جامع نگهداری و روان‌کاری اسپیندل‌های HQD", slug: "hqd-spindle-maintenance", date: "۰۳ تیر ۱۴۰۵", cat: "آموزشی", desc: "روان‌کاری اصولی اسپیندل می‌تواند عمر مفید قطعات سی‌ان‌سی شما را تا دو برابر افزایش دهد. در این مقاله به بررسی...", image: "/images/blog-1.jpg" },
        { id: 2, title: "چگونه بهترین اینسرت الماسه را برای تراشکاری فولاد انتخاب کنیم؟", slug: "choosing-carbide-inserts", date: "۲۸ خرداد ۱۴۰۵", cat: "راهنمای خرید", desc: "انتخاب گرید مناسب تنگستن کارباید نقش کلیدی در کیفیت خروجی قطعه و کاهش استهلاک دستگاه دارد. بررسی فاکتورهای...", image: "/images/blog-2.jpg" },
        { id: 3, title: "آشنایی با کدهای خطای رایج در کنترلرهای صنعتی CNC", slug: "cnc-controller-error-codes", date: "۱۵ خرداد ۱۴۰۵", cat: "فنی و تخصصی", desc: "عیب‌یابی سریع خطاهای کنترلر کارهای کارگاه را جلو می‌اندازد. در این بخش مهم‌ترین کدهای خطا و راهکار رفع آن‌ها را...", image: "/images/blog-3.jpg" }
    ];
export default function HomePage() {
    return (
        <>
            <section className='carousel_section'>
                <CarouselComponent />
            </section>
            
            <section className='category_section container mx-auto px-5 py-10 text-gray-800'>
                {/* هدر بخش دسته‌بندی با استایل مدرن‌تر و دکمه آرشیو */}
                <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
                    <h2 className="font-bold text-lg md:text-xl text-gray-950 relative after:content-[''] after:absolute after:-bottom-[18px] after:right-0 after:w-16 after:h-0.5 after:bg-[#D92F4E]">
                        دسته‌بندی‌های اصلی
                    </h2>
                </div>
                
                {/* گرید کاملاً ریسپانسیو */}
                <div className='category_wrapper grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mt-5'>
                    
                    {/* آیتم اول: موبایل */}
                    <Link href="" className='bg-white rounded-md p-5 shadow-sm hover:shadow-md shadow-orange-200 hover:border-gray-300 transition-all duration-300 group flex flex-col items-center justify-center text-center cursor-pointer'>
                        {/* دایره‌ی پس‌زمینه تصویر با افکت پالس ملایم در هاور */}
                        <div className='w-44 h-44 rounded-full bg-orange-50 flex items-center justify-center mb-4 relative transition-all duration-300 group-hover:bg-orange-100 group-hover:scale-105'>
                            <Image 
                                src='/images/category/mobile.webp' 
                                width={180} 
                                height={180} 
                                alt='موبایل و گجت‌ها' 
                                className='w-36 h-36 object-contain drop-shadow-md transition-transform duration-300 group-hover:-rotate-3' 
                            />
                        </div>
                        <span className='text-xs sm:text-sm font-extrabold text-gray-700 group-hover:text-orange-600 transition-colors'>
                            موبایل و گجت‌ها
                        </span>
                    </Link>

                    {/* آیتم دوم: لپ‌تاپ */}
                    <Link href="" className='bg-white rounded-md p-5 shadow-sm hover:shadow-md shadow-pink-200 hover:border-gray-300 transition-all duration-300 group flex flex-col items-center justify-center text-center cursor-pointer'>
                        <div className='w-44 h-44 rounded-full bg-pink-50 flex items-center justify-center mb-4 relative transition-all duration-300 group-hover:bg-pink-100 group-hover:scale-105'>
                            <Image 
                                src='/images/category/laptop.webp' 
                                width={180} 
                                height={180} 
                                alt='لپ‌تاپ و کامپیوتر' 
                                className='w-36 h-36 object-contain drop-shadow-md transition-transform duration-300 group-hover:-rotate-3' 
                            />
                        </div>
                        <span className='text-xs sm:text-sm font-extrabold text-gray-700 group-hover:text-pink-600 transition-colors'>
                            لپ‌تاپ و کامپیوتر
                        </span>
                    </Link>

                    {/* آیتم سوم: لوازم خانگی */}
                    <Link href="" className='bg-white rounded-md p-5 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300 group flex flex-col items-center justify-center text-center cursor-pointer'>
                        <div className='w-44 h-44 rounded-full bg-black/5 flex items-center justify-center mb-4 relative transition-all duration-300 group-hover:bg-black/20 group-hover:scale-105'>
                            <Image 
                                src='/images/category/appliances.webp' 
                                width={180} 
                                height={180} 
                                alt='لوازم خانگی' 
                                className='w-36 h-36 object-contain drop-shadow-md transition-transform duration-300 group-hover:-rotate-3' 
                            />
                        </div>
                        <span className='text-xs sm:text-sm font-extrabold text-gray-700 group-hover:text-black transition-colors'>
                            لوازم خانگی
                        </span>
                    </Link>

                    {/* آیتم چهارم: تجهیزات روشنایی */}
                    <Link href="" className='bg-white rounded-md p-5 shadow-sm hover:shadow-md shadow-yellow-200 hover:border-gray-300 transition-all duration-300 group flex flex-col items-center justify-center text-center cursor-pointer'>
                        <div className='w-44 h-44 rounded-full bg-yellow-50 flex items-center justify-center mb-4 relative transition-all duration-300 group-hover:bg-yellow-100 group-hover:scale-105'>
                            <Image 
                                src='/images/category/lamp.webp' 
                                width={180} 
                                height={180} 
                                alt='تجهیزات روشنایی' 
                                className='w-36 h-36 object-contain drop-shadow-md transition-transform duration-300 group-hover:-rotate-3' 
                            />
                        </div>
                        <span className='text-xs sm:text-sm font-extrabold text-gray-700 group-hover:text-yellow-600 transition-colors'>
                            تجهیزات روشنایی
                        </span>
                    </Link>

                    {/* آیتم پنجم: مکمل و سلامت */}
                    <Link href="" className='bg-white rounded-md p-5 shadow-sm hover:shadow-md shadow-blue-200 hover:border-gray-300 transition-all duration-300 group flex flex-col items-center justify-center text-center cursor-pointer'>
                        <div className='w-44 h-44 rounded-full bg-blue-50 flex items-center justify-center mb-4 relative transition-all duration-300 group-hover:bg-blue-100 group-hover:scale-105'>
                            <Image 
                                src='/images/category/whey.webp' 
                                width={180} 
                                height={180} 
                                alt='مکمل و سلامت' 
                                className='w-36 h-36 object-contain drop-shadow-md transition-transform duration-300 group-hover:-rotate-3' 
                            />
                        </div>
                        <span className='text-xs sm:text-sm font-extrabold text-gray-700 group-hover:text-blue-600 transition-colors'>
                            مکمل و سلامت
                        </span>
                    </Link>

                </div>  
            </section>
            
            <section className='offer_section container'>
                <AmazingOfferComponent />
            </section>

            <section className='banner_section container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3'>
                    <div>
                        <Image src='/images/banner1.webp' width={1000} height={1000} alt='' className='w-full h-full object-contain rounded'/>
                    </div>
                    <div>
                        <Image src='/images/banner2.webp' width={1000} height={1000} alt='' className='w-full h-full object-contain rounded'/>
                    </div>
                    <div>
                        <Image src='/images/banner3.webp' width={1000} height={1000} alt='' className='w-full h-full object-contain rounded'/>
                    </div>
                    <div>
                        <Image src='/images/banner4.webp' width={1000} height={1000} alt='' className='w-full h-full object-contain rounded'/>
                    </div>
                </div>
            </section>  
            
            <section className='products_section container mt-4'>
                <ProductsComponent />
            </section>

            <section className='banner_section container mt-4'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                    <div>
                        <Image src='/images/banner5.webp' width={1000} height={1000} alt='' className='w-full h-full object-contain rounded-md'/>
                    </div>
                    <div>
                        <Image src='/images/banner6.webp' width={1000} height={1000} alt='' className='w-full h-full object-contain rounded-md'/>
                    </div>
                </div>
            </section>

            <section className='brands_section mt-4'>
                <BrandsComponent />
            </section>  

            <section className='articles_section mt-4'>
                <div className="container rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm shadow-gray-100/50">
                
                {/* هدر بخش مقالات شامل عنوان و دکمه مشاهده همه */}
                <div className="flex justify-between items-center border-b border-gray-50 pb-5 mb-6 font-semibold">
                    <div className="space-y-1">
                        <h2 className="text-lg md:text-xl font-black text-gray-900 flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-md bg-[#D92F4E]"></span>
                            آخرین مقالات و مجله تخصصی
                        </h2>
                        <p className="text-xs text-gray-400 font-medium">به‌روزترین آموزش‌ها و راهنمای فنی تجهیزات سی‌ان‌سی</p>
                    </div>
                    
                    <Link 
                        href="/blog" 
                        className="flex items-center px-4 py-2 rounded-xl text-white bg-[#D92F4E] transition-all font-bold text-sm"
                    >
                        مشاهده همه مقالات
                        <svg className="w-4 h-4">
                            <use href="#chevron-left"></use>
                        </svg>
                    </Link>
                </div>

                {/* گرید کارت‌های وبلاگ */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-semibold">
                    {articlesSample.map((article) => (
                        <article key={article.id} className="border bg-white border-gray-100 rounded-3xl p-4 shadow-sm shadow-gray-100/30 flex flex-col justify-between hover:border-gray-200 hover:shadow-md hover:shadow-gray-200/20 transition-all group">
                            
                            <div className="space-y-4">
                                {/* تصویر مقاله با هاور زوم افکت */}
                                <Link href='/blogs' className="block w-full h-48 bg-gray-50 rounded-2xl relative overflow-hidden cursor-pointer">
                                    <div className="absolute inset-0 bg-gray-900/5 z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="absolute text-gray-300 text-xs font-bold inset-0 flex items-center justify-center">تصویر مقاله</div>
                                    {/* بعد از ست کردن تصاویر پروژه سورس زیر لود می‌شود: */}
                                    {/* <Image src={article.image} fill className="object-cover group-hover:scale-105 transition-transform duration-500" alt={article.title} /> */}
                                </Link>

                                {/* دسته‌بندی و تاریخ */}
                                <div className="flex items-center justify-between text-[11px] font-bold text-gray-400 px-1">
                                    <span className="bg-gray-50 text-gray-500 px-2.5 py-1 rounded-lg">{article.cat}</span>
                                    <span className="font-medium">{article.date}</span>
                                </div>

                                {/* عنوان مقاله */}
                                <h3 className="text-sm font-black text-gray-900 line-clamp-2 leading-6 px-1 hover:text-[#D92F4E] transition-colors">
                                    <Link href='/blogs'>
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
                                    href='/blogs' 
                                    className="text-xs font-bold text-[#D92F4E] group-hover:underline flex items-center gap-1 cursor-pointer"
                                >
                                    مطالعه مقاله
                                    <svg className="w-3.5 h-3.5"><use href="#chevron-left"></use></svg>
                                </Link>
                            </div>

                        </article>
                    ))}
                </div>

                </div>
            </section>

            <section className="contact_section">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* سمت راست: اطلاعات تماس */}
                    <div className="space-y-6">
                        <h2 className="flex items-center text-3xl p-4 rounded-xl text-white bg-[#D92F4E] transition-all font-bold">با ما در ارتباط باشید</h2>
                        <p className="text-gray-600">برای مشاوره رایگان یا استعلام قیمت محصولات، از راه‌های زیر با ما در تماس باشید.</p>
                        
                        <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-white text-[#D92F4E] rounded-lg shadow">
                                <svg className='w-6 h-6'>
                                    <use href='#phone-arrow-down-left'></use>
                                </svg>
                            </div>
                            <div>
                            <p className="text-sm text-gray-500">شماره تماس</p>
                            <a href='tel:۰۹۳۰۲۳۴۰۲۷۹' className="font-semibold">۰۹۳۰-۲۳۴۰-۲۷۹</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-white text-[#D92F4E] rounded-lg shadow">
                                <svg className='w-6 h-6'>
                                    <use href='#envelope'></use>
                                </svg>
                            </div>
                            <div>
                            <p className="text-sm text-gray-500">ایمیل پشتیبانی</p>
                            <p className="font-semibold">info@yourdomain.com</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="lg:w-[90%] lg:mr-auto">
                        <div className="relative p-0.5 overflow-hidden rounded-3xl group">
                        <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#F8FAFC_0%,#FFFFFF_30%,#D92F4E_50%,#FFFFFF_70%,#F8FAFC_100%)] group-hover:animate-[spin_2s_linear_infinite]" />
                            <form className="relative bg-white p-8 rounded-[22px] z-10 space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input 
                                type="text" 
                                placeholder="نام شما" 
                                className="p-3 rounded-lg border border-gray-300 focus:border-[#D92F4E] focus:ring-1 focus:ring-[#D92F4E] outline-none transition w-full" 
                                />
                                <input 
                                type="tel" 
                                placeholder="شماره تماس" 
                                className="p-3 rounded-lg border border-gray-300 focus:border-[#D92F4E] focus:ring-1 focus:ring-[#D92F4E] outline-none transition w-full" 
                                />
                            </div>
                            
                            <textarea 
                                placeholder="پیام خود را بنویسید..." 
                                className="w-full border border-gray-300 p-3 h-32 rounded-lg focus:border-[#D92F4E] focus:ring-1 focus:ring-[#D92F4E] outline-none transition"
                            ></textarea>
                            
                            <button 
                                type="submit" 
                                className="w-full text-white py-3 rounded-lg font-bold bg-[#D92F4E] transition duration-300 cursor-pointer text-center flex items-center justify-center gap-2"
                            >
                                <span>ارسال پیام</span>
                            </button>
                            </form>
                        </div>
                    </div>

                    </div>
                </div>
            </section>
        </>
    )
}