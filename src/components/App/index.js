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
import categories from '../../data/categories';

const URL = 'https://api-blog.romainboudet.fr/v1';

// == Composant
const App = () => {
  const [loading, setLoading] = useState(false); // doit être dans mon composant React !!
  const [posts, setPosts] = useState([]); // par défault un tableau vide quand je n'ai pas encore d'article !
  // on va chercher les données dans l'API !
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
      //! Pourquoi axios et pas fetch ?
      // axios convertit directement en json, pas besoin de la convertir comme fetch.
      // axios mieux compatible si navigateur ne supporte pas fetch
      // et peux préremplir certain header standart

      console.log("response d'axios => ", response.data);
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

  // Désormais cette fonction qui utilise le state 'post', doit être dans mon composant pour y avoir accés !
  const filterPosts = (category) => {
    if (category === 'Accueil') {
      return posts;
    }
    return posts.filter((item) => item.category === category);
  };

  // useEffect :
  // Ce hook permet de gérér les life cycle comme les fonction comonent didMount,
  // didUpdate et willUnmount dans un composant class
  // Ce hook attent TOUJOURS un fonction en premier paramétre !
  // et OPTIONELLEMENT un tableau en deuxieme paramétre !
  //! Il remplace a la fois didMount et didUpdate
  /* useEffect(() => {
    document.title = 'Mon blog !';
  }); */

  //! Pour un didMount uniquement , on passe un tableau vide en second paramétre
  // On update que si une variable est présente dans le tableau en second paramétre
  // si pas de variable dans ce tableau, pas d'update, juste au montage.
  /*  useEffect(() => {
    document.title = 'Mon blog au montage !';
  }, []); */

  //! Pour un didMount et un didUpdate sous condition !
  // par exemple mettre a jour le nom de la page uniquement
  // si je change de catégorie d'arciles.
  // pour ça je donne une variable dans mon tableau en second paramétre
  // si la variable a changé depuis le dernier render, la fonction sera éxécuté!
  // On peut potentiellement mettre le state dedans.
  /* useEffect(() => {
    document.title = 'Mon blog si un telle ou telle valeur a changé !';
  }, [mavariableasurveiller, uneautrevariableasurveiller]); */

  //! Pour remplacer un willUnmount, avant qu'un composant soit enlevé du DOM, pour nettoyer..
  // React va exécuter cette fonction la et récupérer ce qu'elle return
  useEffect(() => {
    // cette partie sera éxécuté direct
    const intervalle = setInterval(() => {
      console.log('tic tac');
    }, 1000);
    // et cette partie ne sera éxécuté que juste avant de démonter mon composant du DOM
    return () => {
      clearInterval(intervalle);
    };
  }, []);

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
