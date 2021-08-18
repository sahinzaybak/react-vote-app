import React from "react";
import './button.scss'

const Button = ({ name, ...buttonProps }) => {
  return (
    <button className="button" {...buttonProps}> {name} </button>
  );
};

export default Button;