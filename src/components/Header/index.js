// import npm
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';

// import style
import './style.scss';

// import react

const Header = ({ list }) => (
  <header className="menu">
    <nav>
      {
        list.map((item) => (
          <NavLink
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
