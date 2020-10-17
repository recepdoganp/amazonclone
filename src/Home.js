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
          <Product
            id='111231334523423434512312'
            title={"PS4 - 500 GB F Chassis, Black"}
            img='https://images-na.ssl-images-amazon.com/images/I/51yjk3dvfiL._AC_SL1500_.jpg'
            priceTR={279.99}
            priceUSD={99.99}
            priceEUR={79.99}
            rating={3.8}
          />
          <Product
            id='13123453453453345345123123'
            title={`Vans Ward Hi Suede / Canvas, Women's High Neck Sneakers`}
            img='https://images-na.ssl-images-amazon.com/images/I/81rQwYqpA8L._AC_UL1500_.jpg'
            priceTR={79.99}
            priceUSD={49.99}
            priceEUR={39.99}
            rating={4.5}
          />
        </div>
        <div className='home-row'>
          <Product
            id='13123134435345233345345345354123'
            title={`Bose QuietComfort 35 II Wireless Bluetooth Headphones, Noise-Cancelling, with Alexa voice control - Black`}
            img='https://images-na.ssl-images-amazon.com/images/I/81%2BjNVOUsJL._AC_SL1500_.jpg'
            priceTR={2199.99}
            priceUSD={299.99}
            priceEUR={279.99}
            rating={4.9}
          />
          <Product
            id='131231563635645234564564123'
            title={`Regal Games Classic Card Games, Old Maid, Go Fish, Slapjack, Crazy 8's, War, Silly Monster Memory Match`}
            img='https://images-na.ssl-images-amazon.com/images/I/81NhdeMBlZL._AC_UX342_.jpg'
            priceTR={79.99}
            priceUSD={49.99}
            priceEUR={39.99}
            rating={0.8}
          />
          <Product
            id='1323423467876868123123123'
            title={`AquaSonic Black Series Ultra Whitening Toothbrush - 8 DuPont Brush Heads & Travel Case Included - Ultra Sonic 40,000 VPM Motor & Wireless Charging - 4 Modes w Smart Timer - Modern Electric Toothbrush`}
            img='https://images-na.ssl-images-amazon.com/images/I/71Tiru1uvTL._SL1500_.jpg'
            priceTR={279.99}
            priceUSD={36.95}
            priceEUR={31.99}
            rating={4.2}
          />
        </div>
        <div className='home-row'>
          <Product
            id='1311231123123123132323123123'
            title={`JBL Boombox - Waterproof Portable Bluetooth Speaker - Black`}
            img='https://images-na.ssl-images-amazon.com/images/I/71R1nO2uW0L._AC_SL1500_.jpg'
            priceTR={2900.99}
            priceUSD={400.26}
            priceEUR={380.99}
            rating={3.8}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
