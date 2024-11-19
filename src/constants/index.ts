import {
  LogoFive,
  LogoOne,
  LogoSix,
  LogoThree,
  LogoTwo,
  TestimonialFive,
  TestimonialOne,
  TestimonialThree,
  TestimonialTwo,
} from "@/assets";
import { Service } from "@/components/common/types/Service.types";
import { Testimonial } from "@/components/common/types/Testimonial.types";

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

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "SAVANNAH NGUYEN",
    role: "President of Sales",
    image: {
      src: TestimonialOne,
      alt: "Savannah Nguyen",
    },
    content:
      "Lorem ipsum dolor sit amet consectetur. Nibh porttitor aliquet tellus eget egestas. Enim ultrices dictumst tortor in eget neque vestibulum potenti tempus",
  },
  {
    id: 2,
    name: "JENNY WILSON",
    role: "Medical Assistant",
    image: {
      src: TestimonialTwo,
      alt: "Jenny Wilson",
    },
    content:
      "Lorem ipsum dolor sit amet consectetur. Tortor odio purus morbi amet. Donec bibendum et cursus felis sollicitudin vulputate cursus odio. Aliquam cursus eu in aliquam nisl",
  },
  {
    id: 3,
    name: "ESTHER HOWARD",
    role: "Nursing Assistant",
    image: {
      src: TestimonialThree,
      alt: "Esther Howard",
    },
    content:
      "Lorem ipsum dolor sit amet consectetur. Purus commodo id id ut ultricies aliquam. Sit aliquet leo et lorem dignissim semper donec risus tempor. Varius ultricies dolor ultricies",
  },
  {
    id: 4,
    name: "CAMERON WILLIAMSON",
    role: "Marketing Coordinator",
    image: {
      src: TestimonialFive,
      alt: "Cameron Williamson",
    },
    content:
      "Lorem ipsum dolor sit amet consectetur. Eu velit tellus pellentesque tincidunt arcu convallis bibendum. Orci diam leo non molestie dictum orci pulvinar massa",
  },
];
