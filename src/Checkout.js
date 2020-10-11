import React from "react";
import "./Checkout.css";

// Animation
import FlipMove from "react-flip-move";

// Context API
import { useStateValue } from "./StateProvider";

// Components
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout-left'>
        <img
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492688_.jpg'
          alt=''
          className='checkout-ad'
        />
        <h3>Hello, {user ? user.email : "Guest"}</h3>
        <h2 className='checkout-title'>Your shopping basket</h2>
        {basket?.length > 0 ? (
          <FlipMove leaveAnimation='accordionVertical'>
            {basket.map(
              ({ id, title, img, priceTR, priceUSD, priceEUR, rating }, i) => {
                return (
                  <CheckoutProduct
                    key={i}
                    id={id}
                    title={title}
                    image={img}
                    priceTR={priceTR}
                    priceUSD={priceUSD}
                    priceEUR={priceEUR}
                    rating={rating}
                  />
                );
              }
            )}
          </FlipMove>
        ) : (
          <div className='checkoutProduct'>
            <p>There is no item in your basket</p>
          </div>
        )}
      </div>
      <div className='checkout-right'>
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
