import React from "react";
import "./style.scss";
import { GoBackBtn } from "../../components/go-back-btn";

const list = [
  {
    title:
      'Select the desired product and its quantity, click the "Add to cart"' +
      " button.",
    id: 1,
  },
  {
    title: 'Go to the "Shopping Cart" section.',
    id: 2,
  },
  {
    title:
      'Enter the promo code you have and click the "Place an order" button.',
    id: 3,
  },
  {
    title:
      "Specify your contact details (Recipient's full name, phone" +
      " number, email address, delivery city) or recipient's contact details.",
    id: 4,
  },
  {
    title:
      "Choose a delivery method (Courier, Pick-up point, Pickup, Russian" +
      " Post, Fast delivery from the store).",
    id: 5,
  },
  {
    title: "Select the delivery address.",
    id: 6,
  },
  {
    title: "Choose a convenient payment method.",
    id: 7,
  },
  {
    title: 'Click the "Place an order" button.',
    id: 8,
  },
  {
    title:
      "After placing an order, you will receive a message to your email" +
      " address containing information about the order: the order number, the composition and cost of the order, and an SMS with the order number.",
    id: 9,
  },
  {
    title:
      "Information about your orders (current and completed) You can" +
      ' always look in your account in the "My purchases" section.',
    id: 10,
  },
  {
    title:
      "The maximum cost of 1 order is 400,000 rubles when paying on the" +
      " website and 50,000 rubles when paying by card or cash upon receipt.",
    id: 11,
  },
  {
    title:
      "If the cost of your order exceeds the maximum, we recommend placing several orders.",
    id: 12,
  },
];
export const Delivery = () => {
  return (
    <div className='delivery'>
      <GoBackBtn className='delivery__back-btn' />
      <h1 className='article-title delivery__title'>Delivery information</h1>
      <div className='delivery__image' />
      <h4 className='subtitle delivery__subtitle'>
        Place an order on the website
      </h4>
      <ul className='delivery__list'>
        {list.map((listItem) => (
          <li key={listItem.id} className='list__item'>
            {listItem.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
