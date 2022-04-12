/* eslint-disable max-len */
// Ce composant est un container à composants, dans lequel je mettrais tous mes autres composants.
// Et cet unique composant App sera rendu via la méthode render dans le fichier index.js
// situé a la racine du fichier src.
// == Import npm
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import DOMPurify from 'dompurify';

// == Import
import './styles.scss';
import Header from '../Header';
import Posts from '../Posts';
import Postentier from '../Posts/Postentier';
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

      const res = await axios({
        method: 'get',
        url: `${URL}/posts`,
      });

      const safeData = [];
      // eslint-disable-next-line no-restricted-syntax
      for (const item of res.data) {
        const data = Object.fromEntries(Object.entries(item).map(([key, value]) => [key, DOMPurify.sanitize(value)]));
        safeData.push(data);
      }

      setPosts(safeData);

      // setPosts(DOMPurify.sanitize(response.data));
      // On veut purifier chaque élement recu en provenance de l'API avant affichage.
      // Dans le cas d'une API infecté, on se prémuni d'injecter du code malicieux
      // res.data est un tableau d'objet.
      // et pour chaque objet je dois boucler dessus.
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
