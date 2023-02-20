import React from 'react';
import './style.scss';
import { NavLink } from 'react-router-dom';
import facebook from '../../assets/social/facebook.svg';
import instagram from '../../assets/social/instagram.svg';
import twitter from '../../assets/social/twitter.svg';
import youtube from '../../assets/social/youtube.svg';
import vk from '../../assets/social/vk.svg';
import classNames from 'classnames';
const social = [
  { alt: 'facebook', icon: facebook, to: '#', id: 1 },
  { alt: 'instagram', icon: instagram, to: '#', id: 2 },
  { alt: 'twitter', icon: twitter, to: '#', id: 3 },
  { alt: 'youtube', icon: youtube, to: '#', id: 4 },
  { alt: 'vk', icon: vk, to: '#', id: 5 },
];

type SocialProp = {
  className?: string;
  size?: string;
};

export const Social = ({ className, size = '' }:SocialProp):JSX.Element => {
  const classes = classNames('social', className, size);
  return (
    <div className={classes}>
      {social.map((item) => (
        <NavLink
          key={item.id}
          to={item.to}
          className="social__link hover-shadow"
        >
          <img src={item.icon} alt={item.alt} />
        </NavLink>
      ))}
    </div>
  );
};
