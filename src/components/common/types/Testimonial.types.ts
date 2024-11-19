import { ReactNode } from "react";

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: {
    src: string | ReactNode;
    alt: string;
  };
  content: string;
}
