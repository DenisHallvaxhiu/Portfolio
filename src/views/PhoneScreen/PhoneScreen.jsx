import React from "react";
import "./PhoneScreen.css";
import Background from "../../assets/AndroidWallpaper.jpg";
import Widget from "../../components/Widget/Widget";
import FooterPhone from "../../components/FooterPhone/FooterPhone";

export default function PhoneScreen() {
  return (
    <div className="appPhone">
      <img src={Background} alt="Background" />
      <div className="phone-content">
        <div>
          <Widget />
          <FooterPhone />
        </div>
      </div>
    </div>
  );
}
