import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSignin = (e) => {
    e.preventDefault();
    // Firebase authorisation
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => alert(err.message));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Firebase authorisation
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // successful registration
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className='login'>
      <Link to='/'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png'
          alt='amazonLogo'
          className='login-logo'
        />
      </Link>
      <div className='login-container'>
        <h1>Sign In</h1>
        <form>
          <label htmlFor='email'>E-mail</label>
          <input
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={handleChange}
            required
          />
          <label htmlFor='email'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            value={password}
            onChange={handleChange}
            required
          />
          <button
            type='submit'
            className='login-signinButton'
            onClick={handleSignin}
          >
            Sign In
          </button>
        </form>
        <p>
          By signing in you agree to <strong>DOGAN's AMAZON CLONE</strong>
          's conditions of use & sale. Please see our Privacy Notice, Our
          Cookies Notice and our Interest-Based Ads Notice
        </p>
        <div className='login-divider'>
          <h5>Are you new to the amazon?</h5>
        </div>
        <button className='login-registerButton' onClick={handleRegister}>
          Create your amazon account
        </button>
      </div>
    </div>
  );
};

export default Login;
