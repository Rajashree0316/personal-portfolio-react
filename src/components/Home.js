import { useState, useEffect, useCallback } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import headerImg from "../assets/img/coder.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import resume from "../documents/rajashree_asok_resume.pdf";

const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(0);
  const toRotate = ["Front-end Developer", "Web Developer"];
  const period = 2000;
  
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [delta,tick,text])

  const tick = useCallback(() => {
    let i = index % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex === 0 ? toRotate.length - 1 : prevIndex - 1); 
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(0);
      setDelta(500);
    } else {
      setIndex(prevIndex => (prevIndex + 1) % toRotate.length);
    }
  },[index, isDeleting, loopNum, period, setDelta, setIsDeleting, setIndex, setLoopNum, setText, text, toRotate]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my portfolio</span>
                  <h1>I'm Rajashree </h1>
                  <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Front-end Developer","Web Developer"]'>
                    <h3 className="wrap">{text}</h3></span>
                  <p>I am a passionate web developer with experience in building responsive and user-friendly web applications.</p>
                  <Button variant="light" className="touchBtn">
                  <a href={resume} target="_blank" rel="noReferrer">Resume</a>
                  
                  </Button>
            
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

    </section>
  );
}
export default Home;