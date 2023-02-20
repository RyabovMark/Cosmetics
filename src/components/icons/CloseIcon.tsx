import React from "react";
import { IconProps } from "./interface";

export const CloseIcon = ({ className, onClick }: IconProps): JSX.Element => {
  return (
    <svg
      onClick={onClick}
      className={className}
      height='20px'
      fill='#555'
      viewBox='0 0 48 48'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>close</title>
      <g id='Layer_2' data-name='Layer 2'>
        <g id='invisible_box' data-name='invisible box'>
          <rect width='48' height='48' fill='none' />
        </g>
        <g id='icons_Q2' data-name='icons Q2'>
          <path d='M26.8,24,37.4,13.5a2.1,2.1,0,0,0,.2-2.7,1.9,1.9,0,0,0-3-.2L24,21.2,13.4,10.6a1.9,1.9,0,0,0-3,.2,2.1,2.1,0,0,0,.2,2.7L21.2,24,10.6,34.5a2.1,2.1,0,0,0-.2,2.7,1.9,1.9,0,0,0,3,.2L24,26.8,34.6,37.4a1.9,1.9,0,0,0,3-.2,2.1,2.1,0,0,0-.2-2.7Z' />
        </g>
      </g>
    </svg>
  );
};
