import React, { useEffect, useState, useMemo} from "react";
import { motion } from "framer-motion";
import { DiHtml5, DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGitAlt, FaGithub, FaReact, FaBootstrap } from "react-icons/fa6";
import { SiRedux, SiJson, SiPostman, SiVite, SiNetlify, SiBitbucket, SiExpress, SiMongodb } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import "./css/skills.css";

const Skills = () => {
  const frontendSkills = [
    { icon: <DiHtml5 />, name: "HTML5", color: "#E34F26" },
    { icon: <DiCss3 />, name: "CSS3", color: "#1572B6" },
    { icon: <IoLogoJavascript />, name: "JavaScript (ES6+)", color: "#F7DF1E" },
    { icon: <FaReact />, name: "React.js", color: "#61DAFB" },
    { icon: <SiRedux />, name: "Redux Toolkit", color: "#764ABC" },
    { icon: <FaBootstrap />, name: "Bootstrap", color: "#7952B3" },
    { icon: <SiJson />, name: "JSON / APIs", color: "#F4A261" },
  ];

  const tools = [
    { icon: <BiLogoVisualStudio />, name: "VS Code", color: "#0078D7" },
    { icon: <FaGitAlt />, name: "Git", color: "#F05032" },
    { icon: <FaGithub className="github"/>, name: "GitHub", color: "#090909ff" },
    { icon: <SiBitbucket />, name: "Bitbucket", color: "#0052CC" },
    { icon: <SiPostman />, name: "Postman", color: "#FF6C37" },
    { icon: <SiVite />, name: "Vite", color: "#646CFF" },
    { icon: <SiNetlify />, name: "Netlify", color: "#00C7B7" },
  ];

  const mernSkills = useMemo(() => [
    { name: "MongoDB", icon: <SiMongodb />, color: "#4DB33D", level: 30 },
    { name: "Express.js", icon: <SiExpress />, color: "#FFFFFF", level: 20 },
    { name: "React.js", icon: <FaReact />, color: "#61DAFB", level: 85 },
    { name: "Node.js", icon: <SiVite />, color: "#8CC84B", level: 40 }, // Node icon placeholder
  ],[]);

  const [shuffledFrontend, setShuffledFrontend] = useState(frontendSkills);
  const [shuffledTools, setShuffledTools] = useState(tools);
  const [progress, setProgress] = useState(mernSkills.map(() => 0));

  // Shuffle frontend/tools
  useEffect(() => {
    const interval = setInterval(() => {
      setShuffledFrontend(prev => [...prev].sort(() => Math.random() - 0.5));
      setShuffledTools(prev => [...prev].sort(() => Math.random() - 0.5));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Animate radial progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => prev.map((val, i) => (val < mernSkills[i].level ? val + 1 : val)));
    }, 15);
    return () => clearInterval(interval);
  }, [mernSkills]);

  const renderCards = (items) =>
    items.map((skill, i) => (
      <motion.div
        className="tech-card"
        key={i}
        whileHover={{
          scale: 1.1,
          rotate: 2,
          boxShadow: `0 0 20px ${skill.color}, 0 0 30px ${skill.color}80`,
        }}
      >
        <div className="tech-icon" style={{ color: skill.color }}>
          {skill.icon}
        </div>
        <span>{skill.name}</span>
      </motion.div>
    ));

  return (
    <div className="common-container">
      <section className="Skills" id="skills">
        <div className="allHeadings">
          <h1>TECH STACK</h1>
          <p>Building creative and interactive web experiences with evolving technologies.</p>
        </div>

        <div className="skill-category">
          <h2>Frontend Development</h2>
          <div className="tech-grid">{renderCards(shuffledFrontend)}</div>
        </div>

        <div className="skill-category">
          <h2>Tools & Platforms</h2>
          <div className="tech-grid">{renderCards(shuffledTools)}</div>
        </div>

        <div className="skill-category">
          <h2>Exploring MERN Stack</h2>
          <div className="progress-row">
            {mernSkills.map((skill, i) => (
              <div className="progress-card" key={i}>
                <motion.div
                  className="radial-progress"
                  style={{
                    "--progress": progress[i] + "%",
                    "--color": skill.color,
                  }}
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <div className="progress-icon">{skill.icon}</div>
                  <span className="progress-value">{progress[i]}%</span>
                </motion.div>
                <span className="progress-label">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
