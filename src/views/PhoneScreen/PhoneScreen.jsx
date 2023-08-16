import React from "react";
import "./PhoneScreen.css";
import Background from "../../assets/AndroidWallpaper.jpg";
import Widget from "../../components/Widget/Widget";
import FooterPhone from "../../components/FooterPhone/FooterPhone";
import Main from "../../components/Main/Main"

export default function PhoneScreen() {
  return (
    <div className="appPhone">
      <img src={Background} alt="Background" />
      <div className="phone-content">
        <div>
          <Widget />
          <Main phone={true}/>
          <FooterPhone />
        </div>
      </div>
    </div>
  );
}
