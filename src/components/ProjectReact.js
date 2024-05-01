import React from 'react';
import { ProjectCard } from './ProjectCard';
import { Row } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import birthday from '../assets/react-img/1birthday.png';
import reviews from "../assets/react-img/2reviews.png";
import accordion from "../assets/react-img/3accor.png";
import tabs from "../assets/react-img/4tabs.png";
import grocery from "../assets/react-img/5grocery.png";
import navC from "../assets/react-img/6navC.png";
import modalSide from "../assets/react-img/7modalSide.png";
import foodCart from "../assets/react-img/8foodCart.png";
import todo from "../assets/react-img/9todo.png";
import cocktail from "../assets/react-img/10cocktail.png";

export const ProjectReact = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3
    },
    laptop:{
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 2
    },
    tablet: {
      breakpoint: { max: 768, min: 575 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 575, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };
  const reactProjects = [
    {
      title: "Birthday Reminder",
      description: "we will use React to render a list of data items, that is the birthdays of a few people.It tells a user if there is any birthday today, and also if there are any upcoming birthdays. Users can also view all the birthdays that they have saved.",
      imgUrl: birthday,
      demoLink: "https://1birthday-reminder-react.netlify.app/",
      gitLink: "https://github.com/Rajashree0316/1-birthday-reminder-react",
    },
    {
      title: "Reviews",
      description: " We will use react hooks and conditional rendering to render a list of reviews.This component is highly customizable and allows users to give reviews about products or services with precise and accurate values.",
      imgUrl: reviews,
      demoLink: "https://2reviews-react.netlify.app/",
      gitLink: "https://github.com/Rajashree0316/2-reviews-react",
    },
    {
      title: "Accordion",
      description: " We will use react hooks and conditional rendering to render a list of questions.An Accordion is a component which can show data in form of collapsing and expanding.",
      imgUrl: accordion,
      demoLink: "https://3accordion-react.netlify.app/",
      gitLink: "https://github.com/Rajashree0316/3-accordion-react",
    },
    
    {
      title: "Tabs",
      description: "Tabs are used in various applications, including dashboards, settings panels, and product pages, to help users navigate between different sections of information efficiently.Conditionally render the content based on the active tab state.",
      imgUrl: tabs,
      demoLink: "https://4tabs-react.netlify.app/",
      gitLink: "https://github.com/Rajashree0316/4-tabs-react",
    },
    {
      title: "Grocery-bud",
      description: "Grocery-bud helps users to manage their grocery shopping list efficiently by allowing users to add, edit, and delete grocery items, as well as mark items as purchased. The application provides a clean and intuitive user interface, making it easy for users to organize their shopping lists and stay on top of their grocery needs.",
      imgUrl: grocery,
      demoLink: "https://5grocery-bud-react.netlify.app/",
      gitLink: "https://github.com/Rajashree0316/5-grocery-bud-react",
    },
    {
      title: "Navbar",
      description: "A navigation bar component that provides links or menus to users, allowing them to navigate between different pages or sections of the application.",
      imgUrl: navC,
      demoLink: "https://6navbar-react.netlify.app/",
      gitLink: "https://github.com/Rajashree0316/6-navbar-react",
    },
    {
      title: "Modal-Sidebar",
      description: "Modals are implemented as components that are conditionally rendered based on certain triggers, such as a button click or a state change.Sidebars are used to display additional navigation links, settings, or auxiliary content without cluttering the main interface.",
      imgUrl:  modalSide,
      demoLink: "https://7modal-sidebar-react.netlify.app/",
      gitLink: "https://github.com/Rajashree0316/7-modal-sidebar-react",
    },
    {
      title: "Cart",
      description: "We will use react hooks to render a list of items to simulates the functionality of an online shopping platform, allowing users to browse products, add items to their cart, update quantities, and proceed to checkout.",
      imgUrl: foodCart,
      demoLink: "https://8cart-react.netlify.app/",
      gitLink: "https://github.com/Rajashree0316/8-cart-react",
    },
    {
      title: "React-TodoList",
      description: "We will use react hooks to render a list of items that allows users to CRUD operation.We can also add features such as the ability to add due dates, priorities, and categories.",
      imgUrl: todo,
      demoLink: "https://9todolist-react.netlify.app/",
      gitLink: "https://github.com/Rajashree0316/9-todolist-react",
    },
    {
      title: "Cocktails",
      description: "The application provides an intuitive user interface where users can search for cocktails by name, ingredient, or category, view detailed recipes, and even discover random cocktails for inspiration.The application fetches cocktail data from a third-party API (such as TheCocktailDB API) and dynamically renders the information on the frontend.",
      imgUrl:cocktail,
      demoLink: "https://10cocktails-react.netlify.app/",
      gitLink: "https://github.com/Rajashree0316/10-cocktails-react",
    },
  ];
  return (
    <>
      <Row>
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={false}
          showDots={false}
          ssr={true} 
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          removeArrowOnDeviceType={['tablet', 'mobile']}

        >
          {
            reactProjects.map((item, index) => {
              return (
                <div className="slider" key={index}>
                  <ProjectCard  {...item} />
                </div>
              )
            })
          }
        </Carousel>
      </Row>
    </>
  )
}

