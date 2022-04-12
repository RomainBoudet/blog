/* eslint-disable max-len */
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
import Postentier from '../Posts/Postentier';
import Footer from '../Footer';
import NotFound from '../NotFound';
import Spinner from '../Spinner';
import useAjax from '../../hook/useAjax';

// == Import data
const URL = 'https://api-blog.romainboudet.fr/v1';

// == Composant
const App = () => {
  const [posts, postLoading] = useAjax(`${URL}/posts`);
  const [category, categoriesLoading] = useAjax(`${URL}/category`);

  // Désormais cette fonction qui utilise le state 'post', doit être dans mon composant pour y avoir accés !
  const filterPosts = (choosenCategory) => {
    if (choosenCategory === 'Accueil') {
      return posts;
    }
    return posts.filter((item) => item.category === choosenCategory);
  };

  return (
    <div className="blog">
      <Header list={category} />
      {
      (postLoading || categoriesLoading) && <Spinner />
      }
      {
      !(postLoading || categoriesLoading) && (
        <Routes>
          {
        category.map((item) => (
          <Route
            key={item.route}
            path={item.route}
            element={(
              <Posts list={filterPosts(item.label)} />
            )}
          />
        ))
      }

          <Route
            path="/articles/:slug"
            element={(
              <Postentier
                list={posts}
              />
              )}
          />

          {/* ici je peux ajouter une 404 ! en selectionnant *,
      on prend tout ce qui n'était pas pris en compte précédemment, fallBack ! */
      }
          <Route path="*" element={<NotFound message="Aucun article correspondant n'a été trouvé !" />} />
        </Routes>
      )

      }

      <Footer year={(new Date()).getFullYear()} />
    </div>
  );
};

// == Export
export default App;
