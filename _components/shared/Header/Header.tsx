import Image from "next/image"
export default function Header() {
return (
    <div>
        <header>
            <Image src='/images/top.webp' width={1800} height={1800} alt="" className="w-full h-15 object-cover object-center"/>
            <div className="container flex items-center justify-between py-3">
                <div>
                    <Image src='/images/logo.svg' width={222} height={222} alt="" className="h-15"/>
                </div>
                <div>
                    2
                </div>
            </div>
        </header>
    </div>
    )
}
