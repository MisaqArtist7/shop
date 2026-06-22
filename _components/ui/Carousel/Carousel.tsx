// components/ui/slider/slider.tsx
'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import Image from 'next/image'
import 'swiper/css/bundle'
import 'swiper/css'
import 'swiper/css/pagination'

export default function CarouselComponent() {
    return (
    <section className="carousel_section">
        <Swiper modules={[Pagination]} pagination={{ clickable: true }} >
            <SwiperSlide>
                <Image src='/images/sliders/1.webp' width={2222} height={2222} alt='pic1' className='object-cover w-full h-full' />
            </SwiperSlide>

            <SwiperSlide>
                <Image src='/images/sliders/2.webp' width={2222} height={2222} alt='pic2' className='object-cover w-full h-full' />
            </SwiperSlide>

            <SwiperSlide>
                <Image src='/images/sliders/3.webp' width={2222} height={2222} alt='pic3' className='object-cover w-full h-full' />
            </SwiperSlide>

            <SwiperSlide>
                <Image src='/images/sliders/4.webp' width={2222} height={2222} alt='pic4' className='object-cover w-full h-full' />
            </SwiperSlide>
        </Swiper>
    </section>
)
}