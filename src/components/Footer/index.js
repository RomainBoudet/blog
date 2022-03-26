// import npm
import React from 'react';
import PropTypes from 'prop-types';

// import style
import './style.scss';

// import react

const Footer = ({ year }) => (
  <footer className="copyright">
    <span> Ⓒ Romain Boudet - {year} </span>
  </footer>

);

/* Exmaple.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    myFunction: PropTypes.func.isRequired,
  })).isRequired,
}; */

Footer.propTypes = {
  year: PropTypes.number.isRequired,
};

export default Footer;
