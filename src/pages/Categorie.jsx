import React from 'react';
import Nav from '../component/Nav';
import Footer from '../component/Footer';
import Black from '../assets/images/black2.jpg';

const Categorie = () => {
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="category__bloc">
          <div>
            <img src={Black} alt="djilbab" className="category__images" />
          </div>
          <div>
            <h3 className="category__title">
              Djilbab une Piece avec un tres bon tissus direct de la Mecque
            </h3>
            <p className="category__paragraph">Brand: LA Soeur Salafi</p>
            <p className="category__paragraph"> Reference: Noir</p>
            <span className="category__price"> 10.000fcf</span>
            <div className="category__submit">
              <a href="/" className="category__order">
                passer votre commande
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Categorie;
