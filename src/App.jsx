import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";
import FeatureServices from "./components/FeaturedServices/FeatureServices";
import "./styles/index.scss";
import { useState } from "react";
function App() {
  const [isDark, setIsDark] = useState(true);
  function handleChangeTheme() {
    setIsDark(!isDark);
  }
  return (
    <>
      <div className="app" data-theme={isDark ? "dark" : ""}>
        <Header isDark={isDark} handleChangeTheme={handleChangeTheme}></Header>
        <HeroSection></HeroSection>
        <FeatureServices></FeatureServices>
        <AboutUs></AboutUs>
        <Services></Services>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
