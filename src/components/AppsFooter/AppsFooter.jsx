import React from "react";
import "./AppsFooter.css";

import StartMenu from "../../assets/startMenu.png"
import MicrosoftEdge from "../../assets/MicrosoftEdge.png"
import Projects from "../../assets/Projects.png"
import Email from "../../assets/Email.png"
import Calendar from "../../assets/Calendar.png"



export default function AppsFooter({click}) {

  const recipientEmail = 'dhallvaxhiu999@gmail.com';

  const handleEmailClick = () => {
    window.location.href = `mailto:${recipientEmail}`;
  };
  

  return (
    <div className="AppsFooter">
      <button>
        <img onClick={click} src={StartMenu} alt="" />
        <span>Start Menu</span>
      </button>
      <button>
        <img src={MicrosoftEdge} alt="" />
        <span>Visit my website</span>
      </button>
      <button onClick={handleEmailClick}>
        <img src={Email} alt="" />
        <span>Send me an email</span>
      </button>
      <button>
        <img src={Calendar} alt="" />
        <span>Let's schedule</span>
      </button>
    </div>
  );
}
