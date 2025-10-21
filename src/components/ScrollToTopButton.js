import React from "react";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import "./css/scroll.css";

const ScrollToTopButton = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0,left:0, behavior: "smooth" });
  };

  return (
    <button onClick={handleClick} >
        <MdOutlineKeyboardDoubleArrowUp className="topBtn"/></button>
  );
};

export default ScrollToTopButton;