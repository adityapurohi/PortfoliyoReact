import Nav from "./Components/Nav"
import Home from './Components/Home'
import Footer from "./Components/Footer"
import Ecommerce from "./Components/Ecommerce"
import ProjectHome from "./Components/ProjectHome"
import AllCards from "./Components/AllCards"
import Blog from "./Components/Blog"
import ChatMain from "./Components/ChatMain"
import Projectsshow from "./Components/Projectsshow"
import About from "./Components/About"
import { Routes, Route } from "react-router-dom";
import Cards from "./Components/Cards"
import Contact from "./Components/Contact"
import ProjectDetails from "./Components/ProjectDetails"
 

function App() {

  return (
    <>
    <Nav/>
   
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projectsshow />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/:id" element={< ProjectDetails />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer></Footer>
    
    </>
  )
}

export default App
