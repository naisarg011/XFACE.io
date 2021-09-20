import React, { useState } from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/Hero";
import InfoSection from "../components/InfoSection";
import {
  homeObjOne,
  homeObjThree,
  homeObjTow,
} from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import Service from "../components/Services";
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
      <Service />
      <InfoSection {...homeObjThree} />
      <Footer/>
    </>
  );
};

export default Home;
