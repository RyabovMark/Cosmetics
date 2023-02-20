import React from 'react';
import './style.scss';
import { GoBackBtn } from '../../components/go-back-btn';
import { GridStatistics } from '../../components/grid-statistics';

const arr = [
  { stat: '5%', description: 'Low level', id: 1 },
  { stat: '10%', description: 'Standard level', id: 2 },
  { stat: '15%', description: 'Max level', id: 3 },
];
export const Loyalty = () => {
  return (
    <div className="loyalty">
      <GoBackBtn className="loyalty__back-btn" />
      <h1 className="article-title loyalty__title">Loyalty program</h1>
      <div className="loyalty__image" />
      <p className="text-main loyalty__text">
        The brand seeks to build respect among the audience for its products, so
        that the presence of the company's products is a sign of prestige, since
        the focus of the business is focused on exclusive sales, but not on the
        mass market. The brand seeks to build respect among the audience for its
        products, so that the presence of the company's products is a sign of
        prestige, since the focus of the business is focused on exclusive sales,
        but not on the mass market.
      </p>
      <GridStatistics data={arr} className="loyalty__grid" />
      <p className="text__main loyalty__text">
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
