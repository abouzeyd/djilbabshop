import React from 'react';
import { Carousel } from 'react-bootstrap';
import Images from '../assets/images/meric-dagli-7NBO76G5JsE-unsplash.jpg';
import Images2 from '../assets/images/quino.jpg';

const Header = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img className=" slide__image" src={Images} alt="First slide" />
          <Carousel.Caption className="carousel__position">
            <div className="carousel__background">
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="slide__image" src={Images2} alt="Second slide" />

          <Carousel.Caption className="carousel__position">
            <div className="carousel__background">
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Header;
