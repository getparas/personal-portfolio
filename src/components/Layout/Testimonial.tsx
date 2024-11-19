import React from "react";
import { TestimonialCarousel } from "../common/TestimonialCarousel";

export default function Testimonials() {
  return (
    <React.Fragment>
      <div className="flex flex-col items-center space-y-4">
        <span className="text-xl font-bold text-primary">TESTIMONIALS</span>
        <h2 className="text-5xl font-bold text-secondaryV2">
          The Trust From Clients
        </h2>
      </div>
      <div className="my-24">
        <TestimonialCarousel />
      </div>
    </React.Fragment>
  );
}
