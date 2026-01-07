import React, { useEffect, useState } from "react";
import "./ProjectsModal.css";
import { motion, AnimatePresence } from "framer-motion";
import { PacmanLoader } from "react-spinners";
import ProjectCard from "../ProjectCard/ProjectCard";
import SocialMedia from "../../assets/Projects/SocialMedia.png";
import SocialMediaCover from "../../assets/Projects/Social Media Cover.png";
import ServiceExpressLogo from "../../assets/Projects/ServiceExpressLogo.jpg";
import WarehouseCover from "../../assets/Projects/WareHouseCover.png";
import SparingAppCover from "../../assets/Projects/SparingAppCover.png";
import AgriCaptureLogo from "../../assets/Projects/AgriCaptureLogo.png";
import AgriCaptureCover from "../../assets/Projects/AgriCaptureCover.png";
import ScriptChainHealthLogo from "../../assets/Projects/ScriptChainHealthLogo.svg";
import ScriptChainHealthCover from "../../assets/Projects/ScriptChainHealthCover.png";
import ProjectInfo from "../ProjectInfo/ProjectInfo";
import ReactIcon from "../../assets/ReactIcon.png";
import ChatApp from "../../assets/WebApp.png";
import MetaLogo from "../../assets/Projects/MetaLogo.png";
import AdvReact from "../../assets/Projects/AdvReactCert.png";
import UXUI from "../../assets/Projects/UX-UICert.png";
import UdemyLogo from "../../assets/Projects/UdemyLogo.png";
import WebDev from "../../assets/Projects/WebDevCert.png";
import MetaSpecializationFrontend from "../../assets/Projects/MetaFrontEndSpecialization.png";
import KitchenChaosLogo from "../../assets/KitchenChaosLogo.png";
import KitchenChaosCover from "../../assets/KitchenChaos.png";
import Esp32CamLogo from "../../assets/Esp32Logo.png";
import Esp32CamCover from "../../assets/Esp32.png";

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
      about:
        "My team and I collaboratively engineered a Power BI project that seamlessly integrates a three-dimensional representation of our warehouse infrastructure. Within this framework, we introduced a suite of advanced functionalities, including a robust search engine, workflow optimization tools, and comprehensive data analytics capabilities.",
      team: 2,
      duration: "< 1 months",
      toolsUsed: "PowerBI, SketchUp, 3D Modeling, 3DKI, DAX",
    },
    {
      id: 1,
      logo: ReactIcon,
      image: ChatApp,
      header: "Chat App",
      topic: "Social",
      type: "Website",
      company: "Personal Project",
      language: "English",
      languageLogo: "EN",
      platform: "Website / Mobile",
      time: "Aug 2023 - Sep 2023",
      about:
        "This React project serves as a practical application of my newly acquired skills. It's a website inspired from chatting devices, giving the ability to communicate with other users on the server.",
      team: 1,
      duration: "< 1 months",
      toolsUsed: "React, NodeJS, ExpressJS, Socket.Io, Git",
    },
    {
      id: 2,
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
      about:
        "A collaborative effort undertaken by my team and myself culminated in the meticulous creation of an entirely new landing page, originating from the ground up. This undertaking involved the seamless integration of an array of robust functionalities, including a versatile search engine, a dynamic blog posting system, streamlined job application procedures, and a host of other feature enhancements. Moreover, an entirely new suite of API calls was meticulously crafted within the backend infrastructure, effectively facilitating the secure and efficient transfer of data to the frontend, thereby fortifying both the integrity and security of the system.",
      team: 3,
      duration: "5 months",
      toolsUsed:
        "Angular, NodeJs, ExpressJS, RestAPI, Search Engine, MySQL, Git",
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
      about:
        "Conceived and executed the creation of an innovative landing page, characterized by its refined design and meticulous attention to detail. This new landing page seamlessly integrates comprehensive company information, fostering a heightened level of interactivity and other value-added features. As a result, user experience has been markedly elevated, contributing to an enhanced and engaging online interaction.",
      team: 1,
      duration: "2 months",
      toolsUsed: "Angular, NodeJS, Wordpress, Python, SQL, Git",
    },

    {
      id: 4,
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
      about:
        "My team and I have undertaken the development of a sophisticated MapboxGL application meticulously illustrating the geographic distribution of our corporate office locations. This endeavor has been enhanced with an array of functional augmentations, including the refinement of customer connectivity, meticulous error identification within stock placements, the systematic enhancement of said locations and more.",
      team: 2,
      duration: "4 months",
      toolsUsed:
        "Vue3, VueX, Python, FastAPI, MapBoxGL, Typesense, Redis, Docker, Motion, SQL, Git",
    },
    {
      id: 5,
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
      about: `This React project serves as a practical application of my newly acquired skills. It's a social media website with a variety of features, including secure login, profile management, content posting, and messaging capabilities. `,
      team: 1,
      duration: "1 months",
      toolsUsed:
        "React, NodeJS, ExpressJS, Redux, MongoDB, Socket.io, RestAPI, Framer Motion, Git",
    },
    {
      id: 6,
      logo: KitchenChaosLogo,
      image: KitchenChaosCover,
      header: "Kitchen Chaos",
      topic: "Game Dev",
      type: "Unity Game Development",
      company: "Personal Project",
      language: "English",
      languageLogo: "EN",
      platform: "PC",
      time: "Sep 2025 - Nov 2025",
      about: `Kitchen Chaos is a fast-paced cooking game developed in Unity using C#. Players prepare and deliver dishes under time pressure while managing multiple interactive game systems. This project was built by following a guided Unity tutorial and focuses on core gameplay mechanics and engine workflows.`,
      team: 1,
      duration: "2 months",
      toolsUsed: "Unity Engine, C#, OOP, Git",
    },
    {
      id: 7,
      logo: Esp32CamLogo,
      image: Esp32CamCover,
      header: "Home Security System",
      topic: "Security System",
      type: "MERN Stack Application",
      company: "Capstone Project",
      language: "English",
      languageLogo: "EN",
      platform: "PC",
      time: "Sep 2025 - Dec 2025",
      about: `Built a full-stack home security camera platform using the MERN stack, integrating multiple ESP32-CAM devices for live video streaming, snapshots, and remote control. The backend proxies and manages multiple cameras, supports recording via FFmpeg, and exposes a secure API consumed by a React dashboard. The system includes user authentication, real-time camera management, and a responsive web interface designed for monitoring, control, and future scalability.`,
      team: 2,
      duration: "3 months",
      toolsUsed:
        "MERN stack, ESP32-CAM, RESTful APIs, WebSockets, HTML, CSS, JavaScript, Git, JWT authentication",
    },
  ];

  const transitionProperties = startAnimation ? { marginLeft: "0" } : {};
  const Certifications = [
    {
      id: 0,
      logo: MetaLogo,
      image: MetaSpecializationFrontend,
      header: "Meta Front End Specialization",
      topic: "React Web Dev",
      type: "Certification",
    },
    {
      id: 1,
      logo: MetaLogo,
      image: AdvReact,
      header: "Advanced React",
      topic: "React Web Dev",
      type: "Certification",
    },
    {
      id: 2,
      logo: MetaLogo,
      image: UXUI,
      header: "Principles of UX/UI Design",
      topic: "UX/UI Design",
      type: "Certification",
    },
    {
      id: 3,
      logo: UdemyLogo,
      image: WebDev,
      header: "Web Developer Bootcamp 2022",
      topic: "Web Dev",
      type: "Certification",
    },
  ];
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
                  {ProjectCards.reverse().map((context) => (
                    <div
                      key={context.id}
                      onClick={() => {
                        setProject(context.id);
                        setStartAnimation(!startAnimation);
                      }}
                    >
                      <ProjectCard
                        hover={true}
                        logo={context.logo}
                        image={context.image}
                        header={context.header}
                        topic={context.topic}
                        type={context.type}
                      />
                    </div>
                  ))}
                </div>

                <hr />
                <h1>My Certifications</h1>
                <hr />
                <div className="projects">
                  {Certifications.map((context) => (
                    <div key={context.id}>
                      <ProjectCard
                        hover={false}
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
              object={ProjectCards.find((p) => p.id === project)}
              close={() => setStartAnimation(!startAnimation)}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
