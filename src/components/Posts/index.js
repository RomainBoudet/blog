// import npm
import React from 'react';
import PropTypes from 'prop-types';

// import style
import './style.scss';

// import react
import Post from './Post';

const Posts = () => (
  <main className="posts">
    <h1 className="posts-title">Mon Blog</h1>
    <div className="posts-list">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>

  </main>

);

/* Exmaple.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    myFunction: PropTypes.func.isRequired,
  })).isRequired,
}; */

Posts.propTypes = {
 // propsMain: PropTypes.string.isRequired,
};

export default Posts;
