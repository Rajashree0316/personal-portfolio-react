import React, { useMemo } from 'react';
import { ProjectCard } from './ProjectCard';
import drum from '../assets/js-img/drum.png';
import expense from "../assets/js-img/expense.png";
import gallery from "../assets/js-img/gallery.png";
import qrCode from "../assets/js-img/qrCode.png";
import quiz from "../assets/js-img/quiz.png";
import random from "../assets/js-img/random.png";
import stopwatch from "../assets/js-img/stopwatch.png";
import ticTacToe from "../assets/js-img/tic-tac-toe.png";
import newsApp from "../assets/js-img/news.png";
import memoryGame from "../assets/js-img/memory.png";
import rpsGame from "../assets/js-img/rock.png";
import bmiCalculator from "../assets/js-img/bmi.png";
import carGame from "../assets/js-img/car.png";


import "./css/projectJS.css";

const projects = [
  {
    title: "Drum Machine",
    description: "Play sounds with key presses. Fun interactive soundboard with responsive design.",
    imgUrl: drum,
    demoLink: "https://drum-kit-javascript1.netlify.app/",
    gitLink: "https://github.com/Rajashree0316/Javascript_Projects/tree/main/Drum_Machine",
    tech: ["html", "css", "js"],
    features: ["Sound effects", "Keyboard control", "Responsive UI", "Simple design"],
    rating: 4.8,
    date: "2024-01-01",
  },
  {
    title: "Expense Tracker",
    description: "Track expenses and totals easily. Manage budgets efficiently with local storage.",
    imgUrl: expense,
    demoLink: "https://expense-tracker-javascipt2.netlify.app/",
    gitLink: "https://github.com/Rajashree0316/Javascript_Projects/tree/main/Expense_Tracker",
    tech: ["html", "css", "js"],
    features: ["Add expenses", "Delete items", "Track balance", "Local storage"],
    rating: 4.5,
    date: "2024-02-10",
  },
  {
    title: "Image Gallery",
    description: "Display images in a gallery layout. Responsive grid with lightbox effect.",
    imgUrl: gallery,
    demoLink: "https://image-gallery-javascript3.netlify.app/",
    gitLink: "https://github.com/Rajashree0316/Javascript_Projects/tree/main/Image_Gallery",
    tech: ["html", "css", "js"],
    features: ["Lightbox", "Responsive layout", "Grid display", "Dynamic loading"],
    rating: 4.3,
    date: "2023-12-15",
  },
  {
    title: "QR Code Generator",
    description: "Generate QR codes dynamically. Simple UI to quickly share any text or link.",
    imgUrl: qrCode,
    demoLink: "https://qr-code-javascript4.netlify.app/",
    gitLink: "https://github.com/Rajashree0316/Javascript_Projects/tree/main/QR_Code_Generator",
    tech: ["html", "css", "js"],
    features: ["Instant generation", "Custom input", "Download option", "Clean UI"],
    rating: 4.9,
    date: "2024-03-01",
  },
  {
    title: "Quiz App",
    description: "Multiple-choice quiz with scoring. Randomized questions and countdown timer.",
    imgUrl: quiz,
    demoLink: "https://quiz-app-javascript5.netlify.app/",
    gitLink: "https://github.com/Rajashree0316/Javascript_Projects/tree/main/Quiz_App",
    tech: ["html", "css", "js"],
    features: ["Score system", "Random questions", "Timer", "Responsive"],
    rating: 4.7,
    date: "2024-01-20",
  },
  {
    title: "Quote Generator",
    description: "Random quotes generator. Fetch quotes via API with smooth UI and refresh.",
    imgUrl: random,
    demoLink: "https://random-quote-javascript6.netlify.app/",
    gitLink: "https://github.com/Rajashree0316/Javascript_Projects/tree/main/Quote_Generator",
    tech: ["html", "css", "js"],
    features: ["API-based quotes", "Tweet option", "Smooth UI", "Auto-refresh"],
    rating: 4.2,
    date: "2023-11-25",
  },
  {
    title: "StopWatch",
    description: "Start/Stop/Reset stopwatch. Minimal and responsive timer application.",
    imgUrl: stopwatch,
    demoLink: "https://stopwatch-javascript7.netlify.app/",
    gitLink: "https://github.com/Rajashree0316/Javascript_Projects/tree/main/StopWatch",
    tech: ["html", "css", "js"],
    features: ["Start/Stop", "Reset", "Responsive", "Minimal UI"],
    rating: 4.4,
    date: "2024-03-10",
  },
  {
    title: "Tic Tac Toe",
    description: "Classic Tic Tac Toe game with two-player mode. Fun and responsive design.",
    imgUrl: ticTacToe,
    demoLink: "https://tic-tac-toe-javascript8.netlify.app/",
    gitLink: "https://github.com/Rajashree0316/Javascript_Projects/tree/main/Tic_Tac_Toe",
    tech: ["html", "css", "js"],
    features: ["Two-player mode", "Responsive design", "Win detection", "Reset game"],
    rating: 4.6,
    date: "2024-04-01",
  },
  {
    title: "News App",
    description: "Fetches latest news using API. Clean UI with categorized news sections.",
    imgUrl: newsApp,
    demoLink: "https://newsapp-javascript9.netlify.app/",
    gitLink: "https://github.com/Rajashree0316/Javascript_Projects/tree/main/News_App",
    tech: ["html", "css", "js", "API"],
    features: ["API-based news", "Category filter", "Responsive UI", "Read more link"],
    rating: 4.5,
    date: "2024-05-10",
  },
  {
    title: "Memory Game",
    description: "Flip cards to match pairs. Fun memory improvement game with timer.",
    imgUrl: memoryGame,
    demoLink: "https://memory-game-javascript10.netlify.app/",
    gitLink: "https://github.com/Rajashree0316/Javascript_Projects/tree/main/Memory_Game",
    tech: ["html", "css", "js"],
    features: ["Flip cards", "Match pairs", "Timer", "Score tracking"],
    rating: 4.4,
    date: "2024-06-05",
  },
  {
    title: "Rock Paper Scissors",
    description: "Play Rock Paper Scissors against the computer. Simple game with score counter.",
    imgUrl: rpsGame,
    demoLink: "https://rps-game-javascript11.netlify.app/",
    gitLink: "https://github.com/Rajashree0316/Javascript_Projects/tree/main/Rock_Paper_Scissors",
    tech: ["html", "css", "js"],
    features: ["Play against AI", "Score counter", "Responsive UI", "Simple design"],
    rating: 4.3,
    date: "2024-03-20",
  },
  {
    title: "BMI Calculator",
    description: "Calculate Body Mass Index (BMI) instantly. Minimal UI and instant results.",
    imgUrl: bmiCalculator,
    demoLink: "https://bmi-calculator-javascript12.netlify.app/",
    gitLink: "https://github.com/Rajashree0316/Javascript_Projects/tree/main/BMI_Calculator",
    tech: ["html", "css", "js"],
    features: ["Instant calculation", "Responsive UI", "Minimal design", "Validation included"],
    rating: 4.2,
    date: "2024-02-28",
  },
  {
    title: "Car Game",
    description: "Simple car racing game using keyboard controls. Track your score and avoid obstacles.",
    imgUrl: carGame,
    demoLink: "https://car-game-javascript13.netlify.app/",
    gitLink: "https://github.com/Rajashree0316/Javascript_Projects/tree/main/Car_Game",
    tech: ["html", "css", "js"],
    features: ["Keyboard controls", "Score tracking", "Obstacle avoidance", "Responsive canvas"],
    rating: 4.1,
    date: "2024-01-15",
  },
];
export const ProjectJS = ({ sortOrder }) => {

  const sortedProjects = useMemo(() => {
    const sorted = [...projects];
    switch (sortOrder) {
      case "newest":
        return sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
      case "highest":
        return sorted.sort((a, b) => b.rating - a.rating);
      case "lowest":
        return sorted.sort((a, b) => a.rating - b.rating);
      case "mostRelevant":
      default:
        return sorted;
    }
  }, [sortOrder]);

  return (
    <div className="pinterest-grid">
      {sortedProjects.map((proj, i) => (
        <ProjectCard key={i} index={i} {...proj} className="js-project-card" />
      ))}
    </div>
  );
};
