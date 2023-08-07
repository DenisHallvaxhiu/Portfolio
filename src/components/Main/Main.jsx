import React from "react";
import { motion } from "framer-motion";
import "./Main.css";
import Project from "../../assets/Projects.png";
import Resume from "../../assets/PDFResume.png";
import Github from "../../assets/Github.png";
import LinkedIn from "../../assets/LinkedIn.png";
import Fullscreen from "../../assets/FullScreen.png";
import MacApple from "../../assets/MacApple.png";

export default function Main() {

  const generateDelay = (index) =>{
    return index*0.1
  }

  const apps = [
    { icon: Project, header: "Projects", shortcut: false },
    { icon: Resume, header: "Resume", shortcut: false },
    { icon: Github, header: "Github", shortcut: false },
    { icon: LinkedIn, header: "LinkedIn", shortcut: false },
    { icon: Fullscreen, header: "Fullscreen", shortcut: false },
    { icon: MacApple, header: "Mac", shortcut: false },
  ];
  return (
    <main className="main">
      <div className="app-container">
        {apps.map((content, index) => (
          <motion.div 
            initial= {{scale:0}}
            animate= {{scale:1}}
            transition={{ duration:0.2, delay: generateDelay(index)}}
          >
            <img src={content.icon} alt="" />
            <h3>{content.header}</h3>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
