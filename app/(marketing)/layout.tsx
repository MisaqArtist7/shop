import { Metadata } from "next"

export const metadata:Metadata = {
    title : 'صفحه اصلی',
    description : 'فروشگاه تچهیزات امنیتی و شبکه'
}

export default function HomeLayout({children, }: Readonly<{ children : React.ReactNode }>) {
    return (
        <main>
            {children}
        </main>
    )
}
