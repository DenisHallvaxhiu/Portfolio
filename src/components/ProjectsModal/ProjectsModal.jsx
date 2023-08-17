import React, { useEffect, useState } from "react";
import "./ProjectsModal.css";
import { motion, AnimatePresence } from "framer-motion";
import { PacmanLoader } from "react-spinners";
import ProjectCard from "../ProjectCard/ProjectCard";
import SocialMedia from "../../assets/Projects/SocialMedia.png";
import SocialMediaCover from "../../assets/Projects/Social Media Cover.png";
import ServiceExpressLogo from "../../assets/Projects/ServiceExpressLogo.jpg"
import WarehouseCover from "../../assets/Projects/WareHouseCover.png"
import SparingAppCover from "../../assets/Projects/SparingAppCover.png"
import AgriCaptureLogo from "../../assets/Projects/AgriCaptureLogo.png"
import AgriCaptureCover from "../../assets/Projects/AgriCaptureCover.png"
import ScriptChainHealthLogo from "../../assets/Projects/ScriptChainHealthLogo.svg"
import ScriptChainHealthCover from "../../assets/Projects/ScriptChainHealthCover.png"
import NFL from "../../assets/NFL.svg";
import NFLImage from "../../assets/NFL_image.webp";
import ProjectInfo from "../ProjectInfo/ProjectInfo";

export default function ProjectsModal({ open, close, phone }) {
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
      logo: SocialMedia,
      image: SocialMediaCover,
      header: "Social Media React",
      topic: "Social",
      type: "Website Application",
      company: "Personal Project",
      language: "English",
      languageLogo: "EN",
      platform: "Website / Mobile",
      time: "Nov 2022 - Dec 2022",
      about:
        `This React project serves as a practical application of my newly acquired skills. It's a social media website with a variety of features, including secure login, profile management, content posting, and messaging capabilities. 
         The technologies harnessed for this project are both diverse and contemporary. Notable components include React for frontend development, Node.js along with Express.js for backend implementation, and MongoDB for efficient data management. Furthermore, the integration of sockets adds a real-time aspect to the messaging feature, enhancing user interaction and experience.`,
      team: 1,
      duration: "1 months",
    },
    {
      id: 1,
      logo: ServiceExpressLogo,
      image: WarehouseCover,
      header: "Warehouse App",
      topic: "3D Dev",
      type: "PowerBI",
      company: "Service Express",
      language: "English",
      languageLogo: "EN",
      platform: "PowerBi",
      time: "Apr 2023 - May 2023",
      about: "My team and I collaboratively engineered a Power BI project that seamlessly integrates a three-dimensional representation of our warehouse infrastructure. Within this framework, we introduced a suite of advanced functionalities, including a robust search engine, workflow optimization tools, and comprehensive data analytics capabilities.",
      team: 2,
      duration: "< 1 months",
    },
    {
      id: 2,
      logo: ServiceExpressLogo,
      image: SparingAppCover,
      header: "Geospatical App",
      topic: "Maps",
      type: "Website Application",
      company: "Service Express",
      language: "English",
      languageLogo: "EN",
      platform: "Website",
      time: "Apr 2023 - July 2023",
      about: "My team and I have undertaken the development of a sophisticated MapboxGL application meticulously illustrating the geographic distribution of our corporate office locations. This endeavor has been enhanced with an array of functional augmentations, including the refinement of customer connectivity, meticulous error identification within stock placements, the systematic enhancement of said locations and more.",
      team: 2,
      duration: "4 months",
    },
    {
      id: 3,
      logo: AgriCaptureLogo,
      image: AgriCaptureCover,
      header: "AgriCapture",
      topic: "Landing Page",
      type: "Website",
      company: "AgriCapture",
      language: "English",
      languageLogo: "EN",
      platform: "Website",
      time: "Oct 2022 - Dec 2022",
      about: "Conceived and executed the creation of an innovative landing page, characterized by its refined design and meticulous attention to detail. This new landing page seamlessly integrates comprehensive company information, fostering a heightened level of interactivity and other value-added features. As a result, user experience has been markedly elevated, contributing to an enhanced and engaging online interaction.",
      team: 1,
      duration: "2 months",
    },
    {
      id: 4,
      logo: ScriptChainHealthLogo,
      image: ScriptChainHealthCover,
      header: "ScriptChain Health",
      topic: "Landing Page",
      type: "Website",
      company: "ScriptChain Health",
      language: "English",
      languageLogo: "EN",
      platform: "Website",
      time: "Apr 2022 - Sep 2022",
      about: "A collaborative effort undertaken by my team and myself culminated in the meticulous creation of an entirely new landing page, originating from the ground up. This undertaking involved the seamless integration of an array of robust functionalities, including a versatile search engine, a dynamic blog posting system, streamlined job application procedures, and a host of other feature enhancements. Moreover, an entirely new suite of API calls was meticulously crafted within the backend infrastructure, effectively facilitating the secure and efficient transfer of data to the frontend, thereby fortifying both the integrity and security of the system.",
      team: 3,
      duration: "5 months",
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

          <div
            className={`projectInfo ${phone ? "phoneProjectInfo" : ""}`}
            style={transitionProperties}
          >
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
