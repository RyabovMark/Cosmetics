import React from 'react';
import './style.scss';
import { Signature } from '../signature';
import classNames from 'classnames';

interface BlockQuotePropTypes {
  className?: string;
}

const avatarUrl =
  'https://aquahc.com/wp-content/uploads/2021/05/jonathan-borba-n1B6ftPB5Eg-unsplash-scaled-e1620739832760.jpg';
export const BlockQuote = ({ className }:BlockQuotePropTypes):JSX.Element => {
  const classes = classNames('quote-container', className);
  return (
    <div className={classes}>
      <p className="quote-container__text text-main">
        The brand seeks to build respect among the audience for its products, so
        that the presence of the company's products is a sign of prestige, since
        the focus of the business is focused on exclusive sales, but not on the
        mass market.{' '}
      </p>
      <img src={avatarUrl} alt="avatar" className="quote-container__avatar" />
      <address className="quote-container__author">
        <p className="author__name">zara boltaeva</p>
        <p className="author__speciality">
          <abbr title="Chief Executive Officer">CEO</abbr>, Founder
        </p>
      </address>
      <Signature className="quote-container__sign" />
    </div>
  );
};
