import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Style
import "./App.css";

// Components
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";

// firebase
import { auth } from "./firebase";

// Context API
import { useStateValue } from "./StateProvider";

// utils
// import { getGeoInfo } from "./utils";
import axios from "axios";

function App() {
  const [{ loading }, dispatch] = useStateValue();

  useEffect(() => {
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
      });
  }, []);

  return (
    <Router>
      <div className='app'>
        {loading ? (
          <p style={{ background: "red", height: "100vh" }}>LOADING......</p>
        ) : (
          <Switch>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/checkout'>
              <Header />
              <Checkout />
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
