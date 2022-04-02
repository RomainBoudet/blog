import React from 'react';
import PropTypes from 'prop-types';
import './style-post.scss';
import DOMPurify from 'dompurify';


const Post = ({ title, category, excerpt }) => (
  <article className="post">
    <h2 className="post-title">{title}</h2>
    <div className="post-category">{category}</div>
    <p
      className="post-excerpt"
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(excerpt)}}
    />
  </article>
);

Post.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default Post;
