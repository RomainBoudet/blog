// import npm
import React from 'react';
import PropTypes from 'prop-types';

// import style
import './style.scss';

// import react
import Post from './Post';

const Posts = ({ list }) => (
  <main className="posts">
    <h1 className="posts-title">Mon Blog</h1>
    <div className="posts-list">
      {list.map((item) => (
        <Post
          key={item.id}
          {...item} // je veux créer autant de props que ce qu'il y a dans mon objet: je destructure
        />
      ))}
    </div>

  </main>

);

Posts.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
};

export default Posts;
