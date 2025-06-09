import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import { BiSolidArrowToTop } from "react-icons/bi";


const App = () => {
  return (
    < >
      <Navbar/>
      <Hero/>
      <Skills/>
      <About/>
      <Projects/>
     <a href="#home" className="fixed bottom-12 right-8 text-3xl"><BiSolidArrowToTop className="text-slate-400 hover:text-blue-800 duration-500"/></a>
    </>
  )
}

export default App
