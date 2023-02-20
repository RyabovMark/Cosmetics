import React from "react";
import "./style.scss";
import { GoBackBtn } from "../../components/go-back-btn";
import { BlockQuote } from "../../components/block-quote";
import { Button } from "../../components/button";
// import { BsArrowRight } from "react-icons/bs";

export const Work = () => {
  return (
    <div className='work'>
      <GoBackBtn className='work__back-btn' />
      <h1 className='article-title work__title'>Working process</h1>
      <p className='text-main work__text'>
        The brand seeks to build respect among the audience for its products, so
        that the presence of the company's products is a sign of prestige, since
        the focus of the business is focused on exclusive sales, but not on the
        mass market. The brand seeks to build respect among the audience for its
        products, so that the presence of the company's products is a sign of
        prestige, since the focus of the business is focused on exclusive sales,
        but not on the mass market.
      </p>
      <Button
        text='Become a partner'
        // icon={<BsArrowRight />}
        className='work__btn'
      />
      <p className='bigger-text work__text'>
        Each Boltaeva brand product is truly unique - everything is thought out
        to the smallest detail.
      </p>
      <BlockQuote className='work__quote' />
      <p className='text-main work__text'>
        The brand seeks to build respect among the audience for its products, so
        that the presence of the company's products is a sign of prestige, since
        the focus of the business is focused on exclusive sales, but not on the
        mass market.
      </p>
      <div className='work-image' />
      <p className='text-main work__text'>
        The brand seeks to build respect among the audience for its products, so
        that the presence of the company's products is a sign of prestige, since
        the focus of the business is focused on exclusive sales, but not on the
        mass market. The brand seeks to build respect among the audience for its
        products, so that the presence of the company's products is a sign of
        prestige, since the focus of the business is focused on exclusive sales,
        but not on the mass market.
      </p>
    </div>
  );
};
