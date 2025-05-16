'use client'
import React from 'react'
import NavbarDemo from './navbardemo'
import { usePathname } from 'next/navigation'
import ShopNav from './ShopNav'

function NavWrapper() {
    const pathname = usePathname()
    const showShopNavbar = pathname.startsWith('/Shop');
    return (
        <div>
            <NavbarDemo />
            {showShopNavbar && <ShopNav />}
        </div>
    )
}

export default NavWrapper
