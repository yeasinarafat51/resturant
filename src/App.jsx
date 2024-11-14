import AboutSection from "./components/AboutSection";
import BookTable from "./components/BookTable";
import Coustomer from "./components/Coustomer";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ResponsiveCarousel from "./components/ResponsiveCarousel";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ResponsiveCarousel />
      <BookTable />
      <Coustomer />
      <Footer />
    </>
  );
}

export default App;
