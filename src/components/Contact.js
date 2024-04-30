import { Container, Row, Col } from "react-bootstrap";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const Contact = () => {
  return (
    <footer>
      <section className="contact" id="connect">
      <div className="allHeadings">
        <h1>CONTACT</h1>
        <p>Feel free to reach out!</p>
      </div>
      <ul className="linkSet">
        <li className="link">
          <a href="mailto:rajashreeasok16@gmail.com" target="_blank"><MdEmail className="icons" /></a>
        </li>
        <li className="link">
          <a href="https://www.linkedin.com/in/rajashree-a-60857716a" target="_blank"><FaLinkedin className="icons" /></a>
        </li>
        <li className="link">
          <a href="https://github.com/Rajashree0316" target="_blank"><IoLogoGithub className="icons" /></a>
        </li>
      </ul>
    </section>
    </footer>
  );
}
export default Contact;
