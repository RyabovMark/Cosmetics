import React from 'react';
import { GoBackBtn } from '../../components/go-back-btn';
import { BlockQuote } from '../../components/block-quote';
import './style.scss';
import { GridStatistics } from '../../components/grid-statistics';

const arr = [
  { stat: '35', description: 'offline shop', id: 1 },
  { stat: '64', description: 'products of own production', id: 2 },
  { stat: '600+', description: 'Man on the team', id: 3 },
  { stat: '2x', description: 'Revenue growth every year', id: 4 },
  { stat: '3+', description: 'Location at world', id: 5 },
  { stat: '1.6 m', description: 'Followers at social network', id: 6 },
];
export const About = () => {
  return (
    <div className="about">
      <GoBackBtn className="about__back-btn" />
      <h1 className="article-title about__title">About Boltaeva</h1>
      <p className="text-main about__text">
        The brand seeks to build respect among the audience for its products, so
        that the presence of the company's products is a sign of prestige, since
        the focus of the business is focused on exclusive sales, but not on the
        mass market. The brand seeks to build respect among the audience for its
        products, so that the presence of the company's products is a sign of
        prestige, since the focus of the business is focused on exclusive sales,
        but not on the mass market.
      </p>
      <div className="about-image__top" />
      <p className="text-main about__text">
        The brand seeks to build respect among the audience for its products, so
        that the presence of the company's products is a sign of prestige, since
        the focus of the business is focused on exclusive sales, but not on the
        mass market.{' '}
      </p>
      <GridStatistics data={arr} className="about__grid" />
      <p className="text-main about__text">
        The brand seeks to build respect among the audience for its products, so
        that the presence of the company's products is a sign of prestige, since
        the focus of the business is focused on exclusive sales, but not on the
        mass market. The brand seeks to build respect among the audience for its
        products, so that the presence of the company's products is a sign of
        prestige, since the focus of the business is focused on exclusive sales,
        but not on the mass market.
      </p>
      <div className="about-image__top about-image" />
      <p className="bigger-text about__text">
        Each Boltaeva brand product is truly unique - everything is thought out
        to the smallest detail.
      </p>
      <BlockQuote />
    </div>
  );
};
