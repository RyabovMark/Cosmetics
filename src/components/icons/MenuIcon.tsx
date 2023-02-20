import React from "react";
import { IconProps } from "./interface";

export const MenuIcon = ({ className, onClick }: IconProps): JSX.Element => {
  return (
    <svg
      onClick={onClick}
      className={className}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='m4.25 8c0-.41421.33579-.75.75-.75h14c.4142 0 .75.33579.75.75s-.3358.75-.75.75h-14c-.41421 0-.75-.33579-.75-.75zm0 4c0-.4142.33579-.75.75-.75h14c.4142 0 .75.3358.75.75s-.3358.75-.75.75h-14c-.41421 0-.75-.3358-.75-.75zm.75 3.25c-.41421 0-.75.3358-.75.75s.33579.75.75.75h14c.4142 0 .75-.3358.75-.75s-.3358-.75-.75-.75z'
        fill='#555'
      />
    </svg>
  );
};
