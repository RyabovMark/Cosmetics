import React from "react";
import "./style.scss";
import { Link, NavLink } from "react-router-dom";
import letter from "../../assets/social/letter.svg";
import whatsapp from "../../assets/social/whatsapp.svg";
import { Signature } from "../signature";
import { Chip } from "../chip";
import { Social } from "../social";
import { categories } from "../../pages/catalog";

const links = [
  { linkName: "product catalog", to: "catalog", id: 1 },
  { linkName: "about company", to: "about", id: 2 },
  { linkName: "bonus program", to: "loyalty", id: 3 },
  { linkName: "work process", to: "our-work", id: 4 },
  { linkName: "partners", to: "our-partners", id: 5 },
  { linkName: "delivery", to: "delivery", id: 6 },
];
export const scrollTo: React.MouseEventHandler<
  HTMLAnchorElement
> = (): void => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
};
export const Footer = ():JSX.Element => {
  return (
    <footer className='footer'>
      <div className='footer-logo'>
        <Link to='/' className='logo-title logo-title--footer'>
          Boltaeva
        </Link>
      </div>
      <div className='footer__container'>
        <div className='footer__column'>
          <h3 className='title footer__title'>company</h3>
          <p className='text footer__text'>
            The brand strives to create respect for its products among the
            audience, so that the presence of the company's products is a sign
            of prestige.
          </p>
          <Social className='footer__social' />
          <Signature className='footer__signature' />
        </div>
        <div className='footer__column'>
          <h3 className='title footer__title'>navigation</h3>
          {links.map(({ to, id, linkName }) => (
            <NavLink
              className='footer__link'
              onClick={scrollTo}
              key={id}
              to={to}
            >
              {linkName}
            </NavLink>
          ))}
        </div>
        <div className='footer__column'>
          <h3 className='title footer__title'>products</h3>
          {categories.map((item, index) => (
            <Link
              className='footer__link'
              onClick={scrollTo}
              key={index}
              to='/catalog'
              state={item}
            >
              {item}
            </Link>
          ))}
        </div>
        <div className='footer__column'>
          <h3 className='title footer__title'>contacts</h3>
          <p className='text footer__text'>
            We are open to new opportunities, so you can contact our company
            representatives for any questions
          </p>
          <div className='contact-us'>
            <Chip
              img={letter}
              text='e-mail'
              classname='contact-us__chip hover-shadow'
              to='#'
            />
            <Chip
              img={whatsapp}
              text='whatsapp'
              classname='contact-us__chip hover-shadow'
              to='#'
            />
          </div>
        </div>
      </div>
      <div className='footer__min-width'>
        <p className='text footer__text'>
          The brand strives to create respect for its products among the
          audience, so that the presence of the company's products is a sign of
          prestige.
        </p>
        <div className='contact-us'>
          <Chip
            img={letter}
            text='e-mail'
            classname='contact-us__chip hover-shadow'
            to='#'
          />
          <Chip
            img={whatsapp}
            text='whatsapp'
            classname='contact-us__chip hover-shadow'
            to='#'
          />
        </div>
        <Social className='footer__social' />
        <Signature className='footer__signature' />
      </div>
    </footer>
  );
};
