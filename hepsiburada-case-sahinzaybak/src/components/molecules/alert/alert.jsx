import React from "react";
import { useSelector } from 'react-redux'
import './alert.scss'

const Alert = ({ text, status }) => {
  let isActiveAlert = useSelector(state => state.alert.isActiveAlert)
  return (
    <>
      {isActiveAlert &&
        <div className={`alert ${isActiveAlert ? "active" : ""}`}>
          <div className="alert-inner">
            {status == "remove" && <p><span className="alert-inner__text">{text}</span> removed</p>}
            {status == "success" && <p><span className="alert-inner__text">{text}</span> added</p>}
          </div>
        </div>
      }
    </>
  );
};


export default Alert;