import React from "react";
import ContactForm from "@/components/common/ContactForm";

export default function ContactMe() {
  return (
    <React.Fragment>
      <div className="flex flex-col items-center space-y-4 bg-primary py-6 px-4">
        <span className="text-xl font-bold text-white">Contact Me</span>
        <h2 className="text-5xl font-bold text-white text-center">
          Request Free Consultancy
        </h2>

        <div className="my-6 w-full max-w-6xl">
          <ContactForm />
        </div>
      </div>
    </React.Fragment>
  );
}
