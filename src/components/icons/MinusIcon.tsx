import React from "react";
import { IconProps } from "./interface";

export const MinusIcon = ({ className, onClick }: IconProps): JSX.Element => {
  return (
    <svg
      onClick={onClick}
      className={className}
      width='20px'
      viewBox='3 0 12 16'
    >
      <path
        fill='#555'
        d='M3.5 7.75A.75.75 0 014.25 7h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75z'
      />
    </svg>
  );
};
