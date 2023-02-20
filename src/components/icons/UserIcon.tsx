import React from "react";
import { IconProps } from "./interface";

export const UserIcon = ({ className, onClick }: IconProps): JSX.Element => {
  return (
    <svg
      onClick={onClick}
      className={className}
      // width='800px'
      // height='25px'
      viewBox='0 0 24 24'
      fill='#555'
      // xmlns='http://www.w3.org/2000/svg'
    >
      <path
        // clip-rule='evenodd'
        d='m8.75001 7c0-1.79493 1.45509-3.25 3.24999-3.25s3.25 1.45507 3.25 3.25-1.4551 3.25-3.25 3.25-3.24999-1.45507-3.24999-3.25zm3.24999-4.75c-2.62334 0-4.74999 2.12665-4.74999 4.75s2.12665 4.75 4.74999 4.75c2.6234 0 4.75-2.12665 4.75-4.75s-2.1266-4.75-4.75-4.75zm-5.6865 16.1524c.98693-2.1566 3.16283-3.6524 5.6865-3.6524 2.5237 0 4.6996 1.4958 5.6865 3.6524.2078.4542.1134.8704-.1871 1.2142-.3195.3656-.873.6334-1.4994.6334h-7.99999c-.6264 0-1.17984-.2678-1.49941-.6334-.30047-.3438-.39492-.76-.1871-1.2142zm5.6865-5.1524c-3.13193 0-5.82838 1.8578-7.05046 4.5282-.48164 1.0525-.22026 2.0911.42167 2.8255.62282.7126 1.59835 1.1463 2.6288 1.1463h7.99999c1.0305 0 2.006-.4337 2.6288-1.1463.642-.7344.9033-1.773.4217-2.8255-1.2221-2.6704-3.9185-4.5282-7.0505-4.5282z'
        fill='#555'
        //fill-rule='evenodd'
      />
    </svg>
  );
};
