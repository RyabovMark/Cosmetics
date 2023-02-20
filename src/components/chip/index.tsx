import React from 'react';
import './style.scss';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

type ChipProp = {
  img: any;
  text: string;
  classname?: string;
  to: string;
};
export const Chip = ({ img, text, classname, to }:ChipProp):JSX.Element => {
  const classes = classNames('chip__container', classname);

  return (
    <div className={classes}>
      <NavLink to={to}>
        <img src={img} alt={text} />
        <span>{text}</span>
      </NavLink>
    </div>
  );
};
