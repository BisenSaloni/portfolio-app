import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Intro from "./components/Intro";
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Intro/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}
export default App;

