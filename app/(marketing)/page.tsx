
import CarouselComponent from '@/_components/ui/Carousel/Carousel';
import AmazingOfferComponent from '@/_components/ui/AmazingOffer/AmazingOffer';
import ProductsComponent from '@/_components/ui/Products/Products';
import BrandsComponent from '@/_components/ui/Brands/Brands';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
    return (
        <>
            <section className='carousel_section'>
                <CarouselComponent />
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