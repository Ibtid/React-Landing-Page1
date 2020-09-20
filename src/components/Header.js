import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <h1>Online Shop</h1>
      <p>The safest place to shop</p>
      <div>
        <button type="button">Get Started</button>
      </div>
      <div className="image">
        <img
          src="https://raw.githubusercontent.com/AldoHub/React-Landing-Page/master/public/assets/online-shop.png"
          alt="loading"
        />
      </div>
    </header>
  );
};

export default Header;
