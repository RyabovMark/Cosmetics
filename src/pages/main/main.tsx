import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import { ProductDescription } from "../../components/product-description";
import { Signature } from "../../components/signature";
import { Button } from "../../components/button";
import { InstagramIcon } from "../../components/icons/InstagramIcon";
import { ArrowRightIcon } from "../../components/icons/ArrowRightIcon";
import { ArrowLeftIcon } from "../../components/icons/ArrowLeftIcon";
import { ProductsPreviewCarousel } from "../../components/products-preview-carousel";
import {PhotoGallery} from "../../components/photogallery";

const sliderImages = [
  {
    url: "http://mywishlist.ru/pic/i/wish/orig/009/683/920.jpeg",
    id: 1,
  },
  {
    url: "http://1.bp.blogspot.com/-jpSxOHGpvpI/VK7I_a6Vf5I/AAAAAAAAFt4/qnWnc0WpsJY/s1600/IMG_9673.jpg",
    id: 2,
  },
  {
    url: "https://janisensucre.com/wp-content/uploads/2016/09/JANISE-EN-SUCRE-Garancia-routine-13.jpg",
    id: 3,
  },
  {
    url: "https://495.moscow/media/2021/12/uhod-za-borodoj-s-chego-nachat-i-pochemu-eto-vazhno-vashej-devushke-03.jpg",
    id: 5,
  },
];
export const Main = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const productsPreviewRef = useRef<HTMLDivElement>(null);
  const [loadWindow, setLoadWindow] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);
  const onLoad = (): void => {
    setLoadWindow(false);
    if (sliderRef.current !== null)
      sliderRef.current.style.backgroundImage = `url(${sliderImages[activeSlide].url})`;
  };
  const onError = (): void => {
    if (sliderRef.current !== null)
      sliderRef.current.style.backgroundImage = "";
    setLoadWindow(true);
  };

  useEffect(() => {
    setLoadWindow(true);
    const img = new Image();
    img.src = sliderImages[activeSlide].url;

    img.addEventListener("load", onLoad);
    img.addEventListener("error", onError);

    return () => {
      img.removeEventListener("load", onLoad);
      img.removeEventListener("error", onError);
    };
  }, [activeSlide]);

  const handleResize = (): void => {
    if (sliderRef.current !== null && productsPreviewRef.current !== null)
      if (document.body.offsetWidth >= 830) {
        productsPreviewRef.current.style.marginTop = `${
          sliderRef.current.offsetHeight - 141 + 70
        }px`;
      } else {
        productsPreviewRef.current.style.marginTop = `${
          sliderRef.current.offsetHeight - 141 + 90
        }px`;
      }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const increase = () => {
    if (activeSlide === sliderImages.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };

  const decrease = () => {
    if (activeSlide === 0) {
      setActiveSlide(sliderImages.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };

  return (
    <div className='main'>
      <div className='main__slider' ref={sliderRef}>
        <div className='slider__btn-container'>
          <button className='btn-container__btn' onClick={decrease}>
            <ArrowLeftIcon />
          </button>
          <button className='btn-container__btn' onClick={increase}>
            <ArrowRightIcon />
          </button>
        </div>
        <div className='slider__dots'>
          {sliderImages.map(({ id }, index) => (
            <span
              key={id}
              className={
                activeSlide === index ? "slider__dots-active" : undefined
              }
              onClick={() => setActiveSlide(index)}
            ></span>
          ))}
        </div>
      </div>
      <div ref={productsPreviewRef} className='main__products-preview'>
        <ProductsPreviewCarousel
          imgPreviewUrl='https://images.squarespace-cdn.com/content/v1/5811b29bb8a79b740e329a5c/1615278156978-FNBI9J41Y6TRK11NGGQT/barber-cosmetic-products-mockup-scene.png'
          category='cosmetics sets'
        />
        <ProductsPreviewCarousel
          imgPreviewUrl='https://i.pinimg.com/originals/3e/aa/03/3eaa03e3e4848b4c854a10cdc5db29ab.jpg'
          category='body cream'
          reverse
        />
        <ProductsPreviewCarousel
          imgPreviewUrl='https://m.media-amazon.com/images/I/91V1LofSh2L._SL1500_.jpg'
          category='eye cream'
        />
      </div>
      <ProductDescription
        columnReverse
        url='https://i.pinimg.com/originals/4f/ff/26/4fff267215995e2c52c4c361d3c7c6ac.jpg'
      >
        <h3 className='logo-title main__title'>boltaeva</h3>
        <p className='bigger-text main__sub-text'>
          Each Boltaeva brand product is truly unique - everything is thought
          out to the smallest detail.
        </p>
        <p className='text main__sub-text'>
          The brand seeks to build respect among the audience for its products,
          so that the presence of the company's products is a sign of prestige,
          since the focus of the business is focused on exclusive sales, but not
          on the mass market.
        </p>
        <div className='main_container__author'>
          <address>
            <p className='author__name'>zara boltaeva</p>
            <p className='author__speciality'>
              <abbr title='Chief Executive Officer'>CEO</abbr>, Founder
            </p>
          </address>
          <Signature className='main_container__sign' />
        </div>
      </ProductDescription>
      <div className='main__media'>
        <p className='media__text bigger-text'>
          Each Boltaeva brand product is truly unique - everything is thought
          out to the smallest detail.
        </p>
        <Button
          text='Instagram'
          icon={<InstagramIcon />}
          reverse
          className='media__btn'
        />
      </div>
      <PhotoGallery/>
    </div>
  );
};
