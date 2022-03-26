// import npm
import React from 'react';
import PropTypes from 'prop-types';

// import style
import './style.scss';

// import react

const Footer = ({ propsFooter }) => (
  <footer>
    <span> Ⓒ Romain Boudet - {propsFooter} </span>
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
  propsFooter: PropTypes.number.isRequired,
};

export default Footer;
