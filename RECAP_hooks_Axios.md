
# Axios :
avec axios la data est envoyé par le serveur
data toujours dans response .data
je met le tableau reçu dans mon state !

##### Pourquoi axios et pas fetch ?
* axios convertit directement en json, pas besoin de la convertir comme fetch.
* axios mieux compatible si navigateur ne supporte pas fetch
* et peux préremplir certain header standart

# Les hooks React

Les hooks sont des fonctions (toujours) que je peux utiliser à l'intérieur d'un composant React de type function (uniquement). Par convention, TOUS les hooks ont un nom qui commence par "use...".

## useState

```javascript
import React, { useState } from 'react';

function Example() {
  /* 
    lorsque j'exécute useState()
    Je peux donner à mon state une valeur initiale
    en la mettant en argument de useState
    
    * ça me renvoie un tableau
    * Le premier élément dans ce tableau est mon state
    * Le deuxième est la fonction capable de modifier ce state
    
    Je peux donc destructurer le tableau reçu, et stocker le state
    ainsi que la fonction pour le modifier dans des variables de mon choix
  */

  // Je crée un state qui vaut 0 en valeur initial, et qui s'appelle "count"
  // Si je veux modifier ce state, je dois utiliser la fonction qui vient avec
  // ici je l'ai appelée "setCount"
  const [count, setCount] = useState(0);
  const [prenom, setPrenom] = useState("");

  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>
        Cliquez ici
      </button>
    </div>
  );
}
```

Ce hook nous permet de rajouter un state à un composant React (de type fonction).

Ce hook possède des similarités avec le state d'une class
  * React va automatiquement surveiller les changements de state
  * Si j'utilise la méthode fournie par react pour modifier mon state -> nouveau rendu des composants
  * La seule façon de passer de la data de composant en composant, c'est toujours via les props
    * Les props ne peuvent toujours être donnés que de parent -> enfant

mais aussi des différences

  * Je peux créer plusieurs states
  * Je peux leur donner les noms que je veux
  * Un state n'est plus FORCÉMENT un objet, je peux mettre n'importe quel type de data
  * La fonction qui modifie le state écrase COMPLÈTEMENT l'ancien
    * Si je veux en garder une copie, je dois le faire moi même

```javascript
const [state, setState] = useState({
    count: 0,
    prenom: 'Toto',
  });

return (
    <div className="blog">
      <Header list={categoriesData} />
      <p>Bienvenue {state.prenom}.Vous avec cliqué {state.count} fois sur le bouton</p>
      <button
        type="button"
        onClick={() => {
          // Je return un nouvel objet de state qui va écraser l'ancien
          // donc je veille à copier TOUT le contenu de l'original en premier
          // avant de modifier ce que je veux modifier dans le nouveau
          setState({
            ...state, // Je récupère TOUT ce qu'il y avait dans le state original
            count: state.count + 1,
          });
        }}
      >Cliquez moi
      </button>


```



## useEffect

Dans la logique de React, un "effet de bord", ou "side effect" c'est tout morceaud de code qui a un "impact" en dehors du rendu du html du composant. Le job du "render" dans un class est de fabriquer le DOM: ça n'est pas un side effect. Par contre, toutes les autres méthodes de lifecycles qu'on a vu ensemble (didmount, didupdate et willunmount) sont là pour nous simplifier le travail en dehors du rendu du dom -> Ce sont toutes des choses qui sont "à côté" du rôle principal de react -> side effects

useEffect est LE hook fourni par React pour remplacer toutes les méthodes qu'on a utilisé jusqu'à maintenant pour faire des side effects:

* didMount
* didUpdate
* willUnmount


Ce hook lorsqu'on l'exécute attend TOUJOURS UN SEUL PREMIER PARAMÈTRE: une fonction.
Et optionnellement un deuxieme qui est TOUJOURS un tableau

### didMount ET didUpdate en même temps

```javascript

 // Similaire à componentDidMount et componentDidUpdate :
  useEffect(() => {
    // Met à jour le titre du document via l’API du navigateur
    document.title = `Vous avez cliqué ${count} fois`;
  });
```


### didMount uniquement

```javascript

 // Similaire à componentDidMount
  useEffect(() => {
    // Met à jour le titre du document via l’API du navigateur
    document.title = `Vous avez cliqué ${count} fois`;
  }, []);
```

### didMount ET didUpdate mais seulement sous certaines conditions

Je peux donner une ou des variables dans le tableau qui vient en deucième parametre.
Si le contenu d'une de ces variables a changé depuis le dernier render, la fonction sera exécutée à nouveau. Sinon, la fonction sera ignorée et pas exécutée une nouvelle fois

```javascript

 // Similaire à componentDidMount
  useEffect(() => {
    // Met à jour le titre du document via l’API du navigateur
    document.title = `Vous avez cliqué ${count} fois`;
  }, [variableQueJeSouhaiteSurveiller, uneAutre]);
```

### willUnmount

Le willUnmout dans la class était exécuté juste avant que React retire notre composant dans le DOM, il servait principalement à faire le ménage (par exemple arrêter un setInterval lancé au didMount)

```javascript
 // Similaire à componentDidMount
  useEffect(() => {
    // Je crée un interval toutes les secondes pour l'exmple
    const interval = setInterval(() => { console.log('tic') }, 1000);
    // Pour dire à react quoi faire avant d'enlever mon composant du DOM
    // je dois lui return la fonction à exécuter
    return () => {
      // React exécutera cette fonction là juste avant de virer mon composant du DOM
      clearInterval(interval);
    }
    ]
  }, []);

```
