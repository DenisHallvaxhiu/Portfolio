import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import Background from "./assets/Blue Ribbon Window 11.jpg";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Project from "./assets/Projects.png";
import Resume from "./assets/PDFResume.png";
import Github from "./assets/Github.png";
import LinkedIn from "./assets/LinkedIn.png";
import ResumePdf from "./assets/Resume/Resume+Denis+Hallvaxhiu.pdf";

function App() {
  const [startMenu, setStartMenu] = useState(true);
  const [startMenuExpanded, setStartMenuExpanded] = useState(false);
  let startMenuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (startMenuRef.current) {
        if (!startMenuRef.current.contains(e.target)) {
          setStartMenu(false);
          setStartMenuExpanded(false);
        }
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []); // Empty dependency array to ensure the effect runs only once

  const openLinkedInPage = () => {
    window.open(
      "https://www.linkedin.com/in/denis-hallvaxhiu-0bb86a226/",
      "_blank"
    );
  };
  const openGithubPage = () => {
    window.open("https://github.com/DenisHallvaxhiu", "_blank");
  };

  const openResumeInPage = () => {
    window.open(ResumePdf, "_blank");
  };

  return (
    <div className="app">
      <div>
        <img src={Background} alt="Background" />
        <Main close={() => console.log("first")} />
        <Footer
          open={() => {
            setStartMenu(!startMenu);
          }}
        />
        {startMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="startMenu-container"
          >
            <div
              style={{ height: startMenuExpanded ? "600px" : "180px" }}
              ref={startMenuRef}
              className="startMenu"
            >
              <div className="upper">
                <div className="applications">
                  <img src={Project} alt="" />
                  <h2>Project</h2>
                </div>
                <div className="applications">
                  <img src={Resume} alt="" />
                  <h2>Resume</h2>
                </div>
                <div className="applications">
                  <img src={Github} alt="" />
                  <h2>Github</h2>
                </div>
                <div className="applications">
                  <img src={LinkedIn} alt="" />
                  <h2>LinkedIn</h2>
                </div>
              </div>
              <div
                className="lower"
                onClick={() => setStartMenuExpanded(!startMenuExpanded)}
              ></div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default App;
