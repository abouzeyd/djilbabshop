import React from 'react';
import Slider from '../component/Slider';
import Nav from '../component/Nav';
import exchange from '../assets/svg/sync-solid.svg';
import transport from '../assets/svg/shipping-fast-solid.svg';
import share from '../assets/svg/handshake-regular.svg';
import landingImage from '../data/landingImages';

const LandingPage = () => {
  return (
    <div>
      <Nav />
      <Slider />
      <div className="container">
        <div className="containerIcone">
          {icones.map((item) => {
            return (
              <div className="iconesvg">
                <img
                  src={item.image}
                  width="50px"
                  height="80px"
                  alt="exchange"
                />
                <div className="textIcone">{item.title}</div>
              </div>
            );
          })}
        </div>
        <div className="titleCollection">NOUVELLE COLLECTION DE DJILBAB</div>
        <div className="gridImage">
          {landingImage.map((item) => {
            return (
              <div className="carte">
                <img src={item.image} className="width" alt="djilbab" />
                <div className="titleDjilbab">{item.title}</div>
                <p className="priceDjilbab">{item.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

const icones = [
  { image: exchange, title: 'Efficacité' },
  { image: transport, title: 'Rapidité' },
  { image: share, title: 'Fiabilité' },
];
