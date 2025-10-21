import React, { useEffect } from "react";
import "./css/about.css";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Profile from "../assets/img/raji.jpg";
import Theme from "./theme";

const About = ({ darkModeEnabled }) => {
  useEffect(() => {
    document.body.setAttribute("data-theme", darkModeEnabled ? "dark" : "light");
  }, [darkModeEnabled]);

  const accentColor = darkModeEnabled ? Theme.darkMode.accentColor : Theme.lightMode.accentColor;

  return (
    <div className="common-container">
      <section className="about" id="about" style={{ color: Theme[darkModeEnabled ? "darkMode" : "lightMode"].color }}>
        <div className="allHeadings">
          <h1>About Me</h1>

        </div>
        <div className="about-container">
          {/* LEFT: PHOTO + SOCIALS */}
          <div className="about-left animate-fade">
            <div className="photo-container">
              <img src={Profile} alt="Rajashree" className="profile-photo" />
            </div>

            <div className="iconGroup">
              <a href="https://github.com/Rajashree0316" target="_blank" rel="noopener noreferrer" className="iconBtn github">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/rajashree-a-60857716a/" target="_blank" rel="noopener noreferrer" className="iconBtn linkedin">
                <FaLinkedin />
              </a>
              <a href="mailto:rajashreeasok16@gmail.com" target="_blank" rel="noopener noreferrer" className="iconBtn gmail">
                <SiGmail />
              </a>
              <a href="https://medium.com/@rajashreeasok" target="_blank" rel="noopener noreferrer" className="iconBtn medium">
                <FaMedium />
              </a>
            </div>
          </div>

          {/* RIGHT: DESCRIPTION + HOBBIES */}
          <div className="about-right animate-up">
            <p className="intro">
              <strong>Who am I?</strong><br />
              I build responsive, interactive, and maintainable web interfaces, focusing on usability, performance, and scalable solutions that meet both user and business needs.
            </p>


            <p className="para">
              <strong>What I work on:</strong><br />
              I build modern web applications with <strong>React.js, JavaScript, HTML5, CSS3</strong>, creating responsive UI components and integrating APIs. Currently, I’m exploring the <strong>MERN Stack</strong> through projects that involve both client- and server-side development with clean, maintainable code.
            </p>


            <p className="para">
              <strong>Approach & Skills:</strong><br />
              I write clean, maintainable code with a focus on accessibility and performance. I solve problems efficiently, optimize user experiences, and deliver polished, practical front-end solutions.
            </p>

            <p className="para">
              Outside of coding, I engage in activities that fuel creativity and personal growth:
            </p>

            <div className="hobbies">
              <div className="hobby">
                <span className="hobby-icon">🎨</span>
                <span>Sketching </span>
              </div>
              <div className="hobby">
                <span className="hobby-icon">🖌️</span>
                <span>Craft Works</span>
              </div>
              <div className="hobby">
                <span className="hobby-icon">📖</span>
                <span>Reading</span>
              </div>
              <div className="hobby">
                <span className="hobby-icon">👩‍🏫</span>
                <span>Tutoring</span>
              </div>
              <div className="hobby">
                <span className="hobby-icon">💪</span>
                <span>Discipline</span>
              </div>
              <div className="hobby">
                <span className="hobby-icon">🍳</span>
                <span> Cooking</span>
              </div>
            </div>

            <p className="para">
              I seek to contribute to projects that are technically challenging and deliver user-friendly, high-quality web experiences.
            </p>
          </div>

        </div>
      </section></div>
  );
};

export default About;
