import React from "react";
import logo from '../assets/images/logo.png'

const header = () => {
  return (
    <div>
      <div className="header">
        <div className="custom-container">
          <div className="header-wrp">
            <div className="header-brand">
              <img className="header-brand__img" src={logo} alt="hepsiburada logo" />
            </div>
            <div className="header-project">
              <h1 className="header-project__name ">Vote Challange</h1>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

export default header;