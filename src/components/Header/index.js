// import npm
import React from 'react';
import PropTypes from 'prop-types';

// import style
import './style.scss';

// import react

const Header = ({ list }) => (
  <header className="menu">
    <nav>
      {
        list.map((item) => (
          <a
            key={item.label}
            className="menu-link"
            href={item.route}
          >{item.label}
          </a>
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
