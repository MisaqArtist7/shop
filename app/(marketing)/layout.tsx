import { Metadata } from "next"
import HeaderComponent from "@/_components/shared/Header/Header"
import FooterComponent from "@/_components/shared/Footer/Footer"

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
            <HeaderComponent />
            <main>{children}</main>
            <FooterComponent />
        </>
    )
}
