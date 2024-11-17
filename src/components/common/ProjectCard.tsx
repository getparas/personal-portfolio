import { useState } from "react";
import { Project } from "./types/ProjectCard.types";
import {
  PreviewFive,
  PreviewFour,
  PreviewOne,
  PreviewSix,
  PreviewThree,
  PreviewTwo,
} from "@/assets";
import Button from "../Ui/Button";

const projects: Project[] = [
  {
    id: 1,
    title: "VR Experience Platform",
    category: "UI/UX Design",
    image: {
      src: PreviewTwo,
      alt: "VR Experience Platform",
    },
    link: "https://example.com/vr-experience",
  },
  {
    id: 2,
    title: "Food Delivery Service",
    category: "Branding Design",
    image: {
      src: PreviewOne,
      alt: "Food Delivery Service",
    },
    link: "https://github.com/example/food-delivery",
  },
  {
    id: 3,
    title: "Travel Booking Platform",
    category: "UI/UX Design",
    image: {
      src: PreviewThree,
      alt: "Travel Booking Platform",
    },
    link: "https://example.com/travel-booking",
  },
  {
    id: 4,
    title: "iPhone 14 Pro Mockups",
    category: "Wordpress",
    image: {
      src: PreviewFive,
      alt: "iPhone 14 Pro Mockups",
    },
    link: "https://github.com/example/iphone-mockups",
  },
  {
    id: 5,
    title: "Mobile App Showcase",
    category: "UI/UX Design",
    image: {
      src: PreviewFour,
      alt: "Mobile App Showcase",
    },
    link: "https://example.com/mobile-app-showcase",
  },
  {
    id: 6,
    title: "Mockup Generator Bundle",
    category: "Branding Design",
    image: {
      src: PreviewSix,
      alt: "Mockup Generator Bundle",
    },
    link: "https://github.com/example/mockup-generator",
  },
];

export default function ProjectCards() {
  const [selectCategory, setSelectCategory] = useState<string>("All");

  const filteredProjects = projects.filter((project) =>
    selectCategory === "All" ? true : project.category === selectCategory
  );

  const categories = ["All", "UI/UX Design", "Branding Design", "Wordpress"];

  const handleProjectClick = (
    event: React.MouseEvent<HTMLDivElement>,
    link: string
  ) => {
    event.preventDefault();
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectCategory === category ? "primary" : "secondary"}
            onClick={() => setSelectCategory(category)}
            className="flex items-center justify-center min-w-44"
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="relative overflow-hidden transition-all rounded-lg cursor-pointer group hover:shadow-xl"
            onClick={(e) => handleProjectClick(e, project.link)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                window.open(project.link, "_blank", "noopener,noreferrer");
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={`View ${project.title} project`}
          >
            <div className="aspect-w-3 aspect-h-2">
              {typeof project.image.src === "string" ? (
                <img
                  src={project.image.src}
                  alt={project.image.alt}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-full">{project.image.src}</div>
              )}
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center transition duration-300 opacity-0 bg-primary/60 group-hover:opacity-100">
              <h3 className="mb-2 text-xl font-bold text-white">
                {project.title}
              </h3>
              <p className="text-white/80">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
