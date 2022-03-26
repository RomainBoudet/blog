// import npm
import React from 'react';
import PropTypes from 'prop-types';

// import style
import './style.scss';

// import react

const Main = ({ propsMain }) => (
  <main>
    <h1>Mon body {propsMain} </h1>
  </main>

);

/* Exmaple.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    myFunction: PropTypes.func.isRequired,
  })).isRequired,
}; */

Main.propTypes = {
  propsMain: PropTypes.string.isRequired,
};

export default Main;
