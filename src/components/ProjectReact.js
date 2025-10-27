import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { DiHtml5, DiCss3, DiJavascript1, DiReact } from "react-icons/di";
import { SiReactrouter } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { FaRegWindowMaximize, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "./css/projectReact.css";

import birthday from "../assets/react-img/1birthday.png";
import reviews from "../assets/react-img/2reviews.png";
import accordion from "../assets/react-img/3accor.png";
import tabs from "../assets/react-img/4tabs.png";
import grocery from "../assets/react-img/5grocery.png";
import navC from "../assets/react-img/6navC.png";
import modalSide from "../assets/react-img/7modalSide.png";
import foodCart from "../assets/react-img/8foodCart.png";
import todo from "../assets/react-img/9todo.png";
import cocktail from "../assets/react-img/10cocktail.png";

export const ProjectReact = ({ sortOrder, direction = "right" }) => {
  const projects = [
    {
      id: 1,
      title: "Birthday Reminder",
      description: "React app that lists birthdays and upcoming events.",
      imgUrl: birthday,
      demoLink: "https://1birthday-reminder-react.netlify.app/",
      gitLink: "https://github.com/Rajashree0316/1-birthday-reminder-react.git",
      tech: ["react", "js", "html", "css"],
      features: ["List birthdays", "Add/Delete events", "React hooks"]
    },
    {
      id: 2,
      title: "Reviews",
      description: "React hooks-based reviews component.",
      imgUrl: reviews,
      demoLink: "https://2reviews-react.netlify.app/",
      gitLink: "https://github.com/Rajashree0316/2-reviews-react.git",
      tech: ["react", "js", "html", "css"],
      features: ["Add reviews", "Update reviews", "Conditional rendering"]
    },
    {
      id: 3,
      title: "Accordion",
      description: "Simple Accordion UI built with React hooks.",
      imgUrl: accordion,
      demoLink: "https://3accordion-react.netlify.app/",
      gitLink: "https://github.com/Rajashree0316/3-accordion-react.git",
      tech: ["react", "js", "bootstrap", "html", "css"],
      features: ["Expandable sections", "Clean UI"]
    },
    {
      id: 4,
      title: "Tabs",
      description: "Multi-tab UI with conditional rendering in React.",
      imgUrl: tabs,
      demoLink: "https://4tabs-react.netlify.app/",
      gitLink: "https://github.com/Rajashree0316/4-tabs-react.git",
      tech: ["react", "js", "bootstrap", "html", "css"], features: ["Switch between tabs", "Dynamic content"]
    },
    {
      id: 5,
      title: "Grocery-bud",
      description: "Manage grocery list with add/edit/delete.",
      imgUrl: grocery,
      demoLink: "https://5grocery-bud-react.netlify.app/",
      gitLink: "https://github.com/Rajashree0316/5-grocery-bud-react.git",
      tech: ["react", "js", "html", "css"],
      features: ["Add items", "Edit items", "Delete items"]
    },
    {
      id: 6,
      title: "Navbar",
      description: "Reusable React navigation bar component.",
      imgUrl: navC,
      demoLink: "https://6navbar-react.netlify.app/",
      gitLink: "https://github.com/Rajashree0316/6-navbar-react.git",
      tech: ["react", "js", "router", "html", "css"],
      features: ["Responsive navbar", "Reusable component"]
    },
    {
      id: 7,
      title: "Modal-Sidebar",
      description: "Modals and sidebars via conditional rendering.",
      imgUrl: modalSide,
      demoLink: "https://7modal-sidebar-react.netlify.app/",
      gitLink: "https://github.com/Rajashree0316/7-modal-sidebar-react.git",
      tech: ["react", "js", "modal", "html", "css"],
      features: ["Modal windows", "Sidebar toggle"]
    },
    {
      id: 8,
      title: "Cart",
      description: "React cart simulation using context and hooks.",
      imgUrl: foodCart,
      demoLink: "https://8cart-react.netlify.app/",
      gitLink: "https://github.com/Rajashree0316/8-cart-react.git",
      tech: ["react", "js", "router", "html", "css"],
      features: ["Add to cart", "Remove items", "Calculate total"]
    },
    {
      id: 9,
      title: "React-TodoList",
      description: "Todo list app with CRUD operations using React hooks.",
      imgUrl: todo,
      demoLink: "https://9todolist-react.netlify.app/",
      gitLink: "https://github.com/Rajashree0316/9-todolist-react.git",
      tech: ["react", "js", "html", "css"],
      features: ["Add tasks", "Mark complete", "Delete tasks"]
    },
    {
      id: 10,
      title: "Cocktails",
      description: "Search and explore cocktails using third-party API.",
      imgUrl: cocktail,
      demoLink: "https://10cocktails-react.netlify.app/",
      gitLink: "https://github.com/Rajashree0316/10-cocktails-react.git",
      tech: ["react", "js", "router", "html", "css"],
      features: ["Search cocktails", "API integration", "Explore details"]
    },
  ];

  const sortedProjects = sortOrder === "newest" ? [...projects].sort((a, b) => b.id - a.id) : [...projects].sort((a, b) => a.id - b.id);

  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const speed = 1; // smaller = slower

    let animationFrame;

    const slide = () => {
      if (!isPaused) {
        slider.scrollLeft += direction === "right" ? speed : -speed;

        // loop when end is reached
        if (direction === "right" && slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
          slider.scrollLeft = 0;
        }
        if (direction === "left" && slider.scrollLeft <= 0) {
          slider.scrollLeft = slider.scrollWidth - slider.clientWidth;
        }
      }
      animationFrame = requestAnimationFrame(slide);
    };

    slide();

    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused, direction]);


  return (
    <div className="react-project-slider-wrapper">
      <div
        className="react-project-slider"
        ref={sliderRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {sortedProjects.map((proj, index) => (
          <motion.div
            key={proj.id}
            className="react-project-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="project-thumbnail">
              <img src={proj.imgUrl} alt={proj.title} />
            </div>
            <div className="project-card-body">
              <h3>{proj.title}</h3>
              <p className="desc">{proj.description}</p>
              <div className="features-heading">Key Features</div>
              <ul className="features-list">
                {proj.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
              <div className="tech-react-icons">
                {proj.tech.includes("html") && <DiHtml5 style={{ color: "#e34c26" }} title="HTML" />}
                {proj.tech.includes("css") && <DiCss3 style={{ color: "#264de4" }} title="CSS" />}
                {proj.tech.includes("js") && <DiJavascript1 style={{ color: "#f0db4f" }} title="JS" />}
                {proj.tech.includes("react") && <DiReact style={{ color: "#61dafb" }} title="React" />}
                {proj.tech.includes("router") && <SiReactrouter style={{ color: "#ca4245" }} title="Router" />}
                {proj.tech.includes("bootstrap") && <BsBootstrap style={{ color: "#563d7c" }} title="Bootstrap" />}
                {proj.tech.includes("modal") && <FaRegWindowMaximize style={{ color: "#00bcd4" }} title="Modal" />}
              </div>
              <div className="footer-btns">
                <a href={proj.demoLink} target="_blank" rel="noreferrer" className="demo-btn">
                  <FaExternalLinkAlt /> Demo
                </a>
                <a href={proj.gitLink} target="_blank" rel="noreferrer" className="github-btn">
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
