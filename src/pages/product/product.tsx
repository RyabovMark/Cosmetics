import React from "react";
import "./style.scss";
import { ProductCard } from "../../components/product-card";
import { ProductDescription } from "../../components/product-description";
import { Signature } from "../../components/signature";
import { Carousel } from "../../components/carousel";
import { useGetProductByIdQuery } from "../../services/api/products.api";
import { useLocation } from "react-router-dom";

export const Product = () => {
  let {
    state: { id, category },
  } = useLocation();

  const { data, isLoading } = useGetProductByIdQuery(id);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : data ? (
        <ProductCard {...data} />
      ) : null}
      <ProductDescription
        url='https://cs1.livemaster.ru/storage/aa/ce/9ae7dec2a791cae497938f423aet--kosmetika-ruchnoj-raboty-gel-dlya-umyvaniya-dlya-chuvstviteln.jpg'
        columnReverse
      >
        <h3 className='logo-title product__title'>boltaeva</h3>
        <p className='bigger-text product__sub-text'>
          Each Boltaeva brand product is truly unique - everything is thought
          out to the smallest detail.
        </p>
        <p className='text product__sub-text'>
          The brand seeks to build respect among the audience for its products,
          so that the presence of the company's products is a sign of prestige,
          since the focus of the business is focused on exclusive sales, but not
          on the mass market.
        </p>
      </ProductDescription>
      <ProductDescription url='https://i.pinimg.com/originals/4f/ff/26/4fff267215995e2c52c4c361d3c7c6ac.jpg'>
        <h3 className='logo-title product__title'>boltaeva</h3>
        <p className='bigger-text product__sub-text'>
          Each Boltaeva brand product is truly unique - everything is thought
          out to the smallest detail.
        </p>
        <p className='text product__sub-text'>
          The brand seeks to build respect among the audience for its products,
          so that the presence of the company's products is a sign of prestige,
          since the focus of the business is focused on exclusive sales, but not
          on the mass market.
        </p>
        <div className='product-container__author'>
          <address>
            <p className='author__name'>zara boltaeva</p>
            <p className='author__speciality'>
              <abbr title='Chief Executive Officer'>CEO</abbr>, Founder
            </p>
          </address>
          <Signature className='product-container__sign' />
        </div>
      </ProductDescription>
      <Carousel category={category} sortedElement={id}/>
    </div>
  );
};
