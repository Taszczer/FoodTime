"use client"

import Image from "next/image"
import { useState } from "react"

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
      <>
        <header className="w-full absolute z-10">
              <nav className="max-w-[1640px] sm:px-16 px-6 py-4 h-[100px] flex justify-between items-center bg-[#EAE7DC]">
                  <Image src="/forLogo.png" alt="logo" width={120} height={120} className="object-contain" />
                  
                <div className="hidden md:flex items-center gap-12 cursor-pointer">
                    <ul className="flex gap-7 text-[18px] font-bold text-orange-400">
                        <li className="link">Contact</li>
                        <li className="link">About</li>
                    </ul>
                    <button className="w-[150px] bg-orange-400 h-[50px] rounded-2xl hover:bg-orange-600 transition">
                            <p className="text-white font-bold text-[18px]">Time to order</p>
                    </button>
                </div>

                <button className="md:hidden block" onClick={toggleMenu}>
                    {isOpen ? <Image src='/cancel.png' alt="close button" width={60} height={60} className="mr-3"/> : <Image src='/hambicon.png' alt='hamburger' width={80} height={80} />}   
                </button>
                     
              </nav>
        </header>
      </>
  )
}

export default Navbar