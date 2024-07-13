"use client";

import {
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiReact,
  SiPhp,
  SiCodeigniter,
  SiLaravel,
  SiMysql,
  SiPostgresql,
  SiLinux,
  SiFigma
} from "react-icons/si";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { resumeTabs, aboutEjin, experience, education, skills, skillType } from "@/constants/common";
import { useMemo } from "react";


const Resume = () => {
  const experienceTab = useMemo(() => {
    const items = experience.items;
    return (
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
        {items && items.length > 0 && items.map((item, index) => {
          return (
            <li key={index} className="flex flex-col justify-center items-center lg:items-start bg-[#232329] h-[180px] rounded-xl px-10 py-6 gap-1">
              <span className="text-accent">{item.duration}</span>
              <h3 className="text-xl text-center lg:text-left max-w-[260px] min-h-[60px]">{item.position}</h3>
              <div className="flex items-center gap-3">
                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                <p className="text-white/60">{item.company}</p>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }, []);

  const educationTab = useMemo(() => {
    const items = education.items;
    return (
      <ul className="grid grid-cols-1 gap-[30px]">
        {items && items.length > 0 && items.map((item, index) => {
          return (
            <li key={index} className="flex flex-col justify-center items-center lg:items-start bg-[#232329] h-[180px] rounded-xl px-10 py-6 gap-1">
              <span className="text-accent">{item.duration}</span>
              <h3 className="text-xl text-center lg:text-left min-h-[60px]">{item.degree}</h3>
              <div className="flex items-center gap-3">
                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                <p className="text-white/60">{item.institution}</p>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }, []);

  const skillsTab = useMemo(() => {
    const items: skillType[] = skills.items;
    return (
      <ul className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-[30px]">
        {items && items.length > 0 && items.map((item, index) => {
          return (
            <li key={index}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="flex items-center justify-center w-full h-[150px] bg-[#232329] rounded-xl group">
                    <div className="text-6xl text-white/80 group-hover:text-accent/80 transition-all duration-300">
                      <item.icon />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="capitalize">
                      {item.name}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          )
        })}
      </ul>
    )
  }, []);

  const aboutTab = useMemo(() => {
    const items = aboutEjin.items;
    return (
      <ul className="grid gird-cols-1 xl:grid-cols-2 gap-y-6 gap-x-4 max-w-[680px] mx-auto xl:mx-0">
        {items && items.length > 0 && items.map((item, index) => {
          return (
            <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
              <span className="text-white/60">{item.label}</span>
              <span className="text-lg text-accent/80">{item.value}</span>
            </li>
          );
        })}
      </ul>
    );
  }, []);

  return (
    <section className="flex items-center justify-center min-h-[80vh] py-12 lg:py-0">
      <motion.div
        className="w-full"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.2, duration: 0.4, ease: "easeIn" }
        }}
      >
        <Tabs defaultValue="experience" className="flex flex-col lg:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto lg:mx-0 gap-6">
            {resumeTabs.map((tab) => {
              return <TabsTrigger key={`tab-${tab.value}`} value={`${tab.value}`}>{tab.name}</TabsTrigger>;
            })}
          </TabsList>
          <div className="w-full min-h-[70vh]">
            {resumeTabs.map((tab) => {
              let title = "";
              let desc = "";

              switch (tab.value) {
                case "experience":
                  title = experience.title;
                  desc = experience.desc;
                  break;
                case "education":
                  title = education.title;
                  desc = education.desc;
                  break;
                case "skills":
                  title = skills.title;
                  desc = skills.desc;
                  break;
                case "about-me":
                  title = aboutEjin.title;
                  desc = aboutEjin.desc;
                  break;
              }

              return (
                <TabsContent key={`content-${tab.value}`} className="w-full" value={`${tab.value}`}>
                  <div className="flex flex-col gap-[30px] text-center lg:text-left">
                    <h3 className="text-4xl font-bold">{title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
                      {desc}
                    </p>
                    <ScrollArea className="h-[400px]">
                      {tab.value === "experience" && experienceTab}
                      {tab.value === "education" && educationTab}
                      {tab.value === "skills" && skillsTab}
                      {tab.value === "about-me" && aboutTab}
                    </ScrollArea>
                  </div>
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </motion.div>
    </section>
  )
}

export default Resume;