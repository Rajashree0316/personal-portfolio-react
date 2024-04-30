import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import Theme from './theme';

const NavBar = ({ handleToggleDarkMode, darkModeEnabled }) => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  return (
    <Router>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""} style={{
        backgroundColor: darkModeEnabled ? Theme.darkMode.backgroundColor : Theme.lightMode.backgroundColor,
        padding: '1rem',
      }}>
        <Container>
          <Navbar.Brand href="#home" className="rsBrand">
            <span>{"<Rajashree/>"}</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home"
                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>

              <Nav.Link href="#about"
                className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>

              <Nav.Link href="#skills"
                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>

              <Nav.Link href="#projects"
                className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>

            </Nav>
            <span className="navbar-text">
              <HashLink to='#connect'>
                <button className="connectClass">
                  <span>Let’s Connect</span></button>
              </HashLink>
            </span>
            <div>
            <button onClick={handleToggleDarkMode} className="modeBtn">
              {darkModeEnabled ? <MdOutlineLightMode /> : <MdDarkMode />}
            </button>
            </div>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </Router>
  )
}
export default NavBar;