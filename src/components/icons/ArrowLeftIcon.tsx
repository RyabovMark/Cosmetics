import React from "react";
import {IconProps} from "./interface";

export const ArrowLeftIcon = ({className, onClick}: IconProps): JSX.Element => {
  return (
    <svg
      onClick={onClick}
      className={className}
      height='20'
      viewBox='0 0 16 16'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
    >
      <path
        fill='#000000'
        d='M7.765 4.045a.75.75 0 10-1.03-1.09L2.237 7.203a.748.748 0 00-.001 1.093l4.499 4.25a.75.75 0 001.03-1.091L4.636 8.5h8.614a.75.75 0 000-1.5H4.636l3.129-2.955z'
      />
    </svg>
  );
};
