import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <img
          src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
          alt=''
          className='header-logo'
        />
      </Link>
      <div className='header-search'>
        <input type='text' className='header-searchInput'></input>
        <SearchIcon className='header-searchIcon' />
      </div>
      <div className='header-nav'>
        <div className='header-option'>
          <span className='header-optionLineOne'>Hello Guest</span>
          <span className='header-optionLineTwo'>Sign In</span>
        </div>
        <div className='header-option'>
          <span className='header-optionLineOne'>Returns</span>
          <span className='header-optionLineTwo'>& Orders</span>
        </div>
        <div className='header-option'>
          <span className='header-optionLineOne'>Your</span>
          <span className='header-optionLineTwo'>Prime</span>
        </div>

        <Link to='/checkout'>
          <div className='header-optionBasket'>
            <ShoppingBasketIcon />
            <span className='header-optionLineTwo header-basketCount'>0</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
