import React from 'react';
import { ProjectCard } from './ProjectCard';
import { Row } from "react-bootstrap";
import soon from "../assets/mern-img/soon.jpg";

export const ProjectMern = () => {
  const mernProjects = [
    {
      title: "React Blog",
      description: "Upcoming MERN project: Blog with React frontend, Node.js backend, and MongoDB database.",
      imgUrl: soon,
      demoLink: "#",
      gitLink: "#",
      tech: ["react", "js"]
    }
  ];
  return (
    <Row>
      {mernProjects.map((proj, idx) => <ProjectCard key={idx} {...proj} />)}
    </Row>
  )
}
