
import AmazingOfferComponent from '@/_components/ui/AmazingOffer/AmazingOffer';

import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
    return (
        <>
            <section className='carousel_section container'>
                
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

            <section className='brands_section'>
                <div className='container grid grid-cols-6 bg-white'>
                    <div>
                        <Image src='/images/brands/dahua.jpg' width={155} height={155} alt='' className='w-full h-full object-cover filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer' />
                    </div>  
                    <div>
                        <Image src='/images/brands/briton.png' width={155} height={155} alt='' className='w-full h-full object-cover filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer' />
                    </div>
                    <div>
                        <Image src='/images/brands/dahua.jpg' width={155} height={155} alt='' className='w-full h-full object-cover filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer' />
                    </div> 
                    <div>
                        <Image src='/images/brands/briton.png' width={155} height={155} alt='' className='w-full h-full object-cover filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer' />
                    </div>
                    <div>
                        <Image src='/images/brands/dahua.jpg' width={155} height={155} alt='' className='w-full h-full object-cover filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer' />
                    </div> 
                    <div>
                        <Image src='/images/brands/briton.png' width={155} height={155} alt='' className='w-full h-full object-cover filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer' />
                    </div>
                </div>
            </section>
        </>
    )
}