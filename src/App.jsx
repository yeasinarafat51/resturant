import AboutSection from "./components/AboutSection"
import Carousel from "./components/Carousel"
// import Exp from "./components/Exp"
// import Exprience from "./components/Exprience"
import Navbar from "./components/Navbar"

function App() {
  

  return (
    <>
     <Navbar/>
     <AboutSection/>
     <div className="my-8 ">
     {/* <Exp/> */}
     {/* <Exprience/> */}
     <Carousel/>
     </div>
     
    </>
  )
}

export default App
