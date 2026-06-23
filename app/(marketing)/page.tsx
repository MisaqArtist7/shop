
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

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* سمت راست: اطلاعات تماس */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900">با ما در ارتباط باشید</h2>
                        <p className="text-gray-600">برای مشاوره رایگان یا استعلام قیمت محصولات، از راه‌های زیر با ما در تماس باشید.</p>
                        
                        <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">📞</div>
                            <div>
                            <p className="text-sm text-gray-500">شماره تماس</p>
                            <p className="font-semibold">+98 21 0000 0000</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">📧</div>
                            <div>
                            <p className="text-sm text-gray-500">ایمیل پشتیبانی</p>
                            <p className="font-semibold">info@yourdomain.com</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* سمت چپ: فرم تماس (مینیمال) */}
                    <form className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
                        <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="نام شما" className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D92F4E] outline-none" />
                        <input type="tel" placeholder="شماره تماس" className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D92F4E] outline-none" />
                        </div>
                        <textarea placeholder="پیام خود را بنویسید..." className="w-full border-gray-300 mt-4 p-3 h-32 rounded-lg border focus:ring-2 focus:ring-[#D92F4E] outline-none"></textarea>
                        <button className="w-full mt-4 bg-[#D92F4E] text-white py-3 rounded-lg font-bold transition cursor-pointer">ارسال پیام</button>
                    </form>

                    </div>
                </div>
                </section>
        </>
    )
}