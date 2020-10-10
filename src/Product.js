import React from "react";
import "./Product.css";

import { useStateValue } from "./StateProvider";

// utilities
import { showStars } from "./utils";

const Product = ({ id, title, img, priceTR, priceUSD, priceEUR, rating }) => {
  // Initialize Context API for dispatching an action
  const [{ location }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item to Context API
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        img,
        priceTR,
        priceUSD,
        priceEUR,
        rating,
      },
    });
  };
  return (
    <div className='product'>
      <div className='product-info'>
        <p>{title}</p>
        <p className='product-price'>
          <small>
            {location.currency === "TRY"
              ? "₺"
              : location.currency === "EUR"
              ? "€"
              : "$"}
          </small>
          <strong>
            {" "}
            {location?.currency === "TRY"
              ? priceTR
              : location.currency === "EUR"
              ? priceEUR
              : priceUSD}
          </strong>
        </p>
        <div className='product-rating'>{showStars(rating)}</div>
      </div>
      <img src={img} alt='' />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
