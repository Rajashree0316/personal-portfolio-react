import { useState, useEffect, useCallback, useMemo } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import headerImg from "../assets/img/coder.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./css/home.css";

const Home = ({ darkModeEnabled }) => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState([]);
  const [charIndex, setCharIndex] = useState(0);

  const toRotate = useMemo(() => ["Front-end Developer", "Web Developer"], []);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  const tick = useCallback(() => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];

    if (!isDeleting) {
      if (charIndex < fullText.length) {
        setText((prev) => [...prev, fullText[charIndex]]);
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => setIsDeleting(true), pauseTime);
      }
    } else {
      if (text.length > 0) {
        setText((prev) => prev.slice(0, prev.length - 1));
      } else {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setCharIndex(0);
      }
    }
  }, [charIndex, isDeleting, loopNum, text, toRotate]);

  useEffect(() => {
    const interval = setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(interval);
  }, [text, tick, isDeleting]);

  return (
    <div className="common-container">
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={6}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__zoomIn" : ""
                    }
                  >
                    <img src={headerImg} alt="Header" className="floating-img" />
                  </div>
                )}
              </TrackVisibility>
            </Col>

            <Col xs={12} md={6} xl={6}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeInRight" : ""
                    }
                  >
                    <span className="tagline">Welcome to my portfolio</span>
                    <h1>
                      Hi, I’m <span className="highlight">Rajashree</span>
                    </h1>

                    <h3
                      className={`wrap ${darkModeEnabled ? "wrap-dark" : "wrap-light"
                        }`}
                    >
                      {text.map((char, idx) => (
                        <span key={idx} className="letter">
                          {char}
                        </span>
                      ))}
                      <span className="cursor">|</span>
                    </h3>

                    <p className="intro-text">
                      I craft seamless, interactive, and scalable web experiences
                      that blend creativity with technology. My passion lies in
                      transforming ideas into intuitive digital products — fast,
                      accessible, and visually stunning.
                    </p>

                    <Button
                      className={`resumeBtn ${darkModeEnabled ? "dark-mode-btn" : "light-mode-btn"
                        }`}
                    >
                      <a
                        href="https://drive.google.com/file/d/17_7ofulfbmFdUBOYlIhYvoVOiQjYjGhV/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                        className="touchBtn"
                      >
                        View Resume
                      </a>
                    </Button>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
