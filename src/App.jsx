import AboutSection from "./components/AboutSection"
import Carousel from "./components/Carousel"
// import Exp from "./components/Exp"
// import Exprience from "./components/Exprience"
import Navbar from "./components/Navbar"
import Slide from "./components/Slide"

function App() {
  

  return (
    <>
     <Navbar/>
     {/* <AboutSection/> */}
     <div className="my-8 gap-10 ">
     {/* <Exp/> */}
     {/* <Exprience/> */}
    <div className="my-8">
    <Carousel/>
    </div>
     <Slide/>
     </div>
     
    </>
  )
}

export default App
