import React from "react";
import "./AppsFooter.css";

import StartMenu from "../../assets/startMenu.png"
import MicrosoftEdge from "../../assets/MicrosoftEdge.png"
import Email from "../../assets/Email.png"
import Calendar from "../../assets/Calendar.png"



export default function AppsFooter({click}) {

  const recipientEmail = 'dhallvaxhiu999@gmail.com';

  const handleEmailClick = () => {
    window.location.href = `mailto:${recipientEmail}`;
  };

  const openWebsite = () =>{
    // Change the link when in production
    window.open("https://denis-hallvaxhiu-portfolio.netlify.app/", "_blank")
  }
  const openSchedule = () => {
    window.open("https://calendly.com/denis-hallvaxhiu/30min", "_blank")
  }

  return (
    <div className="AppsFooter">
      <button>
        <img onClick={click} src={StartMenu} alt="" />
        <span>Start Menu</span>
      </button>
      <button>
        <img onClick={openWebsite} src={MicrosoftEdge} alt="" />
        <span>Visit my website</span>
      </button>
      <button onClick={handleEmailClick}>
        <img src={Email} alt="" />
        <span>Send me an email</span>
      </button>
      <button>
        <img onClick={openSchedule} src={Calendar} alt="" />
        <span>Let's schedule</span>
      </button>
    </div>
  );
}
