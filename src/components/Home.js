import React, { Component } from 'react';
import FileUploader from './FileUploader';
import Affichage from './Affichage';
import Search from './Search'

class Home extends Component {

    state = {
        'data': JSON.parse(localStorage.getItem("data")),
        'motCle': '',
        'resultats': []
    }

    // git Change : condition d'affichage en fonction de la contenance de resultats
    Afficher() {
        if (this.state.data) {
            if (this.state.resultats.length > 0) {
                return <Affichage data={this.state.resultats} />
            } else {
                return <Affichage data={this.state.data} />
            }
        } else {
            return null
        }
    }

    handleClick = () => {
        window.location.reload();
    }

    handleChange = event => {
        this.setState({'motCle': event.target.value})
        const resultats = Search(this.state.motCle, this.state.data)
        console.log(resultats)
        this.setState({'resultats': resultats})
        this.Afficher()
    }

    render () {

        return (
            <div>
                <div className="Home">
                    <div className="file-uploader col-10 mt-5 d-flex">
                        <input type="file" className="form-control rounded-pill col-10" accept=".json, .csv" onChange={FileUploader}/>
                        <input type="submit" className="ms-5 btn btn-secondary rounded-pill col-2" onClick={this.handleClick}/>
                    </div>
                    <input type="search" className="mt-3 form-control rounded-pill " placeholder="Rechercher" onChange={this.handleChange}/>
                </div>
                {this.Afficher()}
            </div>
        )
    }
}

export default Home;