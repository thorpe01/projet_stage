import React, { Fragment } from "react";

const App = () => {

  // tableau JSON contenu dans le state
  const state = [
    {
        colonne1: 'colonne1',
        colonne2: 'colonne2'
    },
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
    }
  ]

  
  
  const header = [state[0]]
  const headerLigne = [state[0]][0]
  const table = []

  for (let index = 1; index < state.length; index++) {
    table.push(state[index])  
  }
   
  console.log(header)
  console.log(headerLigne)
  console.log(table)
  
  const ligneHeader = (header) => {
    return (
      <Fragment>
        <th>{header.colonne1}</th>
        <th>{header.colonne2}</th>
      </Fragment>
    )
  }
 
  const tableHeader = (index) => {
    return ( 
      <Fragment>
        <tr key={index}>
          {header.map(ligneHeader)}
        </tr>
      </Fragment>
    )
  }

  const ligneBody = (table) => {
    
    return (
      <Fragment>
        {/* table boucle sur tous les elements du tableau donc ca l'affiche 3 fois a chaque fois */}
        <td>{table.colonne1}</td>
        <td>{table.colonne2}</td>
      </Fragment>
    )
  }

  // jaffiche table.lenght fois ca dans mon tbody
  const tableBody = (index) => {
    return ( 
      <Fragment>
        <tr key={index}>
          {table.map(ligneBody)}
        </tr>
      </Fragment>
    )
  }

    return (
      <Fragment>
        <h1 className="h1">AppTab</h1>
        <table className="table">
          <thead>
            {header.map(tableHeader)}
          </thead>
          <tbody>
            {table.map(tableBody)}
          </tbody>
        </table>
      </Fragment>
    );
  
}

export default App;