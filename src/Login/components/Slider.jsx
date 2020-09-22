import React from "react";
import "./LoginForm.scss";

const Slider = (props) => {
  return (
    <div className={props.currentActive} onClick={props.onClick}>
      <div className="inner-container">
        <div className="text">
          <div className="message">{props.current}</div>
          <div>{props.current}</div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
