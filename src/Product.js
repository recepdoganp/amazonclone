import React, { Fragment } from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import { useStateValue } from "./StateProvider";

const Product = ({ id, title, img, price, rating }) => {
  // Initialize Context API for dispatching an action
  const [state, dispatch] = useStateValue();

  const showStars = (rating) => {
    if (!rating || Math.floor(rating) === 0 || typeof rating === "undefined") {
      return (
        <p style={{ fontSize: 12, marginTop: 12 }}>
          No rating available for this product, not enough rating has been
          provided yet
        </p>
      );
    } else {
      const starsArray = Array.apply(null, Array(Math.floor(rating)));
      if (rating % 1 === 0) {
        return starsArray.map(() => {
          return <StarIcon />;
        });
      } else {
        return starsArray.map((star, index) => {
          if (index === starsArray.length - 1) {
            return (
              <Fragment>
                <StarIcon />
                <StarHalfIcon />
              </Fragment>
            );
          }
          return <StarIcon />;
        });
      }
    }
  };

  const addToBasket = () => {
    // dispatch the item to Context API
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        img,
        price,
        rating,
      },
    });
  };
  return (
    <div className='product'>
      <div className='product-info'>
        <p>{title}</p>
        <p className='product-price'>
          <small>$</small>
          <strong> {price}</strong>
        </p>
        <div className='product-rating'>{showStars(rating)}</div>
      </div>
      <img src={img} alt='' />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
