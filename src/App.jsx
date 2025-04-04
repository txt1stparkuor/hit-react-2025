import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";
import FeatureServices from "./components/FeaturedServices/FeatureServices";
import "./styles/index.scss"
function App() {
  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>
      <FeatureServices></FeatureServices>
      <AboutUs></AboutUs>
      <Services></Services>
      <Footer></Footer>
    </>
  );
}

export default App;
