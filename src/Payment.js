import React, { useState } from "react";
import { Link } from "react-router-dom";

// Modules
import CurrencyFormat from "react-currency-format";
import axios from "axios";

// Style
import "./Payment.css";
// Components
import CheckoutProduct from "./CheckoutProduct";

// Context API
import { useStateValue } from "./StateProvider";

// Stripe
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// utility functions
import { calculateTotalPrice } from "./utils";

const Payment = () => {
  const [
    {
      basket,
      user,
      location: { currency },
    },
    dispatch,
  ] = useStateValue();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSetsucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {};
    getClientSecret();
  }, [basket]);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className='payment'>
      <div className='payment-container'>
        <h1>Checkout {<Link to='/checkout'>{basket?.length} items</Link>}</h1>
        <div className='payment-section'>
          <div className='payment-title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment-address'>
            <p>{user?.email}</p>
            <p>Viale Ambrosini 8</p>
            <p>Milan, Italy</p>
          </div>
        </div>
        <div className='payment-section'>
          <div className='payment-title'>
            <h3>Review Items And Delivery</h3>
          </div>
          <div className='payment-items'>
            {basket.map((item) => {
              return (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.img}
                  priceTR={item.priceTR}
                  priceUSD={item.priceUSD}
                  priceEUR={item.priceEUR}
                  rating={item.rating}
                />
              );
            })}
          </div>
        </div>
        <div className='payment-section'>
          <div className='payment-title'>
            <h3>Payment Method</h3>
          </div>
          <div className='payment-details'>
            <form
            // onSubmit={handleSubmit}
            >
              <CardElement onChange={handleChange} />
              <div className='payment-priceContainer'>
                <CurrencyFormat
                  renderText={(value) => <h3>Order total {value}</h3>}
                  decimalScale={2}
                  value={calculateTotalPrice(basket, currency)}
                  displayType='text'
                  thousandSeperator={true}
                  prefix={
                    currency === "TRY" ? "₺" : currency === "EUR" ? "€" : "$"
                  }
                ></CurrencyFormat>
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing...</p> : "Pay Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
