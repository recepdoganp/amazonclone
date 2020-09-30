import React, { Fragment } from "react";
import "./Subtotal.css";

// Modules
import CurrencyFormat from "react-currency-format";

const Subtotal = () => {
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <Fragment>
            <p>
              Subtotal (0 items): <strong>0</strong>
            </p>
            <small className='subtotal-gift'>
              <input type='checkbox' /> This order contains a gift
            </small>
          </Fragment>
        )}
        decimalScale={2}
        value={0}
        displayType='text'
        thousandSeperator={true}
        prefix={"$"}
      ></CurrencyFormat>
      <button>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
