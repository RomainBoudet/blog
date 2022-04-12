// import npm
import React from 'react';
import PropTypes from 'prop-types';

// import style
import './style.scss';

// import react

const Footer = ({ year }) => (
  <footer className="copyright">
    <a href="https://romainboudet.fr">
      <span> Ⓒ Romain Boudet - {year} </span>
    </a>
  </footer>

);

Footer.propTypes = {
  year: PropTypes.number.isRequired,
};

export default Footer;
