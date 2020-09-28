import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";

const Product = ({ title, img, price, rating }) => {
  const showStars = (rating) => {
    if (!rating || Math.floor(rating) === 0 || typeof rating === "undefined") {
      return <p>'RATING YOK'</p>;
    } else {
      const starsArray = Array.apply(null, Array(Math.floor(rating)));
      if (rating % 1 === 0) {
        starsArray.forEach(() => {
          console.log("TAM SAYi");
          return <p>TAM SAYI</p>;
        });
      } else {
        console.log("kusuratli");
        return <p>'KUSURATLI'</p>;
      }
    }
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
      <button>Add to basket</button>
    </div>
  );
};

export default Product;
