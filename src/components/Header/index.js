// import npm
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// import style
import './style.scss';

// import react

const Header = ({ list }) => (
  <header className="menu">
    <nav>
      <a href="https://romainboudet.fr" target="_blank" rel="noreferrer"><img className="logo" src="/RB.ico" alt="Logo Romain Boudet" /></a>
      {
        list.map((item) => (
          <NavLink // rajoute la classe 'active' si sélectionné
            key={item.label}
            className="menu-link"
            to={item.route}
          >{item.label}
          </NavLink>
        ))
      }
    </nav>
  </header>
);

Header.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
};

export default Header;
