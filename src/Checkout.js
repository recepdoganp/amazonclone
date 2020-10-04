import React from "react";
import "./Checkout.css";

// Context API
import { useStateValue } from "./StateProvider";

// Components
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout-left'>
        <img
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492688_.jpg'
          alt=''
          className='checkout-ad'
        />
        <h2 className='checkout-title'>Your shopping basket</h2>
        {basket?.length > 0 ? (
          basket.map(({ id, title, img, price, rating }, i) => {
            return (
              <CheckoutProduct
                id={id}
                title={title}
                image={img}
                price={price}
                rating={rating}
              />
            );
          })
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
}

export default Checkout;
