import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import './style-post.scss';

import NotFound from '../NotFound';

const Postentier = ({ list }) => {
  // je récupére le slug de mon article
  const { slug } = useParams();
  // il faut que j'ai accés a tous mes articles
  // et je recherche les données lié a un post précis, celuis qui posséde mon slug
  const article = list.find((item) => item.slug === slug);
  // si article vaut undefined car pas de slug :
  // 404
  if (!article) return <NotFound message="Aucun article avec ce slug !" />;
  const { title, content, category } = article;

  return (
    <article className="post full">
      <h2 className="post-title">{title}</h2>
      <div className="post-category">{category}</div>
      <p className="post-excerpt">{content}</p>
    </article>
  );
};

Postentier.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  })).isRequired,
};

export default Postentier;
