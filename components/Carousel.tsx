'use client'

import { useState } from "react";
import { imagesForSlider, slides } from "@/constants";
import Image from "next/image";
import { Background } from "@/types";
import { motion } from "framer-motion"

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
    <div className="min-h-[70%] z-50 overflow-hidden">
      <div className="flex transition-transform ease-out duration-500 w-screen" style={{transform: `translateX(-${curr * 100}%)`}}>
        {backgrounds.map((background, index) => (
          <div key={index} className={`z-0 ${background.colors}`}>
            <div className="flex w-screen justify-between items-center p-10">
              <button className="z-50" onClick={prev}>
                <Image src='/leftarrow.png' alt="left arrow" width={60} height={60} className="ml-10 mt-5 z-50 object-contain"/>
              </button>
              <div className="flex items-center relative ">
                <h1 className="text-[100px] lg:text-[280px] text-center w-full  text-white font-bold z-20">{background.title}</h1>
                <motion.div
                  className="absolute items-center left-[10%] lg:left-[25%] z-30"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  transition={{ duration: 0.3 }}
                  variants={{
                      visible: { opacity: 1, scale: 1, x: 0  },
                      hidden: { opacity: 0, scale: 0, x: 0 }
                  }}
                >
                <Image src={background.product} alt="our product" height={320} width={550} className="object-contain " />
                </motion.div>
              </div>
              <motion.div
                    className="absolute z-0 flex w-full"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.3 }}
                    variants={{
                      visible: { opacity: 1, scale: 1, x: 0  },
                      hidden: { opacity: 0, scale: 0, x: 0 }
                    }}
                  >
                    <img src={background.backImage} alt="bgImage" className="w-full object-contain ml-[-30px]"/>
                  </motion.div>
              <button className="z-50" onClick={next}>
                <Image src='/rightarrow.png' alt="left arrow" width={60} height={60} className="mr-10 mt-10 z-50 object-contain"/>
              </button>
            </div>
            <div className="flex items-center justify-center w-full ">
              <motion.button
                className={`z-50 w-[250px] xl:mt-[35px]  ${background.colorForBt} h-[50px] rounded-2xl transition mb-[30px]`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9}}
              >
              <p className="text-white text-[22px] font-medium">{background.butOn}</p>
            </motion.button>
            </div>
          </div>
        ))}
      </div>
   </div>
  );
}

export default Carousel;