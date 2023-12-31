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
        <header className="w-full">
              <nav className="max-w-[1640px] h-[120px] overflow-y-hidden z-10 sm:px-16 px-6 flex justify-between items-center bg-[#EAE7DC]">
                  <Image src="/forLogo.png" alt="logo" width={120} height={120} className="object-contain" />
                  
                <div className="hidden md:flex items-center gap-12 cursor-pointer">
                    <ul className="flex gap-7 text-[18px] font-bold text-orange-400">
                        <li className="link">Contact</li>
                        <li className="link">About</li>
                    </ul>
                    <button className="w-[250px] bg-orange-400 h-[50px] rounded-2xl hover:bg-orange-600 transition">
                            <p className="text-white font-bold text-[18px]">Find your dream food</p>
                    </button>
                </div>

                <button className="md:hidden block transition-all duration-300" onClick={toggleMenu}>
                        {isOpen ?
                            <Image src='/cancel.png' alt="close button" width={50} height={50} className="mr-4 spintime" />
                            :
                            <Image src='/hambicon.png' alt='hamburger' width={80} height={80} />}   
                </button>
                </nav>
                {isOpen ? (
                    <div className="md:hidden flex flex-col bg-[#e7e1cd] w-full z-100 justify-center items-center">
                        <ul className="z-100 w-full flex flex-col justify-center items-center text-[24px] mt-6 font-bold text-orange-400 gap-2">
                        <li className="z-100 link">Contact</li>
                        <li className="z-100 link">About</li>
                        </ul>
                        <button className="w-[150px] bg-orange-400 h-[50px] rounded-2xl hover:bg-orange-600 transition mb-10 mt-6">
                        <p className="text-white font-bold text-[18px]">Time to order</p>
                        </button>
                    </div>
                    ) :
                null}
        </header>
      </>
  )
}

export default Navbar