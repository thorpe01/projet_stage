import React, { Component } from 'react';
import FileUploader from './FileUploader';
import Affichage from './Affichage';

class Home extends Component {

    state = {
        'data': JSON.parse(localStorage.getItem("data"))
    }

    Afficher() {
        if (this.state.data) {
            console.log('coucouc')
            return <Affichage data={this.state.data} />
        } else {
            return null
        }
    }

    render () {
        
        return (
            <div>
                <div className="Home">
                    <div className="file-uploader col-10 mt-5">
                        <input type="file" className="form-control rounded-pill col-10" accept=".json, .csv" onChange={FileUploader}/>
                    </div>
                </div>
                {this.Afficher()}
            </div>
        )
    }
}

export default Home;