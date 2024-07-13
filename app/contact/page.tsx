"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { infoEjin } from "@/constants/common";


const Contact = () => {
  return (
    <motion.section
      className="py-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1.4, duration: 0.4, ease: "easeIn" } }}
    >
      <div className="flex flex-col xl:flex-row gap-[30px]">
        <div className="xl:w-[55%] order-2 xl:order-none">
          <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
            <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
            <p className="text-white/60">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, quibusdam omnis similique quis delectus cupiditate enim, doloribus laudantium at quae perspiciatis accusantium quisquam aut expedita suscipit recusandae ipsum, temporibus accusamus.
            </p>
            <div className="grid gird-cols-1 md:grid-cols-2 gap-6">
              <Input type="firstname" placeholder="First name..." />
              <Input type="lastname" placeholder="Last name..." />
              <Input type="email" placeholder="Email name..." />
              <Input type="phone" placeholder="Phone number..." />
            </div>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select a service</SelectLabel>
                  <SelectItem value="est">Web Development</SelectItem>
                  <SelectItem value="cst">UI/UX Design</SelectItem>
                  <SelectItem value="mst">Logo Design</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Textarea className="h-[200px]" placeholder="Type your message here." />
            <Button className="max-w-40">Send Message</Button>
          </form>
        </div>
        <div className=" flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
          <ul className="flex flex-col gap-10">
            {infoEjin.map((info, index) => {
              return (
                <li key={index} className="flex items-center gap-6">
                  <div className="flex items-center justify-center w-[56px] h-[56px] xl:w-[66px] xl:h-[66px] bg-[#27272c] text-accent rounded-md">
                    <div className="text-[28px]">
                      <info.icon />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{info.label}</p>
                    <h3 className="text-md">{info.value}</h3>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact;