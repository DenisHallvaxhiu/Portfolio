import React from "react";
import "./ProjectInfo.css";
import BackArrow from "../../assets/BackArrow.png";
import CompanyImage from "../../assets/CompanyIcon.png";
import CategoryImage from "../../assets/CategoryIcon.png";
import PlatformWeb from "../../assets/PlatformWeb.png";

export default function ProjectInfo({ close, object }) {
  return (
    <div className="projectInfo">
      <div className="backButton">
        <img onClick={close} src={BackArrow} alt="asds" />
      </div>
      <div className="header">
        <img src={object.logo} alt="" />
        <div className="headerText">
          <h1>{object.header}</h1>
          <h3>{object.topic}</h3>
          <p>{object.type}</p>
        </div>
      </div>
      <hr />
      <div className="info">
        <div className="info-item">
          <h2>Company</h2>
          <img src={CompanyImage} alt="" />
          <p>{object.company}</p>
        </div>
        <div className="info-item">
          <h2>Language</h2> 
          <h1>{object.languageLogo}</h1>
          <p>{object.language}</p>
        </div>
        <div className="info-item">
          <h2>Category</h2>
          <img src={CategoryImage} alt="" />
          <p>{object.topic}</p>
        </div>
        <div className="info-item">
          <h2>Platform</h2>
          <img src={PlatformWeb} alt="" />
          <p>{object.platform}</p>
        </div>
      </div>
      <hr />
      <div className="about">
        <h1>About this project</h1>
        <span>{object.time}</span>
        <p>{object.about}</p>
        <span>Tools utilized: {object.toolsUsed}</span>
      </div>
      <hr />
      <div className="detailInfo">
        <h1>Information</h1>
        <div className="detailInfo-container">
          <div className="detailInfo-item">
            <span>Role</span>
            <p>Web Developer</p>
          </div>

          <div className="detailInfo-item">
            <span>Client</span>
            <p>{object.company}</p>
          </div>
          <div className="detailInfo-item">
            <span>Team Size</span>
            <p>{object.team}</p>
          </div>
          <div className="detailInfo-item">
            <span>Duration</span>
            <p>{object.duration}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
