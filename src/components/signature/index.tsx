import React from "react";
import "./style.scss";
import signature from "../../assets/signture.png";
import classNames from "classnames";

type SignatureProp = {
  className?: String;
};
export const Signature = ({ className }:SignatureProp):JSX.Element => {
  const classes = classNames("signature", { className });

  return <img src={signature} alt='sign' className={classes} />;
};
