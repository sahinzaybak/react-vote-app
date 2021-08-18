import React from "react";
import PropTypes from 'prop-types';
import './error-message.scss'

const ErrorMessage = ({message, isActive}) => {
  return (
    <>
      <p data-testid="error-message" className={`error ${isActive ? "active" : ""}`}>{message}</p>
    </>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
  isActive:PropTypes.bool.isRequired
};

export default ErrorMessage;