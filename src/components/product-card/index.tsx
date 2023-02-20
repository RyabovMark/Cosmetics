import React, { useState } from "react";
import "./style.scss";
import { Button } from "../button";
import { OrdersIcon as Orders } from "../icons/OrdersIcon";
import { FavoriteIcon as Favorite } from "../icons/FavoriteIcon";
import { Counter } from "../counter";
import { Tabs, Tab, TabPanel } from "../tabs";
import { ProductType } from "../../services/api/products.api";

export const ProductCard = ({
  name,
  price,
  about,
  gallery,
  id,
}: ProductType): JSX.Element => {
  const [displayImage, setDisplayImage] = useState(0);
  const [tabValue, setTabValue] = useState(0);
  const [productCount, setProductCount] = useState(1);
  const gallerySorted = gallery?.find((item, index) => index === displayImage);

  const onTabClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // @ts-ignore
    setTabValue(Number(event.target.id));
  };

  return (
    <div className='card'>
      <div className='card__gallery'>
        <div className='gallery__slides'>
          {gallery?.map(({ url, id }, index) => (
            <img
              onClick={() => setDisplayImage(index)}
              key={id}
              src={url}
              alt='gallery'
              className={index === displayImage ? "chose" : ""}
            />
          ))}
        </div>
        <div className='gallery__slide-container'>
          <img
            src={gallerySorted?.url}
            className='gallery__slide'
            alt='poster'
          />
        </div>
      </div>
      <div className='card__about'>
        <div className='about__container'>
          <Button
            onClick={() => {}}
            className={true ? "about__fav active" : "about__fav"}
            reverse
            text='Add to favorites'
            icon={<Favorite />}
          />
          <h1 className='about__name'>{name}</h1>
          <div className='about__total-section'>
            <Counter
              className='total-section__counter'
              state={productCount}
              setState={setProductCount}
            />
            <span className='total-section__total bigger-text'>
              {price * productCount} ₽
            </span>
          </div>
          <Button
            className='about__add-cart'
            text='Add to shopping cart'
            onClick={() => {}}
            reverse
            icon={<Orders />}
          />
          <div className='card__tabs'>
            <Tabs onClick={onTabClick}>
              {about?.map((tab, index) => (
                <Tab
                  key={tab.id}
                  value={tabValue}
                  index={index}
                  label={tab.label}
                />
              ))}
            </Tabs>
            <div className='tabs__content'>
              {about?.map((tab, index) => (
                <TabPanel key={tab.id} value={tabValue} index={index}>
                  {tab.value}
                </TabPanel>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
