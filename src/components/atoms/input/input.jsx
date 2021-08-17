import React from "react";
import './input.scss'

const Input = ({title, ...inputProps}) => {
  return (
    <div className="input">
      <p className="input-title">{title}:</p>
      <input {...inputProps} />
    </div>
  );
};

export default Input;