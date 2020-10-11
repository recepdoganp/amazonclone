import React, { Fragment } from "react";
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
  const [
    {
      basket,
      location: { currency },
    },
    dispatch,
  ] = useStateValue();

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <Fragment>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
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
        prefix={"$"}
      ></CurrencyFormat>
      <button onClick={(e) => history.push("/payment")}>
        Proceed to checkout
      </button>
    </div>
  );
};

export default Subtotal;
