import React from "react";

// Styling
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

// utility functions
import { showStars } from "./utils";

const CheckoutProduct = ({ id, image, title, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      payload: id,
    });
  };

  return (
    <div className='checkoutProduct'>
      <img src={image} className='checkoutProduct-image' alt={title} />
      <div className='checkoutProduct-info'>
        <p className='checkoutProduct-title'>{title}</p>
        <p className='checkoutProduct-price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product-rating'>{showStars(rating)}</div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
