import Image from "next/image"

export default function FooterComponent() {
    return (
        <footer className="bg-white border-t border-gray-100 mt-12">
            <div className="container mx-auto px-6 py-12">
                
                {/* بخش بالایی: لوگو و تماس */}
                <div className="flex flex-wrap items-center justify-between gap-8 pb-12 border-b border-gray-100">
                    <Image src='/images/logo.svg' width={140} height={45} alt="logo" className="h-8 w-auto"/>
                    
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 font-medium">
                        <span className="flex gap-2">تلفن پشتیبانی: <span className="text-gray-900">۶۱۹۳۰۰۰۰ - ۰۲۱</span></span>
                        <span className="hidden md:block w-px h-6 bg-gray-200"></span>
                        <span>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</span>
                    </div>

                    {/* <button 
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex items-center gap-2 text-gray-500 border border-gray-200 px-4 py-2.5 rounded-xl hover:bg-gray-50 transition-colors text-sm"
                    >
                        بازگشت به بالا
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11l7-7 7 7M5 19l7-7 7 7"/></svg>
                    </button> */}
                </div>

                {/* بخش ویژگی‌ها (بسیار مدرن‌تر) */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-12">
                    {[
                        { src: 'express-delivery', label: 'تحویل اکسپرس' },
                        { src: 'cash-on-delivery', label: 'پرداخت در محل' },
                        { src: 'support', label: 'پشتیبانی ۲۴/۷' },
                        { src: 'days-return', label: '۷ روز ضمانت بازگشت' },
                        { src: 'original-products', label: 'ضمانت اصل بودن' },
                    ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center gap-4 group cursor-pointer">
                            <div className="w-16 h-16 bg-gray-50 rounded-2xl p-3 group-hover:bg-[#D92F4E]/10 transition-colors">
                                <Image src={`/images/footer/${item.src}.svg`} width={60} height={60} alt={item.label} className="w-full h-full"/>
                            </div>
                            <span className="text-xs text-gray-600 font-medium text-center">{item.label}</span>
                        </div>
                    ))}
                </div>

                {/* بخش پایین: لینک‌ها، اینماد و خبرنامه */}
                <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-gray-100">
                    
                    {/* ستون ۱: دسترسی سریع */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-4">دسترسی سریع</h4>
                        <div className="flex flex-col gap-2 text-sm text-gray-500">
                            {[
                                {title: 'همه محصولات', href: './'},
                                {title: 'شگفت انگیز ها', href: './'},
                                {title: 'پرفروش ترین ها', href: './'},
                                {title: 'درباره ما', href: './'},
                                {title: 'تماس با ما', href: './'},
                            ].map((item, index) => (
                                <a key={index} href={item.href} className="hover:text-[#D92F4E] transition">{item.title}</a>
                            ))}
                        </div>
                    </div>

                    {/* ستون ۲: اینماد */}
                    <div className="flex flex-col items-center">
                        <h4 className="font-bold text-gray-900 mb-4">مجوزها</h4>
                        <div className="w-24 h-24 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center">
                            {/* اینجا ایمیج اینماد رو بذار */}
                            <span className="text-[10px] text-gray-400">Enamad</span>
                        </div>
                    </div>

                    {/* ستون ۳: خبرنامه */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-4">عضویت در خبرنامه</h4>
                        <div className="flex gap-2">
                            <input 
                                type="email" 
                                placeholder="ایمیل شما..." 
                                className="w-full bg-gray-50 border-2 border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:border-[#D92F4E]"
                            />
                            <button className="text-white px-4 py-2 rounded-lg text-sm bg-[#D92F4E] transition cursor-pointer">ارسال</button>
                        </div>
                    </div>
                </div>

                {/* نوار کپی‌رایت */}
                <div className="text-center pt-8 text-xs text-gray-400">
                    <p>© ۱۴۰۳. تمامی حقوق برای البرز سی‌ان‌سی محفوظ است. طراحی شده با عشق.</p>
                </div>
            </div>
        </footer>
    )
}