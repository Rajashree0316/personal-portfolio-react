import React from 'react';
import drum from '../assets/js-img/drum.png';
import expense from "../assets/js-img/expense.png";
import gallery from "../assets/js-img/gallery.png";
import qrCode from "../assets/js-img/qrCode.png";
import quiz from "../assets/js-img/quiz.png";
import random from "../assets/js-img/random.png";
import stopwatch from "../assets/js-img/stopwatch.png";
import { ProjectCard } from './ProjectCard';
import {Row} from "react-bootstrap";


export const ProjectJS = () => {
    
    const javascriptProjects = [
        {
          title: "Drum Machine",
          description: "The HTML code is used to create the structure of the drum machine, the CSS code is used to style the drum machine, and the JavaScript code is used to make the drum machine work.",
          imgUrl: drum,
          demoLink:"https://drum-kit-javascript1.netlify.app/",
          gitLink:"https://github.com/Rajashree0316/Javascript_Projects/tree/main/Drum_Machine",
        },
        {
          title: "Expense Tracker",
          description: "A basic expense tracker web page using JavaScript which can be useful in keeping a record of the expenditure where we maintain a list of expenses along with individual and total amounts. Just enter a name and amount and you can store all data together",
          imgUrl: expense,
          demoLink:"https://expense-tracker-javascipt2.netlify.app/",
          gitLink:"https://github.com/Rajashree0316/Javascript_Projects/tree/main/Expense_Tracker",
        },
        {
          title: "Image Gallery",
          description: "An image gallery is a common and useful component for displaying multiple images in a visually appealing manner.",
          imgUrl: gallery,
          demoLink:"https://image-gallery-javascript3.netlify.app/",
          gitLink:"https://github.com/Rajashree0316/Javascript_Projects/tree/main/Image_Gallery",
        },
        {
          title: "QR Code Generator",
          description: "Use of library such as QRcode. js, which allows you to generate QR codes in the browser. The library works by creating an HTML canvas element and drawing the QR code on it.",
          imgUrl: qrCode,
          demoLink:"https://qr-code-javascript4.netlify.app/",
          gitLink:"https://github.com/Rajashree0316/Javascript_Projects/tree/main/QR_Code_Generator",
        },
        {
          title: "Quiz App",
          description: " The quiz application will contain questions followed by a total score shown at the end of the quiz. The score will increase based on the correct answers given.",
          imgUrl: quiz,
          demoLink:"https://quiz-app-javascript5.netlify.app/",
          gitLink:"https://github.com/Rajashree0316/Javascript_Projects/tree/main/Quiz_App",
        },
        {
          title: "Quote Generator",
          description: "A Random Quote Generator is capable of pulling quotes randomly from an API, a database, or simply from an array.",
          imgUrl: random,
          demoLink:"https://random-quote-javascript6.netlify.app/",
          gitLink:"https://github.com/Rajashree0316/Javascript_Projects/tree/main/Quote_Generator",
        },
        {
            title: "StopWatch",
            description: "A stopwatch is a timekeeping device that measures the amount of time that elapses between two events.The StopWatch will have the Start, Stop, and Reset.",
            imgUrl: stopwatch,
            demoLink:"https://stopwatch-javascript7.netlify.app/",
            gitLink:"https://github.com/Rajashree0316/Javascript_Projects/tree/main/StopWatch",
          },
      ];
  return (
    <Row>
    {
      javascriptProjects.map((javascriptProjects, index) => {
        return (
          <ProjectCard
            key={index}
            {...javascriptProjects}
            />
        )
      })
    }
  </Row>
  )
}
