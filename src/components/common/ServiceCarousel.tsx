import { SkillsImage, SkillsImageBlue } from "@/assets";
import { services } from "@/constants";
import { cn } from "@/utils/cn";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function ServiceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };
  const previous = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + services.length) % services.length
    );
  };

  return (
    <div className="my-12">
      <div className="flex justify-center gap-4 lg:justify-end">
        <button
          className="flex items-center justify-center w-10 h-10 transition-colors -translate-y-1/2 bg-white border-2 rounded-full shadow-sm border-primary top-1/2 hover:bg-primary"
          onClick={previous}
        >
          <ChevronLeft className="w-5 h-5 text-primary hover:text-white" />
        </button>
        <button
          className="flex items-center justify-center w-10 h-10 transition-colors -translate-y-1/2 bg-white border-2 rounded-full shadow-sm border-primary top-1/2 hover:bg-primary"
          onClick={next}
        >
          <ChevronRight className="w-5 h-5 text-primary hover:text-white" />
        </button>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col gap-6 overflow-hidden overflow-x-auto lg:flex-row">
          {services.map((service, index) => {
            const isActive = index === currentIndex;
            // const isNext = (currentIndex + 1) % services.length === index;
            // const isPrevious =
            //   (currentIndex - 1 + services.length) % services.length === index;
            return (
              <div
                key={index}
                className={cn(
                  "min-w-[300px] bg-background rounded-lg shadow-md transition-all duration-300 ease-in-out",
                  isActive
                    ? "bg-primary text-white scale-100 opacity-100"
                    : "scale-90 opacity-70"
                )}
              >
                <div className="p-6 space-y-4">
                  <img
                    src={isActive ? SkillsImage : SkillsImageBlue}
                    alt="Service icon"
                    className="w-12 h-12"
                  />
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold whitespace-pre-line">
                      {service.title}
                    </h3>
                    <p className="text-lg font-normal opacity-90">
                      {service.description}
                    </p>
                  </div>
                  <div className="pt-4">
                    <a
                      href={service.link}
                      className={cn(
                        "inline-flex items-center text-lg font-medium",
                        isActive ? "text-white" : "text-blue-600"
                      )}
                    >
                      Learn more
                      <ChevronRight className="w-8 h-8 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
