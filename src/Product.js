import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";

const Product = () => {
  return (
    <div className='product'>
      <div className='product-info'>
        <p>Yeni bir urun</p>
        <p className='product-price'>
          <small>$</small>
          <strong> 20.99</strong>
        </p>
      </div>
      <div className='product-rating'>
        <StarIcon fontSize='small' />
        <StarIcon fontSize='small' />
        <StarIcon fontSize='small' />
        <StarIcon fontSize='small' />
      </div>
      <img
        src='https://images-na.ssl-images-amazon.com/images/I/81rQwYqpA8L._AC_UL1500_.jpg'
        alt=''
      />
      <button>Add to basket</button>
    </div>
  );
};

export default Product;
