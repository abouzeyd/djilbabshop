import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container blockFooter">
        <div>
          <h5>Qui somme nous</h5>
          <p className="paragraphe">
            Nous sommes des soeurs qui sommes aimons notre religion et qui
            veulent valoriser celle-ci par ces acoutrement
          </p>
        </div>
        <div>
          <h5>Localisation</h5>
          <p className="paragraphe">
            Nous sommes sise à Abidjan precisement à Anyama
          </p>
        </div>
        <div>
          <h5>Contacte</h5>
          <div>
            <a href="/" className="contact__footer">
              07 49607307
            </a>
          </div>
          <div>
            <a href="/" className="contact__footer">
              07 49607307
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
