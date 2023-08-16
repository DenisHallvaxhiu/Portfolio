import React, { useEffect, useState } from "react";
import "./ProjectsModal.css";
import { motion, AnimatePresence } from "framer-motion";
import { PacmanLoader } from "react-spinners";
import ProjectCard from "../ProjectCard/ProjectCard";
import NBA from "../../assets/nba-logo.jpg";
import NBAImage from "../../assets/nba-image.avif";
import PGALogo from "../../assets/PGA_Tour_logo.png";
import PGAImage from "../../assets/PGA_Tour_image.jpg";
import MLBLogo from "../../assets/MLB.png";
import MLBImage from "../../assets/MLB_Image.png";
import SoccerLogo from "../../assets/Soccer.png";
import SoccerImage from "../../assets/Soccer_Image.webp";
import NFL from "../../assets/NFL.svg";
import NFLImage from "../../assets/NFL_image.webp";
import ProjectInfo from "../ProjectInfo/ProjectInfo";

export default function ProjectsModal({ open, close,phone }) {
  const [loading, setLoading] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);
  const [project, setProject] = useState(0);
 

  useEffect(() => {
    if (open) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  }, [open]);

  const ProjectCards = [
    {
      id: 0,
      logo: NBA,
      image: NBAImage,
      header: "National Basketball Association",
      topic: "Sports",
      type: "Website Application",
      company: "Service Express",
      language: "English",
      languageLogo: "EN",
      platform: "Website",
      time: "Jan 2023 - May 2023",
      about: "Live results and more about ......",
      team: 1,
      duration : "4 months"
    },
    {
      id: 1,
      logo: PGALogo,
      image: PGAImage,
      header: "PGA TOUR",
      topic: "Sports",
      type: "Website Application",
      company: "Service Express",
      language: "English",
      languageLogo: "EN",
      platform: "Website",
      time: "Jan 2023 - May 2023",
      about: "Live results and more about ......",
      team: 1,
      duration : "4 months"
    },
    {
      id: 2,
      logo: MLBLogo,
      image: MLBImage,
      header: "Major League Baseball",
      topic: "Sports",
      type: "Website Application",
      company: "Service Express",
      language: "English",
      languageLogo: "EN",
      platform: "Website",
      time: "Jan 2023 - May 2023",
      about: "Live results and more about ......",
      team: 1,
      duration : "4 months"
    },
    {
      id: 3,
      logo: SoccerLogo,
      image: SoccerImage,
      header: "UEFA Champions League",
      topic: "Sports",
      type: "Website Application",
      company: "Service Express",
      language: "English",
      languageLogo: "EN",
      platform: "Website",
      time: "Jan 2023 - May 2023",
      about: "Live results and more about ......",
      team: 1,
      duration : "4 months"
    },
    {
      id: 4,
      logo: NFL,
      image: NFLImage,
      header: "National Football League",
      topic: "Sports",
      type: "Website Application",
      company: "Service Express",
      language: "English",
      languageLogo: "EN",
      platform: "Website",
      time: "Jan 2023 - May 2023",
      about: "Live results and more about ......",
      team: 1,
      duration : "4 months"
    },
  ];

  const transitionProperties = startAnimation ? { marginLeft: "0" } : {};

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ ease: "easeOut", duration: 0.2 }}
          className="modal"
          style={{
            overflowY: startAnimation ? "visible" : "",
          }}
        >
          <button
            onClick={() => {
              setStartAnimation(false);
              close();
            }}
            type="button"
            className="btn-close"
          >
            <span className="icon-cross"></span>
            <span className="visually-hidden">X</span>
          </button>
          <div className="modal-div">
            {loading ? (
              <PacmanLoader size={40} color="#36d7b7" />
            ) : (
              <div className="project-container">
                <h1>My Projects</h1>
                <hr />
                <div className="projects">
                  {ProjectCards.map((context) => (
                    <div
                      key={context.id}
                      onClick={() => {
                        setProject(context.id);
                        setStartAnimation(!startAnimation);
                      }}
                    >
                      <ProjectCard
                        logo={context.logo}
                        image={context.image}
                        header={context.header}
                        topic={context.topic}
                        type={context.type}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className={`projectInfo ${phone ? "phoneProjectInfo": ""}`} style={transitionProperties}>
            <ProjectInfo
              object={ProjectCards[project]}
              close={() => setStartAnimation(!startAnimation)}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
