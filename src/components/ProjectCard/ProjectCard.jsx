import React from "react";
import "./ProjectCard.css";

export default function ProjectCard({ logo,image,header,topic,type }) {
  return (
    <div className="projectCard">
      <div className="header">
        <img src={logo} alt="" />
        <div>
          <h3>{header}</h3>
          <h4>{topic}</h4>
          <p>{type}</p>
        </div>
      </div>
      <div className="image">
        <img src={image} alt="" />
      </div>
    </div>
  );
}
