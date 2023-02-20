import React, {useEffect, useRef, useState} from "react";
import "./style.scss";
import classNames from "classnames";
import {ArrowLeftIcon} from "../icons/ArrowLeftIcon";
import {ArrowRightIcon} from "../icons/ArrowRightIcon";
import {Card} from "../card";
import {useGetProductsByCategoryQuery} from "../../services/api/products.api";
import {ProductCardLoader} from "../loaders/product-card";

interface CarouselProps {
  className?: string;
  category: string;
  sortedElement: number;
}

export const Carousel = ({
                           className,
                           category,
                           sortedElement
                         }: CarouselProps): JSX.Element => {
  const {data, isLoading} = useGetProductsByCategoryQuery(category);
  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderLineRef = useRef<HTMLDivElement>(null);
  const sliderItemRef = useRef<HTMLDivElement>(null);

  const [sliderLinePos, setSliderLinePos] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [sliderLineWidth, setSliderLineWidth] = useState(0);

  const classes = classNames("slider", className);
  const emptyArray = new Array(8).fill("");
  let filteredData=data?.filter(item => item.id !== sortedElement)

  useEffect(() => {
    if (data) {
      const handleResize = () => {
        if (sliderRef && sliderRef.current) {
          setSliderWidth(sliderRef.current.offsetWidth);
        }
        if (sliderItemRef && sliderItemRef.current && filteredData) {
          setSliderLineWidth(
            sliderItemRef.current.offsetWidth * filteredData.length +
            (filteredData.length - 1) * 20
          );
        }
      };

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, [data]);

  useEffect(() => {
    if (sliderLineRef.current !== null)
      sliderLineRef.current.style.transform = `translate(-${sliderLinePos}px)`;
  }, [sliderLinePos]);

  const prev = (): void => {
    if (sliderLinePos - sliderWidth > 0) {
      setSliderLinePos(sliderLinePos - sliderWidth);
    } else {
      setSliderLinePos(0);
    }
  };

  const next = (): void => {
    if (sliderLinePos + sliderWidth * 2 <= sliderLineWidth) {
      setSliderLinePos(sliderLinePos + sliderWidth);
    } else {
      setSliderLinePos(sliderLineWidth - sliderWidth);
    }
  };

  return (
    <>
      <div className='carousel-header'>
        <h2 className='bigger-text carousel-header__title'>
          We care about your beauty, so we recommend that you consider other
          products category of <span>{category}</span>
        </h2>
        <div className='carousel-header__buttons-group'>
          <button onClick={prev} disabled={sliderLinePos === 0}>
            <ArrowLeftIcon/>
          </button>
          <button
            onClick={next}
            disabled={sliderLinePos + sliderWidth === sliderLineWidth}
          >
            <ArrowRightIcon/>
          </button>
        </div>
      </div>
      <div className={classes} ref={sliderRef}>
        <div className='slider-line' ref={sliderLineRef}>
          {isLoading &&
            emptyArray.map((_, index) => (
              <div key={index * Math.random()}>
                <ProductCardLoader/>
              </div>
            ))}
          {!isLoading &&
            filteredData?.map((item) => (
              <div key={item.id} ref={sliderItemRef}>
                <Card {...item} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
