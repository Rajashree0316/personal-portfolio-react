import { useState, useEffect, useRef } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Theme from "./theme";
import "./css/navbar.css";

const NavBar = ({ handleToggleDarkMode, darkModeEnabled }) => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      updateActiveSection();
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const updateActiveSection = () => {
    const sections = ["home", "about", "skills", "projects", "experience"];
    const scrollPosition = window.scrollY + window.innerHeight / 3;
    for (let section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveLink(section);
          break;
        }
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setMenuOpen(false);
  };

  const accentColor = darkModeEnabled ? Theme.darkMode.accentColor : Theme.lightMode.accentColor;
  const textColor = darkModeEnabled ? "#ffffff" : "#000000";
  const navbarBg = darkModeEnabled
    ? "linear-gradient(90deg, rgba(20,16,16,0.95) 0%, rgba(30,30,30,0.95) 100%)"
    : Theme.lightMode.backgroundImage;

  const connectBtnBg = darkModeEnabled ? accentColor : "transparent";
  const connectBtnColor = darkModeEnabled ? "#121212" : "#000000";

  const navLinks = ["home", "about", "skills", "projects", "experience"];

  return (
    <Router>
      <Navbar
        expand="lg"
        className={scrolled ? "scrolled" : ""}
        style={{
          backgroundImage: navbarBg,
          padding: "0.8rem",
          position: "fixed",
          width: "100%",
          top: 0,
          zIndex: 9999,
          color: textColor,
        }}
      >
        <Container className="navbar-container">
          <Navbar.Brand href="#home" className="rsBrand" style={{ color: textColor }}>
            <span>{"<Rajashree/>"}</span>
          </Navbar.Brand>

          <div className="custom-toggler" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
          </div>

          <Navbar.Collapse
            ref={menuRef}
            className={`collapse-nav ${menuOpen ? "open" : ""}`}
          >
            <Nav className="ms-auto">
              {navLinks.map((link) => (
                <Nav.Link
                  key={link}
                  href={`#${link}`}
                  className={activeLink === link ? "active navbar-link" : "navbar-link"}
                  style={{
                    "--accentColor": accentColor,
                    color: textColor,
                  }}
                  onClick={() => onUpdateActiveLink(link)}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </Nav.Link>
              ))}
            </Nav>
            <span className="navbar-text">
              <HashLink to="#contact">
                <button
                  className="connectClass"
                  style={{
                    backgroundColor: connectBtnBg,
                    color: connectBtnColor,
                    borderColor: accentColor,
                  }}
                >
                  <span>Let’s Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <button onClick={handleToggleDarkMode} className="modeBtn" style={{ color: textColor }}>
        {darkModeEnabled ? <MdOutlineLightMode /> : <MdDarkMode />}
      </button>
    </Router>
  );
};

export default NavBar;
