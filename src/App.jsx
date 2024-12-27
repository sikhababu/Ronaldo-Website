import About from "./Components/About"
import Achievements from "./Components/Achievements"
import ContactForm from "./Components/ContactForm"
import Footer from "./Components/Footer"
import Gallery from "./Components/Gallery"
import Header from "./Components/Header"
import Home from "./Components/Home"

function App() {


  return (
    <>
    <Header />
    <div id="Home">
    <Home />
    </div>
    <div className = "my-4" id = "About">
    <About />
    </div>

    <div id="Career" className = "my-4"> 
      <Achievements />
    </div>
    <div id ="Gallery" className = "my-4">

      <Gallery />

    </div>

    <div id="Contact" className = "mt-5">

     <ContactForm />

    </div>

    <div id="Footer">

     <Footer />

    </div>
    </>
  )
}

export default App
