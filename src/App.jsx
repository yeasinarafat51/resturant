import AboutSection from "./components/AboutSection"
import BookTable from "./components/BookTable"
import Carousel from "./components/Carousel"
import Coustomer from "./components/Coustomer"
import HeroSection from "./components/HeroSection"
// import Exp from "./components/Exp"
// import Exprience from "./components/Exprience"
import Navbar from "./components/Navbar"
import ResponsiveCarousel from "./components/ResponsiveCarousel"
import Slide from "./components/Slide"

function App() {
  

  return (
    <>
     <Navbar/>
     <HeroSection/>
     <AboutSection/>
     {/* <Carousel/> */}
     <Slide/>
     
     {/* <Coustomer/> */}
     {/* <BookTable/> */}
     <ResponsiveCarousel/>
     
     
    </>
  )
}

export default App
