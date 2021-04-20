import React, { useState } from "react";
import HeroSection from "../components/Hero";
import InfoSection from "../components/InfoSection";
import { homeObjOne, homeObjThree, homeObjTow } from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTow} />
      <InfoSection {...homeObjThree} />
    </>
  );
};

export default Home;
