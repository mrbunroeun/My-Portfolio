import React from "react";
import "./Button.css";
import { Link } from "react-route-dom";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--mediam", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.include(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    <Link to="/sign-up" className="btn-mobile">
      <button
        className={`btn ${checkButtonSize} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
