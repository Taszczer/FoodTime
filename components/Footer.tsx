import React from 'react'
import Image from 'next/image'
import { footerLinks } from '@/constants'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='flex flex-col text-orange-300 border-t border-[#EAE7DC] mt-5'>
        <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
            <div className='flex justify-start'>
              <Image src='/forLogo.png' alt='logo' width={100} height={100} className=' object-contain'/>      
              <p className='flex justify-center items-center text-[25px] font-bold'>FoodTime 2023</p>
        </div> 
        <div className='flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20'>
          {footerLinks.map((link) => (
            <div key={link.title} className='flex flex-col gap-6 text-base min-w-[170px]'>
              <h3 className='font-bold text-[20px]'>{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className='text-gray-500 hover:text-gray-900'
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
        <p>FoodTime@2023</p>
        <div className='flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10'>
          <Link href='/' className='text-gray-500 hover:text-gray-900'>
            Privacy Policy
          </Link>

          <Link href='/' className='text-gray-500 hover:text-gray-900'>
            Terms of use
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer