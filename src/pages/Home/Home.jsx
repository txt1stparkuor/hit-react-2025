import Header from "../../components/Header/Header";
import HeroSection from "../../components/HeroSection/HeroSection";
import Features from "../../components/Features/Features";
import Testimonials from "../../components/Testimonials/Testimonials";
import Footer from "../../components/Footer/Footer";

function Home({ isAuthenticated, onLogout }) {
  return (
    <>
      <Header isSignedIn={isAuthenticated} onLogout={onLogout}></Header>
      <HeroSection></HeroSection>
      <Features></Features>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </>
  );
}

export default Home;
