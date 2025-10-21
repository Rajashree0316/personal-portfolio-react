import React from "react";
import "./css/contact.css";
import contact from "../assets/img/contact.jpg";
import { FaGithub, FaLinkedin, FaEnvelope, FaMedium, FaDev } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="common-container">
      <section className="contact-section" id="contact">
        <div className="allHeadings">
          <h1>Get in Touch</h1>
          <p>I’d love to connect — whether you want to collaborate, share ideas, or just chat about web development!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-image">
            <img src={contact} alt="Contact" />
          </div>

          <div className="contact-text">
            <h1>Let's Build Something Together</h1>
            <div className="contact-intro">
              <p>I'm always open to new opportunities, collaborations, or even a friendly chat about web development and tech.
                Reach out and let's create something amazing!</p>
            </div>
            <div className="contact-icons">
              <a
                href="https://github.com/Rajashree0316"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-wrapper github"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/rajashree-a-60857716a/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-wrapper linkedin"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:rajashreeasok16@example.com"
                className="icon-wrapper email"
              >
                <FaEnvelope />
              </a>

              <a
                href="https://medium.com/@rajashreeasok"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-wrapper medium"
              >
                <FaMedium />
              </a>

              <a
                href="https://dev.to/rajashreeasokkumar16"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-wrapper dev"
              >
                <FaDev />
              </a>
            </div>
          </div>
        </div>
      </section >
    </div>

  );
};

export default Contact;
