/* eslint-disable max-len */
// Ce composant est un container à composants, dans lequel je mettrais tous mes autres composants.
// Et cet unique composant App sera rendu via la méthode render dans le fichier index.js
// situé a la racine du fichier src.
// == Import npm
import React, { useState, useEffect } from 'react';
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
const URL = 'https://api-blog.romainboudet.fr/v1';

// == Composant
const App = () => {
  const [loading, setLoading] = useState(false); // doit être dans mon composant React !!
  const [posts, setPosts] = useState([]); // par défault un tableau vide quand je n'ai pas encore d'article !
  const [category, setCategory] = useState([]); // par défault un tableau vide quand je n'ai pas encore d'article !

  // on va chercher les données dans l'API !

  const fetchPost = async () => {
    try {
      setLoading(true);

      const response = await axios({
        method: 'get',
        url: `${URL}/posts`,
      });
      setPosts(response.data);
    }
    catch (error) {
      console.trace(error);
    }
    // le finally est toujours éxécuté !
    // succés ou non
    finally {
      setLoading(false);
    }
  };

  const fetchCategory = async () => {
    try {
      setLoading(true);

      const response = await axios({
        method: 'get',
        url: `${URL}/category`,
      });
      setCategory(response.data);
    }
    catch (error) {
      console.trace(error);
    }
    // le finally est toujours éxécuté !
    // succés ou non
    finally {
      setLoading(false);
    }
  };

  // J'utilise useEffect pour exécuter une fonction juste aprés mon rechargement
  // juste aprés mon 1er render seulement, avec un tableau vide.
  // J'utilise useEffect pour appleler on fnction fetch !
  useEffect(() => {
    fetchPost();
    fetchCategory();
  }, []);

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
      loading && <Spinner />
      }
      {
      !loading && (
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
          {/* ici je peux ajouter une 404 ! en selectionnant *,
      on prend tout ce qui n'était pas pris en compte précédemment, fallBack ! */
      }
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
