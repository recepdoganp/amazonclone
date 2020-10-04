import React, { Fragment } from "react";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";

// Show number of stars as a component
export const showStars = (rating) => {
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

// Calculate the total price in the basket
export const calculateTotalPrice = (items) => {
  let totalPrice = 0;
  if (items) {
    items.forEach((item) => {
      totalPrice += item.price;
    });
  }
  return totalPrice;
};
