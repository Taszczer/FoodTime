"use client"

import { useState } from "react";
import { imagesForSlider } from "@/constants";

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

  return (
    <div className="flex flex-col items-center">
      <div className="w-full justify-between">
        <div className={`w-full h-[470px] ${bootstrapItems[index].colors}`}>
          <div className="flex items-center w-[95%] h-[470px] justify-between">
            <button className="" onClick={handlePrev}>
             Previous
            </button>
            <button className="btn btn-primary" onClick={handleNext}>
            Next
            </button>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <h3 className="text-xl font-semibold">{bootstrapItems[index].title}</h3>
        <p>{bootstrapItems[index].body}</p>
      </div>
      <div className="flex mt-4">
      </div>
    </div>
  );
}

export default Carousel