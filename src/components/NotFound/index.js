import React from 'react';
import propTypes from 'prop-types';
import './style.scss';

const NotFound = ({ message }) => (
  <div>
    <h1 className="not-found"> 404 </h1>
    <p className="message">{ message }</p>
  </div>

);

NotFound.propTypes = {
  message: propTypes.string.isRequired,
};

export default NotFound;
