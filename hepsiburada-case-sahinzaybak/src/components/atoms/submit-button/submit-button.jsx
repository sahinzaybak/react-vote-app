import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import addImage from '../../../assets/images/add.svg'

import './submit-button.scss'

const Button = ({ name, link }) => {
  return (
    <div className="submit-button">
      <Link to={link} className="add-link">
        <img src={addImage} alt="" />
        <button data-testid="add-button" className="add-link__button">{name}</button>
      </Link>
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Button;