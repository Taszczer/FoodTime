'use client'

import { useState } from "react";
import { imagesForSlider, slides } from "@/constants";
import Image from "next/image";
import { Background } from "@/types";

interface CarouselProps {
  backgrounds: Background[];
}

const Carousel = ({ backgrounds }: CarouselProps) => {

  const [curr, setCurr] = useState(0)

  const prev = () =>
    setCurr((curr) => (curr === 0 ? imagesForSlider.length - 1 : curr - 1))
  
  const next = () =>
    setCurr((curr) => (curr === imagesForSlider.length - 1 ? 0 : curr + 1))

  return (
    <div className="min-h-[70%] overflow-hidden">
      <div className="flex transition-transform ease-out duration-500 w-screen" style={{transform: `translateX(-${curr * 100}%)`}}>
        {backgrounds.map((background, index) => (
          <div key={index} className={`${background.colors}`}>
            <div className="flex w-screen justify-between items-center p-10">
              <button className="" onClick={prev}>
                <Image src='/leftarrow.png' alt="left arrow" width={60} height={60} className="ml-10 mt-5 z-50 object-contain"/>
              </button>

              <div className="flex items-center relative">
                <h1 className="text-[100px] lg:text-[250px] text-white font-bold">{background.title}</h1>
                <Image src={background.product} alt="our product" height={320} width={550} className="absolute items-center left-[10%] lg:left-[20%] object-contain "/>
              </div>
              
              <button className="" onClick={next}>
                <Image src='/rightarrow.png' alt="left arrow" width={60} height={60} className="mr-10 mt-10 z-50"/>
              </button>
            </div>
            <div className="flex items-center justify-center w-full ">
            <button className={`w-[250px] mt-[30px] xl:mt-[50px]  ${background.colorForBt} h-[50px] rounded-2xl transition mb-10`}>
              <p className="text-white text-[22px] font-medium">{background.butOn}</p>
              </button>
            </div>
          </div>
        ))}
      </div>
   </div>
  );
}


export default Carousel;