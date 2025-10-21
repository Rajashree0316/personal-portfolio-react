import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from './components/Particles';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollToTopButton from './components/ScrollToTopButton';
import Theme from './components/theme';
import Experience from './components/Experience';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';

const App = () => {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  // toggle body class
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkModeEnabled);
    document.body.classList.toggle("light-mode", !darkModeEnabled);
  }, [darkModeEnabled]);

  const handleToggleDarkMode = () => {
    setDarkModeEnabled(!darkModeEnabled);
  };

  return (
    <div className="app">
      <NavBar handleToggleDarkMode={handleToggleDarkMode} darkModeEnabled={darkModeEnabled} />
      <Home darkModeEnabled={darkModeEnabled} />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />

      <ScrollToTopButton />
      <Particles id="tsparticles" darkModeEnabled={darkModeEnabled} />

    </div >
  );
}

export default App;


