import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import leftArrow from '../../../assets/images/left-arrow.svg'
import './back-page.scss'

const BackPage = ({title, link}) => {
  return (
    <Link to={link} className="back-page">
      <img className="back-page__icon" src={leftArrow} alt="" />
      <p className="back-page__title">{title}</p>
    </Link>
  );
};

BackPage.propTypes = {
  title: PropTypes.string.isRequired,
  link:PropTypes.string.isRequired
};

export default BackPage;