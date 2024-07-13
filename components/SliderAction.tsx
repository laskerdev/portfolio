"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { IconType } from "react-icons";

interface SliderProps {
  containerStyles?: any,
  btnStyles?: any,
  iconStyles?: any
}

type button = {
  name: string,
  icon: IconType
}

const SliderAction = (props: SliderProps) => {
  const {
    containerStyles,
    btnStyles,
    iconStyles
  } = props;
  const swiper = useSwiper();

  const buttons: button[] = [
    { name: "prev", icon: PiCaretLeftBold },
    { name: "next", icon: PiCaretRightBold }
  ];

  return (
    <div className={`flex absolute justify-between xl:justify-none cursor-pointer gap-2 w-full xl:w-max right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 ${containerStyles}`}>
      {buttons.map((button) => {
        return (
          <div key={button.name}
            className={`flex justify-center items-center text-primary text-[22px] w-[44px] h-[44px] rounded-md bg-accent/80 xl:bg-accent hover:bg-accent-hover/80 xl:hover:bg-accent-hover transition-all ${btnStyles}`}
            onClick={() => {
              button.name === "prev" && swiper.slidePrev();
              button.name === "next" && swiper.slideNext();
            }}
          >
            <button.icon className={iconStyles} />
          </div>
        );
      })}
    </div>
  )
}

export default SliderAction