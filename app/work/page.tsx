"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Link from "next/link";
import Image from "next/image";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Project 01",
    desc: "",
    stack: [
      {name: "JavaScript"},
      {name: "HTML 5"},
      {name: "CSS 3"}
    ],
    image: ""
  }
];

const Work = () => {
  return (
    <main>Work Page</main>
  )
}

export default Work;