import { ReactNode } from "react";

export type Project = {
  id: number;
  title: string;
  category: string;
  image: {
    src: string | ReactNode;
    alt: string;
  };
  link: string;
};
