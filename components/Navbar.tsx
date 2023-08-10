"use client"

import Image from "next/image"

const Navbar = () => {

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

                <button className="md:hidden block">
                        <Image src='/hambicon.png' alt='hamburger' width={80} height={80} />
                        <div className="absolute top-0 right-0 h-screen w-8/12 bg-white border">
                            <ul className="flex flex-col items-center w-full text-base cursor-pointer pt-10">
                                <li></li>
                                <li></li>
                            </ul>
                            <button></button>
                        </div>
                </button>
              </nav>
        </header>
      </>
  )
}

export default Navbar