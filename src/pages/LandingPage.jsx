import MainShowcase from "../sections/MainShowcase";
import SideNav from "../components/socials/SideNav";
import About from "../sections/about/About";
import Portfolio from "../sections/Portfolio";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import ScrollToTop from "../components/ScrollToTop";

const LandingPage = () => {
  return (
    <div>
      <MainShowcase />
      <SideNav />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default LandingPage;
