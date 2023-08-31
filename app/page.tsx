import { Footer, Hero, Navbar, Carousel, SearchBar } from '@/components'
import Image from 'next/image'


export default function Home() {
  return (
    <main className="overflow-hidden"> 
      <Hero />
      <div className='mt-12 px-6 sm:px-16 py-4 max-w-[1440px] mx-auto' id='discover'>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col items-start justify-start gap-y-2.5 text-black-100'>
            <h1 className='text-orange-400 text-4xl font-extrabold'>Food catalog</h1>
            <p className='font-bold text-orange-300 text-2xl'>Order and enjoy</p>
            <SearchBar />
          </div>
        </div>
      </div>
      ufakdfjk
    </main>
  )
}
