'use client'

import { useState } from "react";
import { imagesForSlider } from "@/constants";
import Image from "next/image";

const Carousel = () => {
  const bootstrapItems = imagesForSlider[0].items.bootstrap; 
  const [index, setIndex] = useState(0);
  
  const handleNext = () => {
    const nextIndex = index + 1 < bootstrapItems.length ? index + 1 : 0;
    setIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = index - 1 >= 0 ? index - 1 : bootstrapItems.length - 1;
    setIndex(prevIndex);
  };

  const currentBackgroundColor = bootstrapItems[index].colors
  const currentBackgroundColorBt = bootstrapItems[index].colorForBt
  const currentProduct = bootstrapItems[index].product

  return (
    <div className="flex flex-col items-center">
      <div className="w-full">
        <div className={` items-center ${currentBackgroundColor}`}>
          <div className="h-[570px]">
            <div className="flex ml-[9%] w-[80%] h-[470px] items-center justify-between">
                <button className="" onClick={handlePrev}>
                <Image src='/leftarrow.png' alt="left arrow" width={60} height={60} className="mt-10 z-50 object-contain"/>
              </button>
              <div className="flex items-center relative">
                <h3 className="text-white text-[100px] md:text-[260px] font-semibold ">{bootstrapItems[index].title}</h3>
                <Image src={currentProduct} alt="our product" height={400} width={550} className=" absolute items-center left-[10%] md:left-[20%] object-contain "/>
              </div>
              <button className="" onClick={handleNext}>
                <Image src='/rightarrow.png' alt="left arrow" width={60} height={60} className="mt-10 z-50"/>
              </button>
            </div>
            <div className="flex items-center justify-center w-full ">
            <button className={`w-[250px] mt-[-50px] xl:mt-0 ${currentBackgroundColorBt} h-[50px] rounded-2xl transition `}>
              <p className="text-white text-[22px] font-medium">{bootstrapItems[index].butOn}</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
//bootstrapItems[index].body

