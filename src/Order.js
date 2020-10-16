import React from "react";
import "./Order.css";

// Components
import CheckoutProduct from "./CheckoutProduct";

// Modules
const moment = require("../node_modules/moment/moment");

const Order = ({ order }) => {
  return (
    <div className='order'>
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className='order_id'>
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map(
        ({ id, title, img, priceTR, priceUSD, priceEUR, rating }, i) => (
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
        )
      )}
    </div>
  );
};

export default Order;
