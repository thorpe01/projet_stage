import React from 'react';

import axios from 'axios';

export default class Datalist extends React.Component {

    state = {
        persons: [],
      }
    
         componentDidMount(){

          axios.get('https://jsonplaceholder.typicode.com/users')
          
          .then(res=>{
            console.log( 'ici le get', res);
          this.setState({persons:res.data});
          })
         }
        
         render(){
           return(
             <ul>
               {this.state.persons.map(person =><p key={person.id}>{person.name}</p>)}

             </ul>
           )
           }
}