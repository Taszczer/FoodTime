'use client'

import { useState } from "react";
import { imagesForSlider } from "@/constants";
import BsArrowRightCircle from "react-icons/tb"

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

  const currentBackgroundColor = bootstrapItems[index].colors;

  return (
    <div className="flex flex-col items-center">
      <div className="w-full justify-between">
        <div className={`w-full h-[570px] items-center ${currentBackgroundColor}`}>
          <div className="flex ml-[9%] w-[80%] h-[570px] items-center justify-between">
            <button className="" onClick={handlePrev}>
             Previous
            </button>
            <h3 className="text-white text-[100px] font-semibold">{bootstrapItems[index].title}</h3>
            <button className="" onClick={handleNext}>
            Next
            </button>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>{bootstrapItems[index].body}</p>
      </div>
      <div className="flex mt-4">
      </div>
    </div>
  );
}

export default Carousel;
//bootstrapItems[index].body

