// Ce composant est un container à composants, dans lequel je mettrais tous mes autres composants.
// Et cet unique composant App sera rendu via la méthode render dans le fichier index.js
// situé a la racine du fichier src.
// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import Header from '../Header';
import Posts from '../Posts';
import Footer from '../Footer';
import NotFound from '../NotFound';

// == Import data
import categories from '../../data/categories';
import postsData from '../../data/posts';

// == Composant
const App = () => (
  <div className="blog">
    <Header list={categories} />
    <Posts list={postsData} />
    <Footer year={(new Date()).getFullYear()} />
  </div>
);

// == Export
export default App;
