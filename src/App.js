import React, { useEffect, Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// Style
import "./App.css";

// Components
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";

// firebase
import { auth } from "./firebase";

// Context API
import { useStateValue } from "./StateProvider";

// utils
import axios from "axios";

// stripe
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HbXlPBSkxooKlJBEg9vMJxwZCUqE6MELhK3nw7lER7WtWjQDgyttpt3nyidvEl9sisICoVWZFsroXurSQVhvJQ6003lVlqXcZ"
);

function App() {
  const [{ loading, user }, dispatch] = useStateValue();

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is logged in or was already logged in
        dispatch({
          type: "SET_USER",
          payload: authUser,
        });
      } else {
        // user is logged out
        dispatch({
          type: "SET_USER",
          payload: null,
        });
      }
    });
    dispatch({ type: "STOP_LOADING" });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;

        dispatch({
          type: "SET_LOCATION",
          payload: data,
        });
        dispatch({ type: "STOP_LOADING" });
      })
      .catch((err) => {
        console.error(err.message);
        dispatch({ type: "STOP_LOADING" });
      });
    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <div className='app'>
        {loading ? (
          <div></div>
        ) : (
          <Switch>
            <Route path='/orders'>
              <Header />
              <Orders />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/checkout'>
              <Header />
              <Checkout />
            </Route>
            <Route path='/payment'>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </Route>
            <Route path='/'>
              <Header />
              <Home />
            </Route>
          </Switch>
        )}
      </div>
    </Router>
  );
}

export default App;
