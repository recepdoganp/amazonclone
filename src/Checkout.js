import React from "react";
import "./Checkout.css";

// Components
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className='checkout'>
      <div className='checkout-left'>
        <img
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492688_.jpg'
          alt=''
          className='checkout-ad'
        />
        <h2 className='checkout-title'>Your shopping basket</h2>
        {/* Basket Item */}
      </div>
      <div className='checkout-right'>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
