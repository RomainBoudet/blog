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

// == Composant
const App = () => (
  <div className="blog">
    <Header propsHeader="REACT !" />
    <Posts propsMain="toujours en React !" />
    <Footer propsFooter={(new Date()).getFullYear()} />
  </div>
);

// == Export
export default App;
