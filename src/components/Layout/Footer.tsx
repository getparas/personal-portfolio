import { Email, Facebook, Linkedin, LogoSecondary, Twitter } from "@/assets";
import { SVGProps } from "react";

type IconType = string | React.ComponentType<SVGProps<SVGSVGElement>>;

type SocialLink = {
  name: string;
  icon: IconType;
  href: string;
};

const socialLinks: SocialLink[] = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Email", icon: Email, href: "#" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const renderIcon = (icon: IconType) => {
    if (typeof icon === "string") {
      return <img src={icon} alt="icon" />;
    } else {
      const IconComponent = icon;
      return <IconComponent />;
    }
  };

  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-6 md:mb-0">
          <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full mr-2">
            <a href="#">
              <img src={LogoSecondary} alt="AeroVision Logo" />
            </a>
          </div>
          <span className="text-2xl text-white font-bold tracking-wider">
            AeroVision
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-[#79B2F2] font-semibold text-lg mr-4">
            FOLLOW US:
          </span>
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              aria-label={link.name}
              className="bg-[#79B2F2] rounded-full p-2 text-white hover:bg-[#79B2F2]/60 transition-colors duration-200"
            >
              {renderIcon(link.icon)}
            </a>
          ))}
        </div>
      </div>
      <hr className="my-8 border-[1px] border-[#79B2F2] container mx-auto" />
      <div className="container mx-auto text-center mt-4">
        <span className="text-base font-normal text-[#79B2F2]">
          © Copyright {currentYear}. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
