import AboutSection from "./components/AboutSection"
import BookTable from "./components/BookTable"
import Carousel from "./components/Carousel"
import HeroSection from "./components/HeroSection"
// import Exp from "./components/Exp"
// import Exprience from "./components/Exprience"
import Navbar from "./components/Navbar"
import Slide from "./components/Slide"

function App() {
  

  return (
    <>
     {/* <Navbar/> */}
     {/* <AboutSection/> */}
     <div className="my-8 gap-10 ">
     {/* <Exp/> */}
     {/* <Exprience/> */}
    <div className="my-16">

    <Carousel/>
    <BookTable/>
    </div>
     {/* <Slide/> */}
     {/* <HeroSection/> */}
     </div>
     
    </>
  )
}

export default App
