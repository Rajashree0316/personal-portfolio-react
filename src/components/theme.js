import "./css/theme.css";

const lightMode = {
  backgroundImage:
    "linear-gradient(90deg, rgba(156, 60, 102, 1) 0%, rgba(93, 137, 186, 1) 100%)",
  textColor: "#000000", // black text for light mode
  accentColor: "#ffb6c1",
};

const darkMode = {
  backgroundImage:
    "linear-gradient(90deg, rgba(154,79,112,0.01) 49%, rgba(20,16,16,1) 100%)",
  textColor: "#ffffff", // white text for dark mode
  accentColor: "#c27ba0",
};

const Theme = { darkMode, lightMode };
export default Theme;
