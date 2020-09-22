import React, { useState } from "react";
import "./LoginForm.scss";
import Login from "./LoginSection/Login.jsx";
import Register from "./RegisterSection/Register.jsx";
import Slider from "./Slider";

const LoginForm = () => {
  const [isLogginActive, setisLogginActive] = useState(true);
  const switchLogginHandler = () => {
    setisLogginActive(!isLogginActive);
  };

  var current = isLogginActive ? "Register here" : "Login here";
  var currentMessage = isLogginActive ? "New with us?" : "Have an account?";
  var currentActive = isLogginActive ? "right-side left" : "right-side right";

  return (
    <div className="App">
      <div className="login">
        <div className="container">
          {isLogginActive && <Login />}
          {!isLogginActive && <Register />}
        </div>
        <Slider
          current={current}
          currentMessage={currentMessage}
          currentActive={currentActive}
          isLogginActive={isLogginActive}
          onClick={switchLogginHandler}
        />
      </div>
    </div>
  );
};

export default LoginForm;
