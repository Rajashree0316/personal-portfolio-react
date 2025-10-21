import React from 'react';
import { Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { DiHtml5, DiCss3, DiJavascript1, DiReact } from "react-icons/di";
import "./css/projectCard.css";

export const ProjectCard = ({
  title, description, imgUrl, demoLink, gitLink,
  tech = [], features = [], index = 0, className = "",
  customWidth = "auto", customHeight = "auto"
}) => {
  const direction = index % 2 === 0 ? -100 : 100;
  const mainTechColor = tech.includes("react")
    ? "#61dafb"
    : tech.includes("js")
    ? "#f0db4f"
    : tech.includes("css")
    ? "#264de4"
    : tech.includes("html")
    ? "#e34c26"
    : "#888";

  return (
    <Col xs={12} sm={6} md={6} lg={4} className={`mb-4 ${className}`} 
         style={{ minWidth: customWidth, maxWidth: customWidth, height: customHeight }}>
      <motion.div
        initial={{ opacity: 0, x: direction }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
        whileHover={{ scale: 1.05, rotate: 1, boxShadow: `0 10px 30px ${mainTechColor}55` }}
      >
        <Card className="project-card">
          <div className="project-thumbnail">
            <Card.Img variant="top" src={imgUrl} alt={title} />
          </div>
          <Card.Body className="project-card-body">
            <Card.Title>{title}</Card.Title>
            <Card.Text className="desc">{description}</Card.Text>
           <div>
            <h4 className="features-list">Key Features:</h4>
             <ul className="features-list">
              {features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
           </div>
            <div className="tech-icons">
              {tech.includes("html") && <DiHtml5 color="#e34c26" />}
              {tech.includes("css") && <DiCss3 color="#264de4" />}
              {tech.includes("js") && <DiJavascript1 color="#f0db4f" />}
              {tech.includes("react") && <DiReact color="#61dafb" />}
            </div>
          </Card.Body>
          <Card.Footer className="footer-btns">
            <Button className="demo-btn" variant="outline-primary" href={demoLink} target="_blank">
              <CgWebsite /> Demo
            </Button>
            <Button className="github-btn" href={gitLink} target="_blank">
              <BsGithub /> GitHub
            </Button>
          </Card.Footer>
        </Card>
      </motion.div>
    </Col>
  );
};
