📦 React Modele
===============

# Pour importer ce projet :


* cp -n ../Mon_modele_REACT/{.*,*} .
* cp -rn ../Mon_modele_REACT/{src,config,public} .

* -n pour do not overwrite et -r pour recursive


* # On change de port dans le fichier config/webpack.dev :

* const port = 8090; => 8080

# installation des dépendances listées dans le package.json
yarn

# lancement du serveur de dev
yarn start
```

---

Build du projet
---------------

Le mode d'utilisation par défaut consiste à lancer un serveur de dev avec `yarn start`, mais alors tout est géré en mémoire : on ne voit jamais le résultat concret du travail de Webpack.

Webpack peut toutefois produire une version concrète du projet dans un dossier `dist/` avec la commande `yarn build`.

`build` permet de construire le projet pour la **production** (version prête pour hébergement).
- Assemblage des fichiers
- Copie de fichiers
- Nettoyage du code
- Minification du code
- ...


# Avec yarn
yarn {script}

# Avec npm
npm run {script}
```

- `start`: Lance le serveur de développement.
- `build`: Lance la construction de la version de production.
- `lint`: Affiche les erreurs dans le code.
- `lint:fix`: Tente de corriger certaines des erreurs dans le code.
- `clean`: Supprime le dossier `dist/`.
- `clean:all`: Supprime `dist/`, `node_modules/` et les fichiers `lock`.

---

(Pour rappel, dans vsc, raccourcis `CTRL + K, M` pour changer de type de fichier js => javascriptreact )
