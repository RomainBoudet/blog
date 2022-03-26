// import npm
import React from 'react';
import PropTypes from 'prop-types';

// import style
import './style.scss';

// import react

const Header = ({}) => (
  <header className="menu">
    <nav>
      <a className="menu-link">Lien</a>
      <a className="menu-link active">Lien</a>
    </nav>
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
 // propsHeader: PropTypes.string.isRequired,
};

export default Header;
