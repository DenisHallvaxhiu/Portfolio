import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./WindowsScreen.css"
import Background from "../../assets/Blue Ribbon Window 11.jpg";
import Footer from "../../components/Footer/Footer";
import Main from "../../components/Main/Main";
import Project from "../../assets/Projects.png";
import Resume from "../../assets/PDFResume.png";
import Github from "../../assets/Github.png";
import LinkedIn from "../../assets/LinkedIn.png";
import Profile from "../../assets/Profile.png";
import Phone from "../../assets/Phone.png";
import Mail from "../../assets/Mail.png";
import Share from "../../assets/Share.png";
import ResumePdf from "../../assets/Resume/Resume+Denis+Hallvaxhiu.pdf";
import Up from "../../assets/Up.png";

function WindowsScreen() {
  const [startMenu, setStartMenu] = useState(false);
  const [startMenuExpanded, setStartMenuExpanded] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  let startMenuRef = useRef();

  const recipientEmail = "dhallvaxhiu999@gmail.com";

  const handleEmailClick = () => {
    window.location.href = `mailto:${recipientEmail}`;
  };

  const share = () => {
    if (navigator.share) {
      navigator.share({
        text: "Portfolio Website - Denis Hallvaxhiu",
        // Change when pushed
        url: "https://denis-hallvaxhiu-portfolio.netlify.app/",
        title: "Portfolio"
      })
    }
  };

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
    <div className="appWindow">
      <div>
        <img src={Background} alt="Background" />
        <Main check={openModal} close={() => setOpenModal(false)} />
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
              style={{ height: startMenuExpanded ? "500px" : "180px" }}
              ref={startMenuRef}
              className="startMenu"
            >
              <div className="upper">
                <div className="application-container">
                  <div
                    onClick={() => {
                      setOpenModal(true);
                      setTimeout(() => setOpenModal(false), 100);
                    }}
                    className="applications"
                  >
                    <img src={Project} alt="" />
                    <h2>Project</h2>
                  </div>
                  <div onClick={openResumeInPage} className="applications">
                    <img src={Resume} alt="" />
                    <h2>Resume</h2>
                  </div>
                  <div onClick={openGithubPage} className="applications">
                    <img src={Github} alt="" />
                    <h2>Github</h2>
                  </div>
                  <div onClick={openLinkedInPage} className="applications">
                    <img src={LinkedIn} alt="" />
                    <h2>LinkedIn</h2>
                  </div>
                </div>
                {startMenuExpanded && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="expandedMenu"
                  >
                    <hr />
                    <div>
                      <div>
                        <p>Phone</p>
                        <p>+1 215-696-7706</p>
                      </div>
                    </div>
                    <hr />
                    <div>
                      <div>
                        <p>Email</p>
                        <span>dhallvaxhiu999@gmail.com</span>
                      </div>
                    </div>
                    <hr />
                    <div>
                      <div>
                        <p>Experience</p>
                        <span>2 years</span>

                        <p>Skills</p>
                        <span>
                          Flutter, Dart UI/UX JavaScript, TypeScript NodeJS,
                          Express, Ionic MongoDB, Firebase, Parse Server HTML,
                          CSS, CI/CD, REST, Git
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
              <div
                className="lower"
                onClick={() => setStartMenuExpanded(!startMenuExpanded)}
              >
                <div>
                  <img src={Profile} alt="profile" />
                  <div>
                    <p>Denis Hallvaxhiu</p>
                    <span>Web Developer</span>
                  </div>
                </div>
                {startMenuExpanded ? (
                  <div>
                    <img src={Phone} alt="Phone" />
                    <img onClick={handleEmailClick} src={Mail} alt="Mail" />
                    <img onClick={share} src={Share} alt="Share" />
                  </div>
                ) : (
                  <div>
                    <img src={Up} alt="Phone" />
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default WindowsScreen;
