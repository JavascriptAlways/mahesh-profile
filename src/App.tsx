import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Projects from './components/Projectjs/Projects';
import "primereact/resources/themes/lara-light-indigo/theme.css";


function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education /> 
      <Footer />
    </div>
  );
}

export default App;