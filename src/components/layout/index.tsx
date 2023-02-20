import React, {useEffect} from "react";
import {
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import {Header} from "../header";
import {Footer} from "../footer";
import "./style.scss";

export const Layout = (): JSX.Element => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('Cosmetics')
    }
  }, [location])

  return (
    <div className='container'>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  );
};
