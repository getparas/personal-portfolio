import { LogoFive, LogoOne, LogoSix, LogoThree, LogoTwo } from "@/assets";
import { Service } from "@/components/common/types/Service.types";

export const NAVIGATION_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#aboutMe" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
  { label: "Contact Me", href: "#contactMe" },
];

export const HERO = {
  title: "Welcome to my portfolio",
  name: "Robert Junior",
  greet: "Hi I'm",
  passion: "Product Designer",
  description:
    "Collaborating with highly skilled individuals, our agency delivers top-quality services.",
};

export const software = [
  { src: LogoOne, alt: "jQuery" },
  { src: LogoTwo, alt: "WordPress" },
  { src: LogoThree, alt: "LESS" },
  { src: LogoFive, alt: "Sass" },
  { src: LogoSix, alt: "Spotify" },
];

export const services: Service[] = [
  {
    title: "Website / App Design\nUX / UI Design",
    description:
      "Creating Engaging Digital Experiences for Websites and Apps through UX/UI Design",
    link: "#",
  },
  {
    title: "Strategic Marketing and Creative Content",
    description:
      "Elevating Brands and Engagement through Strategic Marketing and Creative Content",
    link: "#",
  },
  {
    title: "Multivendor eCommerce Website Solutions",
    description: "Unlocking the World of Multivendor eCommerce Websites",
    link: "#",
  },
  {
    title: "Custom Software Development and Integration",
    description:
      "Delivering Tailored Software Solutions for Your Business Operations",
    link: "#",
  },
];
