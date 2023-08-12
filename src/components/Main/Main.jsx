import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Main.css";
import Project from "../../assets/Projects.png";
import Resume from "../../assets/PDFResume.png";
import Github from "../../assets/Github.png";
import LinkedIn from "../../assets/LinkedIn.png";
import Fullscreen from "../../assets/FullScreen.png";
import MacApple from "../../assets/MacApple.png";
import Shortcut from "../../assets/Shortcut.png";
import ResumePdf from "../../assets/Resume/Resume+Denis+Hallvaxhiu.pdf";
import ProjectsModal from "../ProjectsModal/ProjectsModal";

export default function Main({ check }) {
  const [fullScreen, setFullScreen] = useState(false);
  const [openProjectModal, setOpenProjectModal] = useState(false);
  const [count, setCount] = useState(0);

  const generateDelay = (index) => {
    return index * 0.1;
  };
  const openProjectModalFunc = () => {
    setOpenProjectModal(true);
  };
  const fullScreenFunc = () => {
    if (document.fullscreenElement === null) {
      document.body.requestFullscreen();
      setFullScreen(true);
    } else {
      document.exitFullscreen();
      setFullScreen(false);
    }
  };
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
  useEffect(() => {
    if (count > 1) {
      setOpenProjectModal(true);
    } else {
      setCount(prevCount => prevCount + 1);
    }
    /* eslint-disable */
  }, [check]);

  const apps = [
    {
      icon: Project,
      header: "Projects",
      shortcut: true,
      function: () => {
        openProjectModalFunc();
      },
    },
    {
      icon: Resume,
      header: "Resume",
      shortcut: false,
      function: () => {
        openResumeInPage();
      },
    },
    {
      icon: Github,
      header: "Github",
      shortcut: true,
      function: () => {
        openGithubPage();
      },
    },
    {
      icon: LinkedIn,
      header: "LinkedIn",
      shortcut: true,
      function: () => {
        openLinkedInPage();
      },
    },
    {
      icon: Fullscreen,
      header: !fullScreen ? "Fullscreen" : "Exit Fullscreen",
      shortcut: false,
      function: () => {
        fullScreenFunc();
      },
    },
    {
      icon: MacApple,
      header: "Mac",
      shortcut: false,
      function: () => {
        console.log(apps[0].header);
      },
    },
  ];
  return (
    <main className="main">
      <div className="app-container">
        {apps.map((content, index) => (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2, delay: generateDelay(index) }}
            onClick={content.function}
            key={index}
          >
            <img src={content.icon} alt="" />
            {content.shortcut && (
              <img className="shortcut" src={Shortcut} alt="" />
            )}
            <h3>{content.header}</h3>
          </motion.div>
        ))}
      </div>
      <ProjectsModal
        open={openProjectModal}
        close={() => setOpenProjectModal(false)}
      />
    </main>
  );
}
