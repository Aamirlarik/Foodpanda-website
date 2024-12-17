import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Resturant/Resturant";
import Resturant from "./Resturant/Resturant";
import Card from "./City/city";
import HeroSection from "./HeroSection/herosection";
const Homepage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Card />

      {/* <Footer /> */}
      {/* <Resturant /> */}
    </>
  );
};

export default Homepage;
