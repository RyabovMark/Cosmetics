import React from "react";
import "./style.scss";
import {NavLink} from "react-router-dom";
// import { FaArrowLeft } from 'react-icons/Fa';
import classNames from "classnames";

type BackBtnProp = {
  className?: string;
};
export const GoBackBtn = ({className}: BackBtnProp): JSX.Element => {
  const classes = classNames("btn-container", "hover-shadow", className);

  return (
    <NavLink to='..'>
      <div className={classes}>
        {/*<FaArrowLeft className="btn-container__icon" />*/}
        <span>To back page</span>
      </div>
    </NavLink>
  );
};
