import React from "react";
import "./css/experience.css";

const experiences = [
  {
    year: "2021 - 2022",
    title: "Software Developer",
    company: "Zory Board Software Solution",
    desc: `Spearheaded the development of scalable, high-performance UI components using React.js and Bootstrap. Focused on creating responsive, accessible, and visually appealing interfaces while optimizing app performance.`,
  },
  {
    year: "2019 - 2020",
    title: "Software Trainee",
    company: "Indium Software Company",
    desc: `Assisted in developing web interfaces with clean, intuitive designs using JavaScript, Bootstrap, and JSON. Strengthened front-end logic, bug resolution, and responsive design principles.`,
  },
];

const Experience = () => {
  return (
    <div className="common-container">
      <section className="experience-section" id="experience">
        <div className="allHeadings">
          <h1>Professional Experience</h1>
          <p>Crafting digital experiences with creativity, precision, and passion.</p>
        </div>

        <div className="exp-timeline">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`exp-card ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="exp-header">
                <div className="exp-role">
                  <h3> {exp.title}</h3>
                  <h4> {exp.company}</h4>
                </div>
                <div className="exp-year">
                  {exp.year}
                </div>
              </div>

              <div className="exp-content">
                <p>{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experience;
