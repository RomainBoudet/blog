import React from 'react';
import propTypes from 'prop-types';
import './style-post.scss';

const Post = () => (
  <article className="post">
    <h2 className="post-title">Titre</h2>
    <div className="post-category">Categorie</div>
    <p className="post-excerpt">Occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </article>
);

/* Post.propTypes = {

}; */

export default Post;
