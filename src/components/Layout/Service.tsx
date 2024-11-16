import ServiceCarousel from "../common/ServiceCarousel";

export default function Service() {
  return (
    <section>
      <div>
        <div className="flex flex-col items-center space-y-4">
          <span className="text-xl font-bold text-primary">SERVICES</span>
          <h3>
            <span className="text-5xl font-bold text-secondaryV2">
              Exploring My Design{" "}
            </span>
            <span className="text-5xl font-bold text-primary">Skills</span>
          </h3>
          <p className="w-1/2 text-lg font-normal text-center text-secondaryV2">
            We transform your ideas into a distinctive web project that both
            inspires you and captivates your customers
          </p>
        </div>
      </div>
      <div>
        <ServiceCarousel />
      </div>
    </section>
  );
}
