import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="LandingMain">
      <div className="Landingbox1"></div>
      <div className="Landingbox2">
        <div className="Landingtext">
          Extreme <br /> UI DESIGN
        </div>
        <div className="LandingButton">
          <Link to="/LoginForm">
            <button className="LandingGetStartedButton">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
