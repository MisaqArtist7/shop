import { Metadata } from "next"
import Header from "@/_components/shared/Header/Header"
import Footer from "@/_components/shared/Footer/Footer"

export const metadata: Metadata = {
    title: {
        default: "فروشگاه تجهیزات امنیتی",
        template: "%s | فروشگاه"
    },
    description: "فروشگاه تجهیزات امنیتی و شبکه",
}

export default function HomeLayout({children, }: Readonly<{ children : React.ReactNode }>) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}
