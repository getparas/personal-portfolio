import { DownloadIcon } from "lucide-react";
import { HeroImage } from "@/assets";
import Button from "../Ui/Button";
import { HERO } from "@/constants";

export default function Hero() {
  const handleHireMeClick = () => {
    alert("Hire Me button clicked");
  };

  const handleDownloadClick = () => {
    alert("Download CV button clicked");
  };

  return (
    <section
      className="flex flex-col-reverse items-center justify-between min-h-screen gap-4 px-4 py-12 lg:flex-row md:px-6 md:py-24"
      id="home"
    >
      <div className="w-full text-center md:w-1/2 lg:text-left">
        <h2 className="mb-2 text-2xl font-semibold md:text-3xl">
          {HERO.title}
        </h2>
        <h1 className="mb-2 text-4xl font-bold md:text-6xl">
          {HERO.greet} <span className="text-blue-500">{HERO.name}</span>
        </h1>
        <h2 className="mb-4 text-3xl font-bold md:text-5xl">{HERO.passion}</h2>
        <p className="max-w-md mx-auto mb-6 text-muted-foreground md:mx-0">
          {HERO.description}
        </p>
        <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:justify-start">
          <Button
            onClick={handleHireMeClick}
            className="flex items-center justify-center text-xl font-semibold w-44"
          >
            Hire Me!
          </Button>
          <Button
            variant="secondary"
            onClick={handleDownloadClick}
            className="flex items-center justify-center gap-3 text-xl font-semibold w-60"
          >
            Download CV
            <DownloadIcon />
          </Button>
        </div>
      </div>
      <div className="flex justify-center w-full mt-10 md:w-1/2">
        <div className="relative w-64 h-64 overflow-hidden rounded-full md:w-full md:h-full">
          <img src={HeroImage} alt="Robert Junior" />
        </div>
      </div>
    </section>
  );
}
