import React from "react";
import "./css/footer.css";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <p className="footer-text">
          © {new Date().getFullYear()} <span className="brand">Rajashree</span> | Made with <FaHeart className="heart-icon" aria-label="love" /> using <span>React</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
