import React from "react";
import "./style.scss";
import classNames from "classnames";

interface ButtonProps {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  reverse?: boolean;
  disabled?: boolean;
}

export const Button = ({
  className,
  onClick,
  text,
  children,
  icon,
  reverse = false,
  disabled,
  ...arg
}:ButtonProps):JSX.Element => {
  const classes = classNames("button", "hover-shadow", className, { reverse ,disabled}, );
  return (
    <button className={classes} onClick={onClick} {...arg}>
      <span>{text}</span> {icon}
    </button>
  );
};
