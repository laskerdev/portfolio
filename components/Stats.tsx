"use client";

import CountUp from "react-countup";
import { stats } from "@/constants/Stats";

function Stats() {
  return (
    <section className="pt-4 pb-12 lg:pt-0 lg:pb-0">
      <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto lg:max-w-none">
        {stats.map((stat, index) => {
          return (
            <div
              key={index}
              className="flex-1 flex gap-4 items-center justify-center lg:justify-start"
            >
              <CountUp
                className="text-4xl lg:text-6xl font-extrabold"
                end={stat.num}
                duration={4}
                delay={1}
              />
              <p className={`${stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>
                {stat.text}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Stats