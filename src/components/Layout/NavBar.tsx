import { useState } from "react";
import Button from "../Ui/Button";
import { Menu, X } from "lucide-react";
import { NAVIGATION_LINKS } from "@/constants";
import { Logo, SmallLogo } from "@/assets";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleChatClick = () => {
    alert("Let's chat button clicked");
    // Add your cancel logic here
  };

  return (
    <nav className="fixed left-0 right-0 z-50 top-4">
      <div className="px-4 mx-auto max-w-9xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 px-4 rounded-full bg-white/80 backdrop-blur-md">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0">
              <div className="flex items-center">
                {/* Logo for large screens */}
                <div className="hidden sm:block">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary">
                    <img src={Logo} alt="AeroVision Logo" />
                  </div>
                </div>

                {/* Logo for small screens */}
                <div className="sm:hidden">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary">
                    <img src={SmallLogo} alt="AeroVision Small Logo" />
                  </div>
                </div>

                {/* Title for large screens */}
                <span className="hidden ml-2 text-2xl font-extrabold text-secondary sm:block">
                  AeroVision
                </span>

                {/* Title for small screens */}
                <span className="ml-2 text-lg font-extrabold text-secondary sm:hidden">
                  AeroVision
                </span>
              </div>
            </a>
          </div>

          <div className="hidden lg:block">
            <div className="flex items-baseline ml-10 space-x-4 overflow-x-auto max-w-[100vw] whitespace-nowrap">
              {NAVIGATION_LINKS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-3 py-2 text-base font-bold rounded-md text-secondary hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden lg:block ">
            <Button
              variant="primary"
              className="flex items-center justify-center text-xl font-semibold w-44"
              onClick={handleChatClick}
            >
              Let&apos;s chat
            </Button>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="block w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 mt-2 space-y-1 rounded-lg sm:px-3 bg-white/80 backdrop-blur-md">
            {NAVIGATION_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 text-sm font-normal rounded-md text-secondary hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <div className="px-3 mt-4">
              <Button
                variant="primary"
                className="flex items-center justify-center w-full text-xl font-semibold"
                onClick={handleChatClick}
              >
                Let&apos;s chat
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
