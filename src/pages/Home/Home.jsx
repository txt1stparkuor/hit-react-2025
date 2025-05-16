import React from "react";
import "./styles.scss";
import Header from "../../components/Header/Header";
import HeroSection from "../../components/HeroSection/HeroSection";
import Features from "../../components/Features/Features";
import Showcase from "../../components/Showcase/Showcase";
import Testimonial from "../../components/Testimonial/Testimonial";
import GetStarted from "../../components/GetStarted/GetStarted";
import Footer from "../../components/Footer/Footer";
function Home() {
  return (
    <>
      <Header></Header>
      <HeroSection
        text={"Generate more leads with a professional landing page!"}
      ></HeroSection>
      <Features></Features>
      <Showcase></Showcase>
      <Testimonial></Testimonial>
      <GetStarted></GetStarted>
      <Footer></Footer>
    </>
  );
}

export default Home;
