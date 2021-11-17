import React from 'react';
import Slider from '../component/Slider';
import Nav from '../component/Nav';
import exchange from '../assets/svg/sync-solid.svg';
import transport from '../assets/svg/shipping-fast-solid.svg';
import share from '../assets/svg/handshake-regular.svg';

const LandingPage = () => {
  return (
    <div>
      <Nav />
      <Slider />
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          {icones.map((item) => {
            return (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src={item.image}
                  width="35px"
                  height="80px"
                  alt="exchange"
                />
                <div>{item.title}</div>
              </div>
            );
          })}
        </div>
        {/* <div>wellcome in my landingPage</div> */}
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
