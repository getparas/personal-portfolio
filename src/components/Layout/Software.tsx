import styled, { keyframes } from "styled-components";
import { software } from "@/constants";

const marquee = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const MarqueeContainer = styled.div`
  animation: ${marquee} 30s linear infinite;

  @media (max-width: 640px) {
    animation-duration: 15s;
  }
`;

export default function Software() {
  return (
    <div className="w-full py-8 overflow-hidden rounded-lg bg-bgGray">
      <MarqueeContainer className="flex flex-col items-center md:flex-row">
        {[...software, ...software].map((logo, index) => (
          <div key={index} className="flex-shrink-0 mx-8">
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </MarqueeContainer>
    </div>
  );
}
