import React, { Component } from 'react';
import FileUploader from './FileUploader';
import Affichage from './Affichage';
import Search from './Search'
import axios from 'axios';

class Home extends Component {

    // git Refactor : motCle -> keyWord, resultats -> results_tab
    state = {
        'data': JSON.parse(localStorage.getItem("data")),
        'keyWord': '',
        'results_tab': []
        
    }

    // git Change : condition d'affichage en fonction de la contenance de resultats
    Afficher() {
        if (this.state.data) {
            if (this.state.results_tab.length > 0) {
                return <Affichage data={this.state.results_tab} />
            } else {
                return <Affichage data={this.state.data} />
            }
        } else {
            return null
        }
    }


    // git Add commentary : Rechargement de page
    handleClick = () => {
        window.location.reload();
    }

    // git Add commentary : Integre le mot cle inscrit par l'utilisateur et l'enregistre dans le state a la cle "keyWord"
    //                      Envoi le keyWord a la fonction/composant Search et retourne un tableau filtré
    //                      Inscrit le tableau filtré results dans le state a la clé "results_tab"
    //                      Appelle la fonction Afficher pour mettre a jour l'affichage avec le nouveau tableau de resutat results_tab
    handleChange = event => {
        this.setState({'keyWord': event.target.value})
        const results = Search(this.state.keyWord, this.state.data)
        this.setState({'results_tab': results})
        this.Afficher()
    }


    handleSubmit= e =>{
        e.preventdDefault();
        axios.post('http://localhost:5500/',{data : this.state.data})
        .then(res=>{
            console.log('ici le post ',res);
            console.log(res.data);
          
        })
      };
    
    render () {

        return (
            <div>
               
                <div className="Home">

                  <form onSubmit={this.handleSubmit}>
                        <div className="file-uploader col-10 mt-5 d-flex">
                            <input type="file" className="form-control rounded-pill col-10" accept=".json, .csv" onChange={FileUploader}/>
                            <input type="submit" className="ms-1 btn btn-secondary rounded-pill col-2" onClick={this.handleClick}/>
                        </div>
                    </form>


                    <div className="file-uploader col-10 mt-5 d-flex mb-5">
                        <input type="search" className="  form-control rounded-pill " placeholder="Rechercher" onChange={this.handleChange}/>
                        <input type="submit" className=" ms-1 btn btn-primary rounded-pill col-2" onClick={this.handleChange}/>
                    </div>
                </div>
                
                {this.Afficher()}
            </div>
        )
    }
}

export default Home;