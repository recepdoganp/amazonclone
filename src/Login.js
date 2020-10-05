import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
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
          <label for='email'>E-mail</label>
          <input type='email' id='email' />
          <label for='email'>Password</label>
          <input type='password' id='password' />
          <button className='login-signinButton'>Sign In</button>
        </form>
        <p>
          By signing in you agree to <strong>DOGAN's AMAZON CLONE</strong>
          's conditions of use & sale. Please see our Privacy Notice, Our
          Cookies Notice and our Interest-Based Ads Notice
        </p>
        <div className='login-divider'>
          <h5>Are you new to the amazon?</h5>
        </div>
        <button className='login-registerButton'>
          Create your amazon account
        </button>
      </div>
    </div>
  );
};

export default Login;
