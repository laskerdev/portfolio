import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const HomePage = () => {
  return (
    <>
      <section className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-24">
        <div className="text-center lg:text-left order-2 lg:order-none">
          <span className="text-xl">Software Developer</span>
          <h1 className="h1 mb-6">
            Hi, I&apos;m<br /><span className="text-accent cursor-pointer hover:border-b-2 hover:border-accent">Ejin Nguyen</span>
          </h1>
          <p className="max-w-[498px] mb-9 text-white/80">
            I excel at crafting elegant digital experiences and I am
            proficient in various programming language and technologies.
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <Button variant={`outline`} size={`lg`} className="flex items-center gap-2 uppercase">
              <span>Download CV</span>
              <FiDownload className="text-xl" />
            </Button>
            <div className="mb-8 lg:mb-0">
              <Socials />
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-none mb-8 lg:mb-0">
          <Photo />
        </div>
      </section>
      <Stats />
    </>
  )
}

export default HomePage