import BrandSection from "./sections/BrandSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./sections/Footer";
import HeroSection from "./sections/HeroSection";
import ShopByBrandSection from "./sections/ShopByBrandSection";
import TestimonialSection from "./sections/TestimonialSection";


export default function Home() {
  return (
    <>
    <HeroSection/>
    <BrandSection/>
    <ShopByBrandSection/>
    <TestimonialSection/>
    <ContactSection/>
    <Footer/>
    </>
  );
}
