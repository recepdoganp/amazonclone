import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Subtotal.css";

// Modules
import CurrencyFormat from "react-currency-format";

// Context API
import { useStateValue } from "./StateProvider";

// utility functions
import { calculateTotalPrice } from "./utils";

const Subtotal = () => {
  const history = useHistory();
  const [disabled, setDisabled] = useState(true);
  const [
    {
      basket,
      user,
      location: { currency },
    },
    dispatch,
  ] = useStateValue();

  useEffect(() => {
    if (basket.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [basket.length]);

  const handleProceedCheckout = (e) => {
    if (!disabled && user) {
      history.push("/payment");
    } else {
      if (disabled) {
        alert("There is no item in the basket!");
      } else if (!user) {
        alert("In order to proceed you have to sign in!");
      }
    }
  };

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <Fragment>
            <p>
              Subtotal {basket?.length} items: <strong> {value}</strong>
            </p>
            <small className='subtotal-gift'>
              <input type='checkbox' /> This order contains a gift
            </small>
          </Fragment>
        )}
        decimalScale={2}
        value={calculateTotalPrice(basket, currency)}
        displayType='text'
        thousandSeperator={true}
        prefix={currency === "TRY" ? "₺" : currency === "EUR" ? "€" : "$"}
      ></CurrencyFormat>
      <button onClick={handleProceedCheckout}>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
