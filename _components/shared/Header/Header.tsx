'use client'

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function HeaderComponent() {

    const [scrollProgress, setScrollProgress] = useState(0)
    const [megaOpen, setMegaOpen] = useState(false)
    const timeoutRef = useRef(null)
    const pathname = usePathname()

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

    const openMega = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
        setMegaOpen(true)
    }

    const closeMega = () => {
        timeoutRef.current = setTimeout(() => {
            setMegaOpen(false)
        }, 120)
    }

    const menuItems = [
        { label: 'دسته‌بندی‌ها', icon: '#bars-3-bottom-right', href: '/' },
        { label: 'شگفت‌انگیزها', icon: '#percent-badge', href: '/discounts' },
        { label: 'پرفروش‌ترین‌ها', icon: '#fire', href: '/best-sellers' },
        { label: 'درباره ما', icon: '#building-storefront', href: '/about-us' },
        { label: 'تماس با ما', icon: '#phone', href: '/contact-us' }
    ]

    const isCategories = (item) => item.label === 'دسته‌بندی‌ها'

    return (
        <header className="bg-white border-b border-gray-100 shadow sticky top-0 z-50 transition-all duration-300">

            {/* بنر بالا */}
            <div className="w-full h-12 relative overflow-hidden">
                <Image src="/images/top.webp" fill alt="تبلیغات" className="object-cover object-center" priority />
            </div>

            <div className="mx-auto px-11">

                {/* هدر اصلی */}
                <div className="flex items-center justify-between py-5 gap-8">

                    {/* لوگو + سرچ */}
                    <div className="flex items-center gap-8 grow">

                        <Link href="/">
                            <Image
                                src="/images/logo.svg"
                                width={140}
                                height={45}
                                alt="لوگوی سایت"
                                className="h-10 w-auto cursor-pointer"
                            />
                        </Link>

                        <form className="w-full max-w-xs relative hidden sm:block transition-all duration-300 ease-in-out focus-within:max-w-md">
                            <input
                                type="search"
                                placeholder="جستجو در محصولات دیجی دوربین..."
                                className="w-full font-medium bg-gray-50 border border-zinc-300 rounded-full pr-11 pl-4 py-3 outline-none transition-all focus:border-[#D92F4E] focus:bg-white focus:ring-4 focus:ring-[#D92F4E]/20"
                            />
                            <svg className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                                <use href="#searchIcon"></use>
                            </svg>
                        </form>

                    </div>

                    {/* اکشن‌ها */}
                    <div className="flex items-center gap-4 shrink-0">

                        <Link
                            href="/login"
                            className="flex items-center gap-2 px-5 py-2.5 border text-white rounded-xl font-bold border-[#D92F4E] bg-[#D92F4E] hover:bg-[#b92742] transition-all duration-300 shadow-md shadow-[#D92F4E]/10"
                        >
                            <svg className="w-5 h-5"><use href="#addUserIcon"></use></svg>
                            <span>ورود | ثبت نام</span>
                        </Link>

                        <div className="w-px h-6 bg-zinc-300"></div>

                        <Link
                            href="/checkout/cart"
                            className="p-3 bg-gray-100 border border-zinc-200 rounded-xl transition-all relative group"
                        >
                            <svg className="w-6 h-6 text-gray-700 group-hover:text-[#D92F4E] transition-colors">
                                <use href="#shopping-cart"></use>
                            </svg>

                            <span className="absolute -top-1 -left-1 bg-[#D92F4E] text-white font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                                ۰
                            </span>
                        </Link>

                    </div>
                </div>

                {/* ناوبری */}
                <nav className="border-t border-gray-200 pt-3 relative">
                    <ul className="flex items-center gap-6 text-gray-600 font-medium">

                        {menuItems.map((item, index) => {

                            const active = pathname === item.href
                            const isCat = isCategories(item)

                            return (
                                <li
                                    key={index}
                                    className="group pb-3 -mb-3"
                                    onMouseEnter={() => isCat && openMega()}
                                    onMouseLeave={() => isCat && closeMega()}
                                >
                                    <Link
                                        href={item.href}
                                        className={`flex items-center gap-2 py-4 relative transition-all ${
                                            active ? 'text-[#D92F4E] font-bold' : 'hover:text-[#D92F4E]'
                                        }`}
                                    >
                                        <svg className={`w-5 h-5 ${
                                            active ? 'text-[#D92F4E]' : 'text-gray-400 group-hover:text-[#D92F4E]'
                                        }`}>
                                            <use href={item.icon}></use>
                                        </svg>

                                        <span>{item.label}</span>

                                        <span className={`absolute bottom-3 right-0 h-0.5 bg-[#D92F4E] transition-all duration-300 ${
                                            active ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`} />
                                    </Link>

                                    {/* مگامنو */}
                                    {isCat && megaOpen && (
                                        <div className="absolute pt-1 z-50 w-2xl">
                                            <div className="bg-white border border-gray-200 shadow-xl rounded-b-2xl p-6 flex items-center gap-11">

                                                <div>
                                                    <h4 className="font-bold mb-3 border-r-2 border-[#D92F4E] pr-2">
                                                        دوربین
                                                    </h4>
                                                    <ul className="space-y-2 text-gray-500 pr-2">
                                                        <li className="hover:text-[#D92F4E] cursor-pointer">DSLR</li>
                                                        <li className="hover:text-[#D92F4E] cursor-pointer">Mirrorless</li>
                                                        <li className="hover:text-[#D92F4E] cursor-pointer">Compact</li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <h4 className="font-bold mb-3 border-r-2 border-[#D92F4E] pr-2">
                                                        لنز
                                                    </h4>
                                                    <ul className="space-y-2 text-gray-500 pr-2">
                                                        <li className="hover:text-[#D92F4E] cursor-pointer">Prime</li>
                                                        <li className="hover:text-[#D92F4E] cursor-pointer">Zoom</li>
                                                        <li className="hover:text-[#D92F4E] cursor-pointer">Macro</li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <h4 className="font-bold mb-3 border-r-2 border-[#D92F4E] pr-2">
                                                        تجهیزات
                                                    </h4>
                                                    <ul className="space-y-2 text-gray-500 pr-2">
                                                        <li className="hover:text-[#D92F4E] cursor-pointer">سه‌پایه</li>
                                                        <li className="hover:text-[#D92F4E] cursor-pointer">کیف</li>
                                                        <li className="hover:text-[#D92F4E] cursor-pointer">کارت حافظه</li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                    )}

                                </li>
                            )
                        })}

                    </ul>
                </nav>
            </div>

            {/* overlay درست */}
            {megaOpen && (
                <div className="fixed inset-0 bg-black/30 z-40 pointer-events-none" />
            )}

            {/* progress bar */}
            <div
                className="absolute bottom-0 right-0 h-0.5 bg-[#D92F4E] shadow-[0_0_8px_#D92F4E,0_0_15px_#D92F4E]"
                style={{ width: `${scrollProgress}%` }}
            />
        </header>
    )
}