"use client";

import { motion } from "framer-motion";

// variants
const stairAnimation = {
  initial: { top: "0%" },
  animate: { top: "100%" },
  exit: { top: ["100%", "0%"] }
}

// calculate the reverse index for staggred delay
const reverseIndex = (index: number) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
}

const Stairs = () => {

  return (
    <>
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            className="h-full w-full bg-white relative"
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit={"exit"}
            transition={{ duration: 0.2, ease: "easeInOut", delay: reverseIndex(index) * .1 }}
          />
        )
      })}
    </>
  )
}

export default Stairs;