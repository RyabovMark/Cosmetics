import React, {useEffect, useState} from "react";
import "./style.scss";
import {Link} from "react-router-dom";
import classNames from "classnames";

interface Gallery {
  url: string;
  id: number;
}

interface CardProps {
  id: number | undefined;
  gallery: Gallery[] | undefined;
  name: string | undefined;
  price: number | undefined;
  className?: string;
  category: string;
}

const imagePlaceholder = 'https://via.placeholder.com/300X300/fff/555?text=Images+not+found'

export const Card = ({
                       id,
                       gallery,
                       name,
                       price,
                       className,
                       category,
                     }: CardProps): JSX.Element => {
  const classes = classNames("shop-card", className);
  const [url, setUrl] = useState('')

  const onError = (): void => {
    setUrl(imagePlaceholder)
  }

  const onLoad = (urls: string): void => {
    setUrl(urls)
  }

  useEffect(() => {
    const img = new Image();

    function getImage() {
      gallery?.forEach(({url}) => {
        img.src = url;
        img.onload = () => onLoad(url);
        img.onerror = onError;
      })
    }

    getImage()
  }, [gallery]);

  return (
    <Link to={`/catalog/${id}`} state={{id, category}} className={classes}
          >
      <div className='shop-card__image-container' >
        <img src={url} alt='productCover'/>
      </div>
      <div className='shop-card__container'>
        <span className='shop-card__name'>{name}</span>
        <span className='shop-card__price'>{price} ₽</span>
      </div>
    </Link>
  );
};
