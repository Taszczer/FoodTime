import React from "react";
import Carousel from "./Carousel"; // Update the import path
import { imagesForSlider } from "@/constants";

const Hero = () => {
  return (
    <div className="">
      <Carousel backgrounds={imagesForSlider} />
    </div>
  );
};

export default Hero;