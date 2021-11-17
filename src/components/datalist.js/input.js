import React from "react";
import axios from 'axios';

export default class INPUT extends React.Component {
    state = {
        name: '',
      };
          handleChange= e =>{
              this.setState({name:e.target.value});
          }
            handleSubmit= e =>{
              e.preventdDefault();

              const user={
                    name: this.state.name
              }
              axios.post('https://jsonplacehloder.typicode.com/users',{user})
              
              .then(res=>{
                  console.log('ici le post ',res);
                  console.log(res.data);
                
              })
            };
            render(){
                return(
                    <form onSubmit={this.handleSubmit}>
                        <label>
                           <span><b> personne recherché </b></span> <input type="text"  onChange={this.handleChange}></input>
                            
                            <button type="submit">ajouter</button>
                        </label>
                    </form> 
                )
            }
        }
       
    
       

