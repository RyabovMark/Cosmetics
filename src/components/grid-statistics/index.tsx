import React, { Key } from "react";
import "./style.scss";
import classNames from "classnames";

interface Item {
  id: Key;
  stat: String;
  description: String;
}

type GridProps = {
  className: string;
  data: Item[];
};
export const GridStatistics = ({ className, data }:GridProps):JSX.Element => {
  const classes = classNames("grid", className);

  return (
    <div className={classes}>
      {data.map((item) => (
        <div key={item.id} className='grid__item'>
          <h1 className='item__stat'>{item.stat}</h1>
          <p className='item__description'>{item.description}</p>
        </div>
      ))}
    </div>
  );
};
