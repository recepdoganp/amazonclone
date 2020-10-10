import React, { forwardRef } from "react";

// Styling
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

// utility functions
import { showStars } from "./utils";

const CheckoutProduct = forwardRef(
  ({ id, image, title, priceTR, priceUSD, priceEUR, rating }, ref) => {
    const [{ location }, dispatch] = useStateValue();

    const removeFromBasket = () => {
      dispatch({
        type: "REMOVE_FROM_BASKET",
        payload: id,
      });
    };

    return (
      <div className='checkoutProduct' ref={ref}>
        <img src={image} className='checkoutProduct-image' alt={title} />
        <div className='checkoutProduct-info'>
          <p className='checkoutProduct-title'>{title}</p>
          <p className='checkoutProduct-price'>
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
          <button onClick={removeFromBasket}>Remove from basket</button>
        </div>
      </div>
    );
  }
);

export default CheckoutProduct;
