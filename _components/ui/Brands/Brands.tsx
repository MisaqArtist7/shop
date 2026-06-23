import Image from "next/image";

const brands = [
    { src: '/images/brands/dahua.webp', alt: 'Dahua' },
    { src: '/images/brands/briton.webp', alt: 'Briton' },
    { src: '/images/brands/Hikvision.webp', alt: 'Hikvision' },
    { src: '/images/brands/imou.webp', alt: 'Imou' },
    { src: '/images/brands/axis.webp', alt: 'Axis' },
    { src: '/images/brands/dahua.webp', alt: 'Dahua' },
];

export default function BrandsComponent() {
    return (
    <div className="py-12 ">
        <div className="container mx-auto px-4">
        <div className="text-center text-gray-600 font-bold mb-8 flex-row-center"> 
            <h2 className="px-4 py-2 rounded-xl text-white bg-[#D92F4E] transition-all font-bold text-xl">برند های همکار</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {brands.map((brand, index) => (
            <div 
                key={index} 
                className="group flex justify-center items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer"
            >
            <Image 
                src={brand.src} 
                alt={brand.alt} 
                width={120} 
                height={60} 
                className="max-h-12 w-auto object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" 
            />
            </div>
        ))}
        </div>
        </div>
    </div>
    );
}