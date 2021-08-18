import React from "react";
import PropTypes from 'prop-types';
import './page-title.scss'

const PageTitle = ({ title }) => {
  return (
   <>
   <h2 data-testid="page-title" className="page-title">{title}</h2>
   </>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;