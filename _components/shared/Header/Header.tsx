'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation" // ۱. وارد کردن هوک usePathname

export default function HeaderComponent() {
    const [scrollProgress, setScrollProgress] = useState(0)
    const pathname = usePathname() // ۲. گرفتن مسیر فعلی صفحه

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight
            if (totalHeight > 0) {
                const progress = (window.scrollY / totalHeight) * 100
                setScrollProgress(progress)
            }
        }

        window.addEventListener("scroll", handleScroll) 
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // آرایه منو را اینجا تعریف می‌کنیم تا کد تمیزتر شود
    const menuItems = [
        { label: 'دسته‌بندی‌ها', icon: '#bars-3-bottom-right', href: '/categories' }, // بهتره برای همه href مشخص کنید
        { label: 'شگفت‌انگیزها', icon: '#percent-badge', href: '/discounts' },
        { label: 'پرفروش‌ترین‌ها', icon: '#fire', href: '/best-sellers' },
        { label: 'درباره ما', icon: '#building-storefront', href: '/about-us' },
        { label: 'تماس با ما', icon: '#phone', href: '/contact-us' }
    ]

    return (
        <header className="bg-white border-b border-gray-100 shadow sticky top-0 z-50 transition-all duration-300">
            
            {/* نوار تبلیغاتی بالا */}
            <div className="w-full h-12 relative overflow-hidden">
                <Image src='/images/top.webp' fill alt="تبلیغات" className="object-cover object-center" priority />
            </div>
        
            <div className="mx-auto px-11">
                {/* بخش اصلی هدر */}
                <div className="flex items-center justify-between py-5 gap-8">
                    
                    {/* لوگو و سرچ باکس */}
                    <div className="flex items-center gap-8 grow">
                        <Link href="/">
                            <Image src='/images/logo.svg' width={140} height={45} alt="لوگوی سایت" className="h-10 w-auto cursor-pointer"/>
                        </Link>
                        
                        {/* فرم سرچ مدرن */}
                        <form action="" className="w-full max-w-xs relative hidden sm:block transition-all duration-300 ease-in-out focus-within:max-w-md">
                            <input 
                                type="search" 
                                placeholder="جستجو در محصولات دیجی دوربین..." 
                                className="w-full font-medium bg-gray-50 border border-zinc-300 rounded-full pr-11 pl-4 py-3 outline-none  transition-all focus:border-[#D92F4E] focus:bg-white focus:ring-4 focus:ring-[#D92F4E]/20"
                            />
                            <svg className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                                <use href="#searchIcon"></use>
                            </svg>
                        </form>
                    </div>

                    {/* دکمه‌های اکشن (ورود و سبد خرید) */}
                    <div className="flex items-center gap-4 shrink-0">
                        {/* دکمه ورود/ثبت‌نام */}
                        <Link href='/login' className="flex items-center gap-2 px-5 py-2.5 border text-white rounded-xl  font-bold border-[#D92F4E] bg-[#D92F4E] hover:bg-[#b92742] transition-all duration-300 shadow-md shadow-[#D92F4E]/10">
                            <svg className="w-5 h-5"><use href="#addUserIcon"></use></svg>
                            <span>ورود | ثبت نام</span>
                        </Link>
                        
                        <div className="w-px h-6 bg-zinc-300"></div>
                        
                        {/* سبد خرید */}
                        <Link href='/checkout/cart' className="p-3 bg-gray-100 border border-zinc-200 rounded-xl transition-all relative group">
                            <svg className="w-6 h-6 text-gray-700 group-hover:text-[#D92F4E] transition-colors">
                                <use href="#shopping-cart"></use>
                            </svg>
                            <span className="absolute -top-1 -left-1 bg-[#D92F4E] text-white  font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                                ۰
                            </span>
                        </Link>
                    </div>
                </div>

                {/* منوی ناوبری (Navigation) */}
                <nav className="border-t border-gray-200 py-3">
                    <ul className="flex items-center gap-6  text-gray-600 font-medium">
                        {menuItems.map((item, index) => {
                            // ۳. بررسی اینکه آیا کاربر در صفحه مربوط به این آیتم هست یا خیر
                            const isActive = pathname === item.href

                            return (
                                <li key={index}>
                                    <Link 
                                        href={item.href} 
                                        className={`flex items-center gap-2 py-2 transition-all relative group ${
                                            isActive ? 'text-[#D92F4E] font-bold' : 'hover:text-black'
                                        }`}
                                    >
                                        <svg className={`w-5 h-5 ${isActive ? 'text-[#D92F4E]' : 'text-gray-400 group-hover:text-black transition-colors'}`}>
                                            <use href={item.icon}></use>
                                        </svg>
                                        <span>{item.label}</span>
                                        {/* خط زیرین متحرک (برای صفحه فعال همیشه ۱۰۰٪ عرض را می‌گیرد) */}
                                        <span className={`absolute bottom-0 right-0 h-0.5 bg-[#D92F4E] transition-all duration-300 ${
                                            isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`} />
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>

            {/* خط نئونی پرگرس چسبیده به کف هدر */}
            <div className="absolute bottom-0 right-0 h-0.5 bg-[#D92F4E] transition-all duration-75 ease-out shadow-[0_0_8px_#D92F4E,0_0_15px_#D92F4E]" 
                style={{ width: `${scrollProgress}%` }} />
        </header>
    )
}