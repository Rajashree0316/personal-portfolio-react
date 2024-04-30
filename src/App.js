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
import { useState } from 'react';

const App = () => {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const handleToggleDarkMode = () => {
    setDarkModeEnabled(!darkModeEnabled);
  };
  const theme = darkModeEnabled ? Theme.darkMode : Theme.lightMode;

  return (
    <div className="app"
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.textColor,
      }}>
    
      <NavBar handleToggleDarkMode={handleToggleDarkMode} darkModeEnabled={darkModeEnabled}/>
      <Home />
      <About />
      <Skills />
      <Projects/>
      <Contact />
      <ScrollToTopButton/>
      <Particles id="tsparticles" darkModeEnabled={darkModeEnabled} />
      
    </div >
  );
}

export default App;
