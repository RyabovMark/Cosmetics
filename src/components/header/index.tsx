import React, { useCallback, useState } from "react";
import "./style.scss";
import { Link, NavLink } from "react-router-dom";
import { CartIcon } from "../icons/CartIcon";
import { CloseIcon as Close } from "../icons/CloseIcon";
import { MenuIcon as Menu } from "../icons/MenuIcon";
import { OrdersIcon as Orders } from "../icons/OrdersIcon";
import { UserIcon as User } from "../icons/UserIcon";

const links = [
  { name: "catalog", to: "/catalog", id: 1 },
  { name: "about", to: "/about", id: 2 },
  { name: "delivery", to: "/delivery", id: 3 },
  { name: "contacts", to: "/contacts", id: 4 },
  { to: "/your-order", icon: <CartIcon />, id: 5 },
  { to: "/profile", icon: <User />, id: 6 },
];

export const Header = ():JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggle = useCallback(() => {
    let nav = document.getElementById("nav");
    if (isOpen && nav) {
      nav.className += " active-menu";
      setIsOpen(!isOpen);
    } else {
      if (nav) {
        nav.className = "nav";
        setIsOpen(!isOpen);
      }
    }
  }, [isOpen]);

  return (
    <header className='header'>
      <Link to='Cosmetics' className='header__logos logo-title'>
        boltaeva
      </Link>
      {isOpen && <Menu className='header-menu' onClick={toggle} />}
      {!isOpen && <Close className='header-close' onClick={toggle} />}
      <NavLink to='/your-order' className='shop-img'>
        <Orders className='header-orders' />
      </NavLink>
      <nav className='nav' id='nav'>
        {links.map(({id,to,icon, name}) => (
          <NavLink
            to={to}
            key={id}
            className={({ isActive }) =>
              icon
                ? "icon-nav__link" + (isActive ? " active-link" : "")
                : "nav__link" + (isActive ? " active-link" : "")
            }
          >
            {name ? <span>{name}</span> : icon}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};
