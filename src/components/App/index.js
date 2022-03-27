// Ce composant est un container à composants, dans lequel je mettrais tous mes autres composants.
// Et cet unique composant App sera rendu via la méthode render dans le fichier index.js
// situé a la racine du fichier src.
// == Import npm
import React from 'react';
import { Route, Routes } from 'react-router-dom';

// == Import
import './styles.scss';
import Header from '../Header';
import Posts from '../Posts';
import Footer from '../Footer';
import NotFound from '../NotFound';

// == Import data
import categories from '../../data/categories';
import postsData from '../../data/posts';

const filterPosts = (category) => {
  if (category === 'Accueil') {
    return postsData;
  }
  return postsData.filter((item) => item.category === category);
};

// == Composant
const App = () => (
  <div className="blog">
    <Header list={categories} />
    <Routes>
      {
        categories.map((item) => (
          <Route
            key={item.route}
            path={item.route}
            element={(
              <Posts list={filterPosts(item.label)} />
            )}
          />
        ))
      }
      {/* ici je peux ajouter une 404 ! en selectionnant *,
  on prend tout ce qui n'était pas pris en compte précédemment, fallBack ! */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer year={(new Date()).getFullYear()} />
  </div>
);

// == Export
export default App;
