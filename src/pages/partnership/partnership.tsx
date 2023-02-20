import React from 'react';
import './style.scss';
import { GoBackBtn } from '../../components/go-back-btn';
import { BlockQuote } from '../../components/block-quote';
export const Partnership = () => {
  return (
    <div className="partnership">
      <GoBackBtn className="work__back-btn" />
      <h1 className="article-title partnership__title">
        Partnership information
      </h1>
      <div className="partnership-image" />
      <p className="text-main partnership__text">
        The brand seeks to build respect among the audience for its products, so
        that the presence of the company's products is a sign of prestige, since
        the focus of the business is focused on exclusive sales, but not on the
        mass market. The brand seeks to build respect among the audience for its
        products, so that the presence of the company's products is a sign of
        prestige, since the focus of the business is focused on exclusive sales,
        but not on the mass market.
      </p>

      <p className="bigger-text partnership__text">
        Each Boltaeva brand product is truly unique - everything is thought out
        to the smallest detail.
      </p>
      <BlockQuote />
    </div>
  );
};
