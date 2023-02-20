import React from "react";
import "./style.scss";
import classNames from "classnames";

interface TabsProps {
  children: React.ReactNode;
  onClick: React.MouseEventHandler;
  className?: string;
}

interface TabProps {
  value: number;
  label: string;
  index: number;
  className?: string;
}

interface TabPanelProps {
  value: number;
  index: number;
  children: React.ReactNode;
  className?: string;
}

export const Tabs = ({ className, children, onClick }:TabsProps):JSX.Element => {
  const classes = classNames("tabs__buttons", className);
  return (
    <div onClick={onClick} className={classes}>
      {children}
    </div>
  );
};

export const Tab = ({ label, value, index, className }:TabProps):JSX.Element => {
  const style =
    index === value
      ? "buttons__btn-active"
      : "buttons__btn-disabled hover-shadow";
  const classes = classNames("buttons__btn", style, className);
  return (
    <button id={String(index)} className={classes}>
      {label}
    </button>
  );
};

export const TabPanel = ({
  index,
  value,
  className,
  children,
}:TabPanelProps):JSX.Element => {
  const style =
    index === value ? "content__panel-active" : "content__panel-disabled";
  const classes = classNames("content__panel", style, { className });
  return <div className={classes}>{children}</div>;
};
