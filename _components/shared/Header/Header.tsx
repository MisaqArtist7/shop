    import Image from "next/image"
    import Link from "next/link"
    export default function HeaderComponent() {
    return (
        <header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
            {/* top bar */}
            <Image src='/images/top.webp' width={1800} height={1800} alt="" className="w-full h-12 object-cover object-center"/>
        
            <div className="mx-auto px-11">
                {/* header wrapper */}
                <div className="flex items-center justify-between py-4">
                {/* Logo & Search */}
                <div className="flex items-center gap-6 grow">
                    <Image src='/images/logo.svg' width={120} height={40} alt="logo" className="h-10 w-auto"/>
                    <form action="" className="grow max-w-sm">
                    <input 
                        type="search" 
                        placeholder="جستوجو در محصولات..." 
                        className="w-full bg-gray-100 border border-gray-300 focus:border-none rounded-xl px-4 py-2 outline-none hover:ring-2 hover:ring-red-500 transition-all text-sm"
                    />
                    </form>
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3">
                    <Link href='' className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl text-sm font-medium hover:bg-gray-50 transition-all">
                    ورود | ثبت نام
                    <svg className="w-5 h-5"><use href="#addUserIcon"></use></svg>
                    </Link>
                    
                    <div className="w-px h-6 bg-gray-200 mx-2"></div>
                    
                    <Link href='' className="p-2 hover:bg-gray-100 rounded-full transition-all">
                    <svg className="w-6 h-6"><use href="#shopping-cart"></use></svg>
                    </Link>
                </div>
                </div>

                {/* navigation section */}
                <nav className="pb-2">
                <ul className="flex items-center gap-4 text-sm text-gray-600">
                    {[
                    { label: 'دسته بندی ها', icon: '#bars-3-bottom-right' },
                    { label: 'همه محصولات', icon: '#building-storefront' },
                    { label: 'شگفت انگیز ها', icon: '#percent-badge' },
                    { label: 'پر فروش ترین ها', icon: '#fire' },
                    { label: 'درباره ما', icon: '#light-bulb'},
                    { label: 'تماس با ما', icon: '#phone'}
                    ].map((item, index) => (
                    <li key={index}>
                        <Link href='' className="flex items-center gap-2 py-2 hover:text-black border-b-2 border-transparent hover:border-red-500 transition-all">
                        <svg className="w-5 h-5"><use href={item.icon}></use></svg>
                        {item.label}
                        </Link>
                    </li>
                    ))}
                </ul>
                </nav>
            </div>
        </header>
    )
}
