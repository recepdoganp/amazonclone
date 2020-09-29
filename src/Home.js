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
            id='111231334534512312'
            title={"PS4 - 500 GB F Chassis, Black"}
            img='https://images-na.ssl-images-amazon.com/images/I/51yjk3dvfiL._AC_SL1500_.jpg'
            price={279.99}
            rating={5}
          />
          <Product
            id='13123345345123123'
            title={`Vans Ward Hi Suede / Canvas, Women's High Neck Sneakers`}
            img='https://images-na.ssl-images-amazon.com/images/I/81rQwYqpA8L._AC_UL1500_.jpg'
            price={79.99}
            rating={4.5}
          />
        </div>
        <div className='home-row'>
          <Product
            id='1312313443534523123'
            title={`Vans Ward Hi Suede / Canvas, Women's High Neck Sneakers`}
            img='https://images-na.ssl-images-amazon.com/images/I/81rQwYqpA8L._AC_UL1500_.jpg'
            price={59.99}
            rating={4.9}
          />
          <Product
            id='13112312323123123'
            title={`Vans Ward Hi Suede / Canvas, Women's High Neck Sneakers`}
            img='https://images-na.ssl-images-amazon.com/images/I/81rQwYqpA8L._AC_UL1500_.jpg'
            price={79.99}
            rating={4.5}
          />
          <Product
            id='13234234123123123'
            title={`Vans Ward Hi Suede / Canvas, Women's High Neck Sneakers`}
            img='https://images-na.ssl-images-amazon.com/images/I/81rQwYqpA8L._AC_UL1500_.jpg'
            price={79.99}
            rating={3.6}
          />
        </div>
        <div className='home-row'>
          <Product
            id='131231234564564123'
            title={`Vans Ward Hi Suede / Canvas, Women's High Neck Sneakers`}
            img='https://images-na.ssl-images-amazon.com/images/I/81rQwYqpA8L._AC_UL1500_.jpg'
            price={79.99}
            rating={0.8}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
