import React, { useEffect, useRef } from "react";
import "./style.scss";
import classNames from "classnames";

interface ProductDescriptionProps {
  url: string;
  children: React.ReactNode;
  columnReverse?: boolean;
  className?: string;
}

export const ProductDescription = ({
  url,
  children,
  columnReverse,
  className,
}: ProductDescriptionProps): JSX.Element => {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const classes = classNames("product-desc", { columnReverse }, className);

  useEffect(() => {
    if (imageContainerRef.current !== null) {
      imageContainerRef.current.style.backgroundImage = `url(${url})`;
    }
  }, [url]);

  return (
    <div className={classes}>
      <div className='product-desc__text-container'>{children}</div>
      <div className='product-desc__image-container' ref={imageContainerRef} />
    </div>
  );
};
