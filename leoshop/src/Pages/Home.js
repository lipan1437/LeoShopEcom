import React from "react";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Trusted from "../components/Trusted";
import FeaturesProduct from "../components/FeaturesProduct";

const Home = () => {
  const data = {
    name: "Leo Shop",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeaturesProduct/>
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
