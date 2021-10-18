import React, { Fragment } from "react";
import Affichage from "./components/Affichage";

const App = () => {

  // tableau JSON contenu dans le state
  const state = [
    {
        colonne1: 'premiere ligne',
        colonne2: 'colonne2'
    },
    {
        colonne1: 'deuxieme ligne',
        colonne2: 'colonne2'
    },
    {
        colonne1: 'troisieme ligne',
        colonne2: 'colonne2'
    },
    {
        colonne1: 'quatrieme ligne',
        colonne2: 'colonne2'
    }
  ]

    return (
      <Fragment>
        <Affichage data={state} />
      </Fragment>
    );
  
}

export default App;