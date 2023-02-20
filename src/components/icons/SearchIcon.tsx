import React from "react";
import { IconProps } from "./interface";

export const SearchIcon = ({ className, onClick }: IconProps): JSX.Element => {
  return (
    <svg
      onClick={onClick}
      className={className}
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M15 15L10.9556 10.9556M12.6667 6.83333C12.6667 10.055 10.055 12.6667 6.83333 12.6667C3.61167 12.6667 1 10.055 1 6.83333C1 3.61167 3.61167 1 6.83333 1C10.055 1 12.6667 3.61167 12.6667 6.83333Z'
        stroke='#555555'
        // stroke-width='1.5'
        // stroke-linecap='round'
        // stroke-linejoin='round'
      />
    </svg>
  );
};
