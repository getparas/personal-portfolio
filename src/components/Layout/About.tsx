import { AboutImage } from "@/assets";
import SkillsDisplay from "../common/SkillsDisplay";

export default function About() {
  return (
    <section
      className="flex flex-col items-center justify-between min-h-screen gap-4 px-4 py-12 lg:flex-row md:px-6 md:py-24"
      id="aboutMe"
    >
      <div className="flex justify-center w-full mt-10 md:w-1/2">
        <div className="relative w-64 h-64 overflow-hidden rounded-full md:w-full md:h-full">
          <img src={AboutImage} alt="Robert Junior" />
        </div>
      </div>
      <div className="w-full text-center md:w-1/2 lg:text-left">
        <div className="space-y-2">
          <span className="text-xl font-semibold text-primary">ABOUT ME</span>
          <h2 className="space-y-4">
            <span className="block text-5xl font-bold text-primary">
              20 Year's Experience
            </span>{" "}
            <span className="text-5xl font-bold text-secondaryV2">
              on Product Design
            </span>
          </h2>
          <p className="text-lg font-normal">
            Hello there! I'm <b>Robert Junior</b>. I specialize in web design
            and development, and I'm deeply passionate and committed to my
            craft. With <b>20 years</b> of experience as a professional graphic
            designer
          </p>
        </div>
        <div>
          <SkillsDisplay />
        </div>
      </div>
    </section>
  );
}
