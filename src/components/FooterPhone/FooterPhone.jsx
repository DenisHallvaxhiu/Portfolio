import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./FooterPhone.css";
import Phone from "../../assets/PhoneMobile.png";
import Gmail from "../../assets/Gmail.png";
import Contacts from "../../assets/Contacts.png";
import PhoneCall from "../../assets/Phone.png";
import Mail from "../../assets/Mail.png";
import Share from "../../assets/Share.png";

export default function FooterPhone() {
  const [contactMenu, setContactMenu] = useState(true);
  let contactMenuRef = useRef();

  const openPhoneApp = () => {
    const telLink = `tel:2156967706`;
    window.open(telLink, "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:dhallvaxhiu999@gmail.com`;
  };

  useEffect(() => {
    let handler = (e) => {
      if (contactMenuRef.current) {
        if (!contactMenuRef.current.contains(e.target)) {
          setContactMenu(false);
        }
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <>
      <div className="phone-footer">
        <div onClick={openPhoneApp}>
          <img src={Phone} alt="icons" />
        </div>
        <div>
          <img onClick={handleEmailClick} src={Gmail} alt="icons" />
        </div>
        <div>
          <img
            onClick={() => setContactMenu(!contactMenu)}
            src={Contacts}
            alt="icons"
          />
        </div>
      </div>
      <AnimatePresence>
        {contactMenu && (
          <div className="contactMenu-container">
            <motion.div
              ref={contactMenuRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              exit={{ opacity: 0 }}
              // className="contactMenu-container"
            >
              <h2>Denis Hallvaxhiu</h2>
              <h3>Web Developer</h3>
              <div className="icons">
                <div>
                  <img src={PhoneCall} alt="icon" />
                  <span>Call</span>
                </div>
                <div>
                  <img src={Mail} alt="icon" />
                  <span>Mail</span>
                </div>
                <div>
                  <img src={Share} alt="icon" />
                  <span>Share</span>
                </div>
              </div>
              <span>Phone</span>
              <p>+1 (215) 696-7706</p>
              <hr />
              <span>Email</span>
              <p>dhallvaxhiu999@gmail.com</p>
              <hr />
              <span>Experience</span>
              <p>2 years</p>
              <hr />
              <span>Skills</span>
              <p>Html Css Javascript UI/UX</p>
              <p>React Vue3 Angular Streamlit</p>
              <p>NodeJS ExpressJS FastAPI Flask</p>
              <p>SQL MangoDB Git</p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
