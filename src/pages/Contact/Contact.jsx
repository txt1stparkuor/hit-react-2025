import HeroSection from "../../components/HeroSection/HeroSection";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./styles.scss";
import BaseButton from "../../components/BaseButton/BaseButton";
function Contact() {
  return (
    <div className="contact">
      <Header></Header>
      <HeroSection text={"Contact Start Bootstrap"}>
        <div className="contact__input">
          <input type="text" placeholder="Email Address" />
          <BaseButton text={"Contact"}></BaseButton>
        </div>
      </HeroSection>
      <Footer></Footer>
    </div>
  );
}

export default Contact;
