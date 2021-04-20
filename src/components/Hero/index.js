import React from "react";
import Video from "../../videos/video3.mp4";
import { HeroContainer, HeroBg, VideoBg, HeroH1, HeroP, HeroContent } from "./HeroElement";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>Developing The Digital World</HeroH1>
        <HeroP>We are here to help you as per your ideas.</HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
