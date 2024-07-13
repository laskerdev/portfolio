"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Link from "next/link";
import Image from "next/image";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { projects } from "@/constants/common";
import SliderAction from "@/components/SliderAction";



const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: any) => {
    const currentSlide = swiper.activeIndex;
    setProject(projects[currentSlide]);
  }

  return (
    <motion.section
      className="flex flex-col justify-center min-h-[80vh] py-12 xl:px-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1.4, duration: 0.4, ease: "easeIn" } }}
    >
      <div className="flex flex-col xl:flex-row xl:gap-[30px]">
        <div className="flex flex-col xl:justify-between w-full xl:w-[50%] xl:h-[460px] order-2 xl:order-none">
          <div className="flex flex-col gap-[30px] h-[50%]">
            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
              {project.num}
            </div>
            <h2 className="text-white text-[42px] font-bold leading-none group-hover:text-accent transition-all duration-500 capitalize">
              {project.category} project
            </h2>
            <p className="text-white/60">{project.desc}</p>
            <ul className="flex gap-4">
              {project.stack && project.stack.length > 0 && project.stack.map((item, index) => {
                return (
                  <li key={index} className="text-xl text-accent">
                    {item.name}{index !== project.stack.length - 1 && ","}
                  </li>
                );
              })}
            </ul>
            <div className="border border-white/20"></div>
            <div className="flex items-center gap-4">
              <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="flex justify-center items-center bg-white/5 w-[60px] h-[60px] rounded-full transition-all duration-500 hover:rotate-45 group">
                      <BsArrowUpRight className="text-3xl text-white group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live Preview</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
              <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="flex justify-center items-center bg-white/5 w-[60px] h-[60px] rounded-full transition-all duration-500 group">
                      <BsGithub className="text-3xl text-white group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github Repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-[50%]">
          <Swiper
            className="xl:h-[520px] mb-12 rounded-md"
            spaceBetween={30}
            slidesPerView={1}
            onSlideChange={handleSlideChange}
          >
            {projects.map((project, index) => {
              return (
                <SwiperSlide key={index} className="w-full">
                  <div className="flex relative justify-center items-center h-[460px] bg-accent/5">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-accent/5 z-10"></div>
                    {/* image slides */}
                    <div className="relative w-full h-full">
                      <Image src={project.image} fill className="object-cover rounded-md" alt={project.title} />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            <SliderAction />
          </Swiper>
        </div>
      </div>
    </motion.section>
  )
}

export default Work;