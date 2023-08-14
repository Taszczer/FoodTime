import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='flex flex-col text-orange-300 border-t border-orange-400 mt-5'>
        <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
            <div className='flex flex-col justify-start items-start gap-6'>
                  <Image src='/forLogo.png' alt='logo' width={80} height={80} />      
            </div>  
        </div>
    </footer>
  )
}

export default Footer