import Image from "next/image"
import Link from "next/link"

export default function HeaderComponent() {
    return (
        <header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50" dir="rtl">
            {/* نوار تبلیغاتی بالا */}
            <div className="w-full h-12 relative overflow-hidden">
                <Image src='/images/top.webp' fill alt="تبلیغات" className="object-cover object-center" priority />
            </div>
        
            <div className="container mx-auto px-6">
                {/* بخش اصلی هدر */}
                <div className="flex items-center justify-between py-5 gap-8">
                    
                    {/* لوگو و سرچ باکس */}
                    <div className="flex items-center gap-8 grow">
                        <Link href="/">
                            <Image src='/images/logo.svg' width={140} height={45} alt="البرز سی‌ان‌سی" className="h-10 w-auto cursor-pointer"/>
                        </Link>
                        
                        {/* فرم سرچ مدرن */}
                        <form action="" className="grow max-w-md relative hidden sm:block">
                            <input 
                                type="search" 
                                placeholder="جستجو در محصولات البرز سی‌ان‌سی..." 
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl pr-11 pl-4 py-3 outline-none text-sm transition-all focus:border-[#D92F4E] focus:bg-white focus:ring-4 focus:ring-[#D92F4E]/10"
                            />
                            {/* آیکون سرچ داخل اینپوت */}
                            <svg className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                                <use href="#searchIcon"></use> {/* مطمئن شو این آیکون در SVGهایت باشد، یا از آیکون ساده استفاده کن */}
                            </svg>
                        </form>
                    </div>

                    {/* دکمه‌های اکشن (ورود و سبد خرید) */}
                    <div className="flex items-center gap-4 shrink-0">
                        
                        {/* دکمه ورود/ثبت‌نام هماهنگ با پالت */}
                        <Link href='/login' className="flex items-center gap-2 px-5 py-2.5 border text-white rounded-xl text-sm font-bold border-[#D92F4E] bg-[#D92F4E] transition-all duration-300">
                            <svg className="w-5 h-5"><use href="#addUserIcon"></use></svg>
                            <span>ورود | ثبت نام</span>
                        </Link>
                        
                        {/* خط جداکننده */}
                        <div className="w-px h-6 bg-gray-200"></div>
                        
                        {/* سبد خرید با نشانگر تعداد */}
                        <Link href='/cart' className="p-3 hover:bg-gray-50 border border-transparent hover:border-gray-100 rounded-xl transition-all relative group">
                            <svg className="w-6 h-6 text-gray-700 group-hover:text-[#D92F4E] transition-colors">
                                <use href="#shopping-cart"></use>
                            </svg>
                            {/* نشانگر تعداد آیتم در سبد */}
                            <span className="absolute -top-1 -left-1 bg-[#D92F4E] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                                ۰
                            </span>
                        </Link>
                    </div>
                </div>

                {/* منوی ناوبری (Navigation) */}
                <nav className="border-t border-gray-50 py-2">
                    <ul className="flex items-center gap-6 text-sm text-gray-600 font-medium">
                        {[
                            { label: 'دسته‌بندی‌ها', icon: '#bars-3-bottom-right' },
                            { label: 'همه محصولات', icon: '#building-storefront' },
                            { label: 'شگفت‌انگیزها', icon: '#percent-badge', highlight: true },
                            { label: 'پرفروش‌ترین‌ها', icon: '#fire' },
                            { label: 'درباره ما', icon: '#light-bulb' },
                            { label: 'تماس با ما', icon: '#phone' }
                        ].map((item, index) => (
                            <li key={index}>
                                <Link 
                                    href='' 
                                    className={`flex items-center gap-2 py-2 transition-all relative group ${
                                        item.highlight ? 'text-[#D92F4E] font-bold' : 'hover:text-black'
                                    }`}
                                >
                                    <svg className={`w-5 h-5 ${item.highlight ? 'text-[#D92F4E]' : 'text-gray-400 group-hover:text-black transition-colors'}`}>
                                        <use href={item.icon}></use>
                                    </svg>
                                    <span>{item.label}</span>
                                    
                                    {/* خط متحرک زیر منو (بسیار مدرن‌تر از Border ثابت) */}
                                    <span className={`absolute bottom-0 right-0 h-[2px] bg-[#D92F4E] transition-all duration-300 w-0 group-hover:w-full ${item.highlight ? 'w-4' : ''}`} />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}