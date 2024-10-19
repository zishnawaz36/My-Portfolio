import About from "./component/About";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import SocialLinks from "./component/Sociallink";
import Contact from "./component/Contact";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import projects from "./component/Project";
import Certificate from "./component/Certificate";
import Experience from "./component/Experience";
import Skills from "./component/Skill";
import Project from "./component/Project";
function App(){
  return(
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/projects" element={<Project/>}/>
      <Route path="/experiance" element={<Experience/>}/>
      <Route path="/certificate" element={<Certificate/>}/>
      <Route path="/skills" element={<Skills/>}/>
    </Routes>
    <SocialLinks/>
    </BrowserRouter>
    </>
  )
}
export default App;