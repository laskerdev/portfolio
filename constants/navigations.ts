import {
  SiGithub,
  SiLinkedin,
  SiX,
  SiYoutube,
  SiDevdotto,
  SiFacebook,
  SiFigma,
  SiDailydotdev
} from "react-icons/si";

export const menuLinks = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" }
];

export const socialLinks = [
  {
    name: "github",
    path: "https://github.com/laskerdev",
    icon: SiGithub,
    isUse: true
  },
  {
    name: "linkedin",
    path: "https://linkedin.com/ejindev",
    icon: SiLinkedin,
    isUse: false
  },
  {
    name: "daily.dev",
    path: "https://app.daily.dev/lasker",
    icon: SiDailydotdev,
    isUse: true
  },
  {
    name: "dev.to",
    path: "https://dev.to/lasker",
    icon: SiDevdotto,
    isUse: true
  },
  {
    name: "figma",
    path: "https://figma.com/@ejindev",
    icon: SiFigma,
    isUse: true
  },
  {
    name: "x",
    path: "https://x.com/ejindev",
    icon: SiX,
    isUse: true
  },
  {
    name: "youtube",
    path: "https://youtube.com/@ejindev",
    icon: SiYoutube,
    isUse: false
  },
  {
    name: "facebook",
    path: "https://facebook.com/laskerdev",
    icon: SiFacebook,
    isUse: true
  }
];