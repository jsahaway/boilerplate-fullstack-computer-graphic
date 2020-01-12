// store/UserProvider.js
import React, { createContext, Component } from 'react'; // on importe createContext qui servira à la création d'un ou plusieurs contextes

/**
 * `createContext` contient 2 propriétés :
 * `Provider` et `Consumer`. Nous les rendons accessibles
 * via la constante `CtxData` et on initialise une
 * propriété par défaut "name" qui sera une chaîne vide.
 * On exporte ce contexte afin qu'il soit exploitable par
 * d'autres composants par la suite via le `Consumer`
 */
export const DataContext = createContext();

/**
 * la classe UserProvider fera office de... Provider (!)
 * en englobant son enfant direct
 * dans le composant éponyme. De cette façon, ses values
 * seront accessibles de manière globale via le `Consumer`
 */
export const DataProvider = ({ children, data }) => {
  // state = {
  //   data: { zer: 'zer' }, // une valeur de départ
  // };
  console.log('DataPovider', data);
  return (
    /**
     * la propriété value est très importante ici, elle rend
     * le contenu du state disponible aux `Consumers` de l'application
     */
    <DataContext.Provider value={data}>{children}</DataContext.Provider>
  );
};
