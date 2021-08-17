import React, { useState } from "react";
import PropTypes from 'prop-types';
import './paginations.scss'

const Paginations = ({ postPerPage, totalPosts, paginate }) => {
  const [activePage, setActivePage] = useState(0)
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) { pageNumbers.push(i) }

  return (
    <div>
      <div className="paginations">
        {pageNumbers.map((number, index) => (
          <div key={number} className="paginations-item">
            <a onClick={() => { paginate(number); setActivePage(index) }} className={`paginations-link ${index == activePage ? "active" : ""}`}>
              {number}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

Paginations.propTypes = {
  postPerPage: PropTypes.number.isRequired,
  totalPosts: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired
};

export default Paginations;