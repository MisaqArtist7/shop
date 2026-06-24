'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductsComponent() {
    return (
        <div>
            <div className="flex items-center justify-between py-5">
                <h2 className='px-4 py-2 rounded-xl text-white bg-[#D92F4E] transition-all font-bold text-sm'>محصولات جدید</h2>
                <Link href='/offer' className="flex items-center px-4 py-2 rounded-xl bg-white text-[#D92F4E] hover:text-white hover:bg-[#D92F4E] transition-all font-bold text-sm">
                    مشاهده همه
                    <svg className="w-4 h-4">
                        <use href="#chevron-left"></use>
                    </svg>
                </Link>
            </div>

            <div className="">
                <Swiper 
                    autoplay = {{
                        delay: 2000,
                        disableOnInteraction: false,
                    }} 
                    modules={[Navigation, Autoplay]}
                    spaceBetween={4}
                    slidesPerView={2}
                    breakpoints={{
                        640: { slidesPerView: 3 },
                        1024: { slidesPerView: 5 },
                        1280: { slidesPerView: 6 },
                    }}
                    >
        
                    {[
                        {Title: 'گوشی مدل آیفون ۱۷ پرو مکس', Img: '/images/products/1.webp', price: '۳۶۸،۱۲۳،۴۵۶'},
                        {Title: 'گوشی مدل آیفون ۱۷ پرو مکس', Img: '/images/products/1.webp', price: '۳۶۸،۱۲۳،۴۵۶'},
                        {Title: 'گوشی مدل آیفون ۱۷ پرو مکس', Img: '/images/products/1.webp', price: '۳۶۸،۱۲۳،۴۵۶'},
                        {Title: 'گوشی مدل آیفون ۱۷ پرو مکس', Img: '/images/products/1.webp', price: '۳۶۸،۱۲۳،۴۵۶'},
                        {Title: 'گوشی مدل آیفون ۱۷ پرو مکس', Img: '/images/products/1.webp', price: '۳۶۸،۱۲۳،۴۵۶'},
                        {Title: 'گوشی مدل آیفون ۱۷ پرو مکس', Img: '/images/products/1.webp', price: '۳۶۸،۱۲۳،۴۵۶'},
                        {Title: 'گوشی مدل آیفون ۱۷ پرو مکس', Img: '/images/products/1.webp', price: '۳۶۸،۱۲۳،۴۵۶'},
                    ].map((product, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white rounded-xs p-4 flex flex-col items-center gap-3 h-full shadow">
                            <Image src={product.Img} width={222} height={222} alt="product" className="w-55 h-55 object-contain" />
                            <h2 className="text-gray-800 text-sm font-medium leading-6 line-clamp-2">
                                {product.Title}
                            </h2>
                            <div className="w-full mt-auto">
                                <div className='flex items-center justify-end gap-1 w-full text-gray-900 font-bold text-sm'>
                                    <span>{product.price}</span>
                                    <svg className='w-4 h-4'><use href='#toman'></use></svg>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
