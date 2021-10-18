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
  
  // const header = [state[0]]
  // const headerLigne = [state[0]][0]
  // const table = []

  // for (let index = 1; index < state.length; index++) {
  //   table.push(state[index])  
  // }
   
  // console.log(header)
  // console.log(headerLigne)
  // console.log(table[0].colonne1)
  
  // const ligneHeader = (header) => {
  //   return (
  //     <Fragment>
  //       <th>{header.colonne1}</th>
  //       <th>{header.colonne2}</th>
  //     </Fragment>
  //   )
  // }
 
  // const tableHeader = (index) => {
  //   return ( 
  //     <Fragment>
  //       <tr key={index}>
  //         {header.map(ligneHeader)}
  //       </tr>
  //     </Fragment>
  //   )
  // }

  // const ligneBody = (table) => {
    
  //   return (
  //     <Fragment>
  //       {/* table boucle sur tous les elements du tableau 'state' donc ca l'affiche 3 fois a chaque fois */}
  //       <td>{table.colonne1}</td>
  //     </Fragment>
  //   )
  // }

  // // jaffiche table.lenght fois ca dans mon tbody
  // const tableBody = (index) => {
  //   return ( 
  //     <Fragment>
  //       <tr key={index}>
  //         {table.map(ligneBody)}
  //       </tr>
  //     </Fragment>
  //   )
  // }

    return (
      <Fragment>
        <Affichage data={state} />
      </Fragment>
    );
  
}

export default App;