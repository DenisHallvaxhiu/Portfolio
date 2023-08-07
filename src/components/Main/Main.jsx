import React from "react";
import { motion } from "framer-motion";
import "./Main.css";
import Project from "../../assets/Projects.png";
import Resume from "../../assets/PDFResume.png";
import Github from "../../assets/Github.png";
import LinkedIn from "../../assets/LinkedIn.png";
import Fullscreen from "../../assets/FullScreen.png";
import MacApple from "../../assets/MacApple.png";
import ResumePdf from "../../assets/Resume/Resume+Denis+Hallvaxhiu.pdf"

export default function Main() {
  const generateDelay = (index) => {
    return index * 0.1;
  };
  const test = () => {
    console.log("testing");
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
    window.open(ResumePdf, "_blank")
  };
  const apps = [
    {
      icon: Project,
      header: "Projects",
      shortcut: false,
      function: () => {
        test();
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
      shortcut: false,
      function: () => {
        openGithubPage();
      },
    },
    {
      icon: LinkedIn,
      header: "LinkedIn",
      shortcut: false,
      function: () => {
        openLinkedInPage();
      },
    },
    {
      icon: Fullscreen,
      header: "Fullscreen",
      shortcut: false,
      function: () => {
        console.log(apps[0].header);
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
          >
            <img src={content.icon} alt="" />
            <h3>{content.header}</h3>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
