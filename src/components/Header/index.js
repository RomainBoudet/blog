// import npm
import React from 'react';
import PropTypes from 'prop-types';

// import style
import './style.scss';

// import react

const Header = ({ propsHeader }) => (
  <header>
    <h1>Ho..., le beau front qu'on va faire en {propsHeader} </h1>
  </header>
);

/* Exmaple.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    myFunction: PropTypes.func.isRequired,
  })).isRequired,
}; */

Header.propTypes = {
  propsHeader: PropTypes.string.isRequired,
};

export default Header;
