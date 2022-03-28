// Ce composant est un container à composants, dans lequel je mettrais tous mes autres composants.
// Et cet unique composant App sera rendu via la méthode render dans le fichier index.js
// situé a la racine du fichier src.
// == Import npm
import React, { useState } from 'react';
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
const App = () => {
  const [state, setState] = useState({
    count: 0,
    prenom: 'Romain',
  });

  return (
    <div className="blog">
      <Header list={categories} />
      <div>
        <p>
          {state.prenom} Vous avez cliquez {state.count} fois !
        </p>
        <button
          type="button"
          onClick={() => setState({
            ...state, // pas comme les class, ici jécrase tout a la redéfinition du state,
            // je dois récupéréer touc ce qu'il y avait dans le state original
            // avec le spread opérator
            count: state.count + 1,
          })}
        >
          cliquez moi
        </button>
      </div>
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
      </Routes>
      <Footer year={(new Date()).getFullYear()} />
    </div>
  );
};

// == Export
export default App;
