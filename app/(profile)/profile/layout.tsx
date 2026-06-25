import HeaderComponent from "@/_components/shared/Header/Header"
import React from "react"
export default function ProfileLayout({ children, } : {children : Readonly<React.ReactNode>}) {
    return (
        <>  
            <HeaderComponent />
            <main>{children}</main>
        </>
    )
}
