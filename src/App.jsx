import AboutSection from "./components/AboutSection"
import BookTable from "./components/BookTable"
import Carousel from "./components/Carousel"
import Coustomer from "./components/Coustomer"
import Delevary from "./components/Delevary"
import Footer from "./components/Footer"
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
     {/* <Delevary/> */}
     {/* <Carousel/> */}
     {/* <Slide/> */}
     
     
    
     <ResponsiveCarousel/>
      <BookTable/>
      <Coustomer/>
      <Footer/>
     
     
    </>
  )
}

export default App
