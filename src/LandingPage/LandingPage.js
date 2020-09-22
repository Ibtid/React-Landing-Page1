import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="container">
      <nav class="navbar">
        <ul>
          <li>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#service">Service</a>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <section id="home">
        <h1>Welcome To My Site</h1>
        <p>Get Started</p>
        <Link to="/LoginForm">
          <button className="LandingPageLogin" type="button">
            Login
          </button>
        </Link>
      </section>
      <section id="about">
        <h1>About</h1>
        <p>Get Started</p>
      </section>
      <section id="service">
        <h1>Service</h1>
        <p>Get Started</p>
      </section>
      <section id="contact">
        <h1>Contact</h1>
        <p>Get Started</p>
      </section>
    </div>
  );
};

export default LandingPage;
