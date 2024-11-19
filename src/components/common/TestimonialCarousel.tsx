import { testimonials } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Testimonial } from "./types/Testimonial.types";

export function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
      <TestimonialImages activeIndex={activeIndex} />
      <TestimonialContent
        active={active}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </div>
  );
}

function TestimonialImages({ activeIndex }: { activeIndex: number }) {
  const randomRotate = () => Math.floor(Math.random() * 21) - 10;

  return (
    <div className="relative h-80 w-full mb-10">
      <AnimatePresence>
        {testimonials.map((testimonial, idx) => (
          <motion.div
            key={testimonial.id}
            initial={{
              opacity: 0,
              scale: 0.9,
              z: -100,
              rotate: randomRotate(),
              y: 0,
            }}
            animate={{
              opacity: idx === activeIndex ? 1 : 0.7,
              scale: idx === activeIndex ? 1 : 0.95,
              rotate: idx === activeIndex ? 0 : randomRotate(),
              zIndex: idx === activeIndex ? 999 : testimonials.length + 2 - idx,
              y: idx === activeIndex ? [0, -80, 0] : 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              z: 100,
              rotate: randomRotate(),
            }}
            className="absolute inset-0 origin-bottom"
          >
            {typeof testimonial.image.src === "string" ? (
              <img
                src={testimonial.image.src}
                className="rounded-3xl h-full w-full object-cover"
                height={500}
                width={500}
                alt={testimonial.image.alt}
              />
            ) : (
              <div className="rounded-3xl h-full w-full flex items-center justify-center bg-gray-200">
                {testimonial.image.src}
              </div>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

function TestimonialContent({
  active,
  handleNext,
  handlePrev,
}: {
  active: Testimonial;
  handleNext: () => void;
  handlePrev: () => void;
}) {
  return (
    <div>
      <motion.div
        key={active.id}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="text-center md:text-start"
      >
        <h2 className="font-bold text-xl text-secondaryV2">{active.name}</h2>
        <p className="text-base text-secondaryV2/80">{active.role}</p>
        <p className="text-lg pt-10 font-normal text-secondary">
          {active.content.split(" ").map((word, idx) => (
            <motion.span
              key={word + idx}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.05 * idx }}
              className="inline-block"
            >
              {word}{" "}
            </motion.span>
          ))}
        </p>
      </motion.div>

      <div className="flex gap-4 pt-10 justify-center md:justify-start">
        <button
          onClick={handlePrev}
          className="group h-10 w-10 rounded-full border-2 border-primary hover:text-white hover:bg-primary flex items-center justify-center text-primary transition-colors duration-300 ease-in-out"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-6 w-6 transition-transform duration-300 ease-in-out delay-150 group-hover:rotate-45" />
        </button>
        <button
          onClick={handleNext}
          className="group h-10 w-10 rounded-full border-2 border-primary hover:text-white hover:bg-primary flex items-center justify-center text-primary transition-colors duration-300 ease-in-out"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-6 w-6 transition-transform duration-300 ease-in-out delay-150 group-hover:-rotate-45" />
        </button>
      </div>
    </div>
  );
}
