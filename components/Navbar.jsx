import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='absolute w-full top-0 left-0'>
        <div className="header-container flex gap-4 flex-col md:flex-row items-center justify-between py-10 px-8 md:px-16">
            <div className="nav-contact text-text-light">
                <Link href="mailto:contact@biko.com">contact@biko.com</Link>
            </div>

            <div className="main-logo">
                <Link href={"/"} className="text-5xl font-bold text-white">Biko.</Link>
            </div>

            <div className="nav-menu flex gap-5 items-center text-text-light">
                <Link href={"/"}>About Us</Link>
                <Link href={"/"}>Benefits</Link>
                <Link href={"/"}>Contact</Link>
            </div>
        </div>
    </header>
  )
}

export default Navbar