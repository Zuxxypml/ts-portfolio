"use client";
import React from "react";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

type WorkSliderButtonsProps = {
  containerStyles?: string;
  buttonStyles?: string;
  iconsStyles?: string;
};

// This component provides navigation buttons for the Swiper slider
// It uses the useSwiper hook to access the swiper instance and control navigation
export default function WorkSliderButtons({
  containerStyles,
  buttonStyles,
  iconsStyles,
}: WorkSliderButtonsProps) {
  const swiper = useSwiper();

  return (
    <div className={`${containerStyles}`}>
      <button className={`${buttonStyles}`} 
          onClick={() => swiper.slidePrev()}
      >
        <PiCaretLeftBold
          className={`${iconsStyles}`}
        />
      </button>
      <button className={`${buttonStyles}`}
          onClick={() => swiper.slideNext()}
      >
        <PiCaretRightBold
          className={`${iconsStyles}`}
        />
      </button>
    </div>
  );
}
