import { socialLinks } from "@/constants/Navigations";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";

interface SocialProps {
  containerStyles?: any,
  iconStyles?: any
}

const Socials = (props: SocialProps) => {
  const { containerStyles, iconStyles } = props;

  return (
    <div className={`flex gap-4 ${containerStyles}`}>
      {socialLinks.map((social, index) => {
        let socialIcon = <FaGithub />;
        switch (social.name) {
          case "linkedin":
            socialIcon = <FaLinkedin />;
            break;
          case "twitter":
            socialIcon = <FaTwitter />;
            break;
          case "youtube":
            socialIcon = <FaYoutube />;
            break;
          case "facebook":
            socialIcon = <FaFacebook />;
            break;
          default:
            socialIcon = <FaGithub />;
        }

        return (
          <>
            {social.isUse && (
              <Link key={social.name} href={social.path} className={`flex justify-center items-center w-8 h-8 text-accent text-base hover:text-primary border border-accent rounded-md hover:bg-accent-hover hover:transition-all duration-500 ${iconStyles}`} target="_blank">
                {socialIcon}
              </Link>
            )}
          </>
        )
      })}
    </div>
  )
}

export default Socials