import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Skills from './components/Skills/Skills';
// import Projects from './components/Projectjs/Projects';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import ExperienceEducation from './components/ExperienceEducation/ExperienceEducation';
import Certificates from './components/Certificates/Certificates';


function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Certificates />
      <ExperienceEducation />      
      {/* <Projects /> */}
      <Footer />
    </div>
  );
}

export default App;