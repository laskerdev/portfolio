import { socialLinks } from "@/constants/navigations";
import Link from "next/link";

interface SocialProps {
  containerStyles?: any,
  iconStyles?: any
}

const Socials = (props: SocialProps) => {
  const { containerStyles, iconStyles } = props;

  return (
    <div className={`flex gap-4 ${containerStyles}`}>
      {socialLinks.map((social, index) => {
        return social.isUse && (
          <Link key={social.name} href={social.path} className={`flex justify-center items-center w-8 h-8 text-accent text-base hover:text-primary border border-accent rounded-lg hover:bg-accent-hover hover:transition-all duration-500 ${iconStyles}`} target="_blank">
            <social.icon />
          </Link>
        )
      })}
    </div>
  )
}

export default Socials