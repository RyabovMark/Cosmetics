import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import {store} from "./app/store";
import {Provider} from "react-redux";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Main} from "./pages/main/main";
import {Error as ErrorPage} from "./pages/error";
import {Product} from "./pages/product/product";
import {About} from "./pages/about/about";
import {Layout} from "./components/layout";
import {Order as OrderPage} from "./pages/order";
import {Profile} from "./pages/profile";
import {Delivery} from "./pages/delivery/delivery";
import {Contacts} from "./pages/contacts/contacts";
import {Work} from "./pages/work/work";
import {Partnership} from "./pages/partnership/partnership";
import {Loyalty} from "./pages/loyalty/loyalty";
import {Catalog} from "./pages/catalog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: 'Cosmetics',
        element: <Main/>,
      },
      {
        path: "catalog",
        element: <Catalog/>,
      },
      {
        path: "catalog/:id",
        element: <Product/>,
      },
      {
        path: "your-order",
        element: <OrderPage/>,
      },
      {
        path: "about",
        element: <About/>,
      },
      {
        path: "profile",
        element: <Profile/>,
      },
      {
        path: "delivery",
        element: <Delivery/>,
      },
      {
        path: "contacts",
        element: <Contacts/>,
      },
      {
        path: "our-work",
        element: <Work/>,
      },
      {
        path: "loyalty",
        element: <Loyalty/>,
      },
      {
        path: "our-partners",
        element: <Partnership/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  </Provider>
);
