import React, {useEffect, useRef, useState} from "react";
import "./style.scss";
import classNames from "classnames";
import {useGetProductsByCategoryQuery} from "../../services/api/products.api";
import {Card} from "../card";
import {ArrowLeftIcon} from "../icons/ArrowLeftIcon";
import {ArrowRightIcon} from "../icons/ArrowRightIcon";
import {Link} from "react-router-dom";
import {scrollTo} from "../footer";
import {ProductCardLoader} from "../loaders/product-card";

type Category =
  | "face cream"
  | "body cream"
  | "cosmetics sets"
  | "eye cream"
  | "men`s cosmetics";

interface ProductsPreviewCarouselProps {
  category: Category;
  imgPreviewUrl: string;
  reverse?: boolean;
  className?: string;
}

export const ProductsPreviewCarousel = ({
                                          category,
                                          imgPreviewUrl,
                                          reverse = false,
                                          className = "",
                                        }: ProductsPreviewCarouselProps): JSX.Element => {
  const logoRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const carouselLineRef = useRef<HTMLDivElement>(null);
  const sliderItemRef = useRef<HTMLDivElement>(null);

  const [sliderLinePos, setSliderLinePos] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [sliderLineWidth, setSliderLineWidth] = useState(0);

  const {data, isLoading} = useGetProductsByCategoryQuery(category);
  const classes = classNames("products-preview", className, {reverse});
  const emptyArray = new Array(6).fill("");

  useEffect(() => {
    if (logoRef.current !== null) {
      logoRef.current.style.backgroundImage = `url(${imgPreviewUrl})`;
    }
  }, [logoRef.current]);

  useEffect(() => {
    const handleResize = () => {
      if (carouselRef && carouselRef.current) {
        setSliderWidth(carouselRef.current.offsetWidth);
      }
      if (sliderItemRef && sliderItemRef.current && data) {
        setSliderLineWidth(
          sliderItemRef.current.offsetWidth * data.length +
          (data.length - 1) * 20
        );
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [carouselRef.current, sliderItemRef.current, data]);

  useEffect(() => {
    if (carouselLineRef.current !== null)
      carouselLineRef.current.style.transform = `translate(-${sliderLinePos}px)`;
  }, [sliderLinePos]);
  const prev: React.MouseEventHandler<HTMLButtonElement> = (): void => {
    if (sliderLinePos - sliderWidth > 0) {
      setSliderLinePos(sliderLinePos - sliderWidth);
    } else {
      setSliderLinePos(0);
    }
  };
  const next: React.MouseEventHandler<HTMLButtonElement> = (): void => {
    if (sliderLinePos + sliderWidth * 2 <= sliderLineWidth) {
      setSliderLinePos(sliderLinePos + sliderWidth);
    } else {
      setSliderLinePos(sliderLineWidth - sliderWidth);
    }
  };

  return (
    <div className={classes}>
      <div className='products-preview__logo-container' ref={logoRef}>
        <div className='logo-container__btn-group'>
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
        <div className='logo-container__overlay'>
          <Link
            onClick={scrollTo}
            state={category}
            className='overlay__text bigger-text'
            to='/catalog'
          >
            {category}
          </Link>
        </div>
      </div>
      <div className='products-preview__carousel-container' ref={carouselRef}>
        <div className='carousel-container__line' ref={carouselLineRef}>
          {!isLoading && data?.map((item) => (
            <div ref={sliderItemRef} key={item.id}>
            <Card {...item} className='element'/>
            </div>
          ))}
          {isLoading && emptyArray.map((_, index) => (
            <ProductCardLoader height={430} key={index * Math.random()}/>
          ))}
        </div>
      </div>
    </div>
  );
};
