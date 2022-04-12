import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style-post.scss';

const Post = ({
  title, category, excerpt, slug,
}) => (
  <article className="post">
    <Link to={`/articles/${slug}`}>
      <h2 className="post-title">{title}</h2>
    </Link>
    <div className="post-category">{category}</div>
    <p className="post-excerpt">{excerpt}</p>
  </article>
);

Post.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default Post;
