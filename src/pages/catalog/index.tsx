import React, { useEffect, useState } from "react";
import "./style.scss";
import { useGetProductsByCategoryQuery } from "../../services/api/products.api";
import { Card } from "../../components/card";
import { ProductDescription } from "../../components/product-description";
import { Signature } from "../../components/signature";
import { useLocation } from "react-router-dom";
import { CardLoader } from "../../components/loaders/card-loader";

export const categories = [
  "face cream",
  "body cream",
  "cosmetics sets",
  "eye cream",
  "men`s cosmetics",
];

export const Catalog = () => {
  const { state } = useLocation();
  const [category, setCategory] = useState(categories[0]);
  const { data, isLoading, isError } = useGetProductsByCategoryQuery(category);
  const emptyArray = new Array(9).fill("");

  useEffect(() => {
    if (state) {
      setCategory(state);
    }
  }, [state]);

  return (
    <div className='catalog'>
      <div className='catalog__category-toggle'>
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={
              item === category
                ? "toggle__button toggle__button--active"
                : "toggle__button"
            }
          >
            {item}
          </button>
        ))}
      </div>
      <h1 className='catalog__category-title title'>{category}</h1>
      <div className='catalog__cover' />
      {isError && (
        <p className='bigger-text warning'>Server response error.....</p>
      )}
      <div className='catalog__products'>
        {isLoading &&
          emptyArray.map((_, index) => (
            <CardLoader key={index * Math.random()} />
          ))}
        {isError &&
          emptyArray.map((_, index) => (
            <CardLoader key={index * Math.random()} />
          ))}
        {!isLoading && data?.map((item) => <Card key={item.id} {...item} />)}
      </div>
      <ProductDescription
        columnReverse
        url='https://i.pinimg.com/originals/4f/ff/26/4fff267215995e2c52c4c361d3c7c6ac.jpg'
      >
        <h3 className='logo-title catalog__title'>boltaeva</h3>
        <p className='bigger-text catalog__sub-text'>
          Each Boltaeva brand product is truly unique - everything is thought
          out to the smallest detail.
        </p>
        <p className='text catalog__sub-text'>
          The brand seeks to build respect among the audience for its products,
          so that the presence of the company's products is a sign of prestige,
          since the focus of the business is focused on exclusive sales, but not
          on the mass market.
        </p>
        <div className='catalog-container__author'>
          <address>
            <p className='author__name'>zara boltaeva</p>
            <p className='author__speciality'>
              <abbr title='Chief Executive Officer'>CEO</abbr>, Founder
            </p>
          </address>
          <Signature className='catalog-container__sign' />
        </div>
      </ProductDescription>
    </div>
  );
};
