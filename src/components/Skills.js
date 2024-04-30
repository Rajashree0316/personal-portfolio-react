import React from "react";
import { Col, Row } from "react-bootstrap";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3,IoLogoJavascript,IoLogoGithub} from "react-icons/io";
import {FaReact, FaGitAlt, FaBootstrap } from "react-icons/fa";
import { SiRedux,SiJson} from "react-icons/si";
import { DiResponsive } from "react-icons/di";



const Skills = () =>{
    return (
      <section className="Skills" id="skills">
        <div className="allHeadings">
        <h1>SKILLS</h1>
        <p>I enjoy diving into and learning new things. 
          </p>
          <p>Here's a list of technologies I've worked with</p>
        </div> 
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <TiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoJavascript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaReact/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGitAlt />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < FaBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiResponsive />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJson/>
      </Col>
    </Row>
          
      </section>
    );
  }
  export default Skills;
  