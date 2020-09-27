import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className='home'>
      <div className='home-container'>
        <img
          className='home-image'
          src='https://images-eu.ssl-images-amazon.com/images/G/29/digital/video/gateway/placement/launch/Howto/HOWTO_2020_GWBleedingHero_FT_COVIDUPDATE_XSite_3000X1200_PV_it-IT._CB404456092_.jpg'
          alt=''
        />
        <div className='home-row'>
          <Product />
          <Product />
        </div>
        <div className='home-row'>
          <Product />
          <Product />
          <Product />
        </div>
        <div className='home-row'>
          <Product />
        </div>
      </div>
    </div>
  );
};

export default Home;
