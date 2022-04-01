/* eslint-disable max-len */
// Ce composant est un container à composants, dans lequel je mettrais tous mes autres composants.
// Et cet unique composant App sera rendu via la méthode render dans le fichier index.js
// situé a la racine du fichier src.
// == Import npm
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

// == Import
import './styles.scss';
import Header from '../Header';
import Posts from '../Posts';
import Footer from '../Footer';
import NotFound from '../NotFound';
import Spinner from '../Spinner';

// == Import data
import categories from '../../data/categories';

const URL = 'https://api-blog.romainboudet.fr/v1';

// == Composant
const App = () => {
  const [loading, setLoading] = useState(false); // doit être dans mon composant React !!
  const [posts, setPosts] = useState([]); // par défault un tableau vide quand je n'ai pas encore d'article !
  const fetchPost = async () => {
    try {
      setLoading(true);

      const response = await axios({
        method: 'get',
        url: `${URL}/posts`,
      });
      // avec axios la data est envoyé par le serveur
      // data toujours dans response .data
      // je met le tableau reçu dans mon state !
      console.log("response d'axios => ", response.data);
      setPosts(response.data);
    }
    catch (error) {
      console.trace(error);
    }
    // le finally est toujours éxécuté !
    // succé ou non
    finally {
      setLoading(false);
    }
  };

  // Désormais cette fonction qui utilise le state 'post', doit être dans mon composant pour y avoir accés !
  const filterPosts = (category) => {
    if (category === 'Accueil') {
      return posts;
    }
    return posts.filter((item) => item.category === category);
  };

  return (
    <div className="blog">
      <Header list={categories} />
      <button
        type="button"
        onClick={fetchPost}
      >
        change loading
      </button>
      {
      loading && <Spinner />
      }
      {
      !loading && (
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
      )

      }

      <Footer year={(new Date()).getFullYear()} />
    </div>
  );
};

// == Export
export default App;
