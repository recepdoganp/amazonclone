import React from "react";
import { Link } from "react-router-dom";

import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className='payment'>
      <div className='payment-container'>
        <h1>Checkout {<Link to='/checkout'>{basket?.length} items</Link>}</h1>
        <div className='payment-section'>
          <div className='payment-title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment-address'>
            <p>{user?.email}</p>
            <p>Viale Ambrosini 8</p>
            <p>Milan, Italy</p>
          </div>
        </div>
        <div className='payment-section'>
          <div className='payment-title'>
            <h3>Review Items And Delivery</h3>
          </div>
          <div className='payment-items'>
            {basket.map((item) => {
              return (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.img}
                  priceTR={item.priceTR}
                  priceUSD={item.priceUSD}
                  priceEUR={item.priceEUR}
                  rating={item.rating}
                />
              );
            })}
          </div>
        </div>
        <div className='payment-section'>
          <div className='payment-title'>
            <h3>Payment Method</h3>
            <div className='payment-details'>{/* Stripe */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
