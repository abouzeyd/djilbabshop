import React from 'react';
import Slider from '../component/Slider';
import Nav from '../component/Nav';
import exchange from '../assets/svg/share-square-regular.svg';
import transport from '../assets/svg/shipping-fast-solid.svg';
import share from '../assets/svg/handshake-regular.svg';
import landingImage from '../data/landingImages';
import Footer from '../component/Footer';

const LandingPage = () => {
  return (
    <div>
      <Nav />
      <div className="container">
        <Slider />
        <div className="containerIcone">
          {icones.map((item) => {
            return (
              <div className="iconesvg">
                <img src={item.image} className="icones" alt="exchange" />
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
                <a href={item.link} className="linkCarte">
                  <span className="reduction">{item.reduction}</span>
                  <img src={item.image} className="width" alt="djilbab" />
                  <div className="titleDjilbab">{item.title}</div>
                  <p className="priceDjilbab">{item.price}</p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;

const icones = [
  { image: exchange, title: 'Efficacité' },
  { image: transport, title: 'Rapidité' },
  { image: share, title: 'Fiabilité' },
];
