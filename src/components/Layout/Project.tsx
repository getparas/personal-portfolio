import ProjectCards from "../common/ProjectCard";

export default function Projects() {
  return (
    <section>
      <div>
        <div className="flex flex-col items-center space-y-4">
          <span className="text-xl font-bold text-primary">OUR PROJECTS</span>
          <h2 className="w-1/2 text-5xl font-bold text-center text-secondaryV2">
            Presenting My Design Portfolio and Case Studies
          </h2>
        </div>
      </div>
      <div>
        <ProjectCards />
      </div>
    </section>
  );
}
