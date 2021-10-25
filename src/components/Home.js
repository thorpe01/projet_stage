import React, { Component } from 'react';
import FileUploader from './FileUploader';
import Affichage from './Affichage';

class Home extends Component {

    state = {
        'data': JSON.parse(localStorage.getItem("data"))
    }

    Afficher() {
        if (this.state.data) {
            return (
                <Affichage data={this.state.data} />
            )
        } else {
            return null
        }
    }

    handleClick = () => {
        window.location.reload();
    }

    render () {

        return (
            <div>
                <div className="Home">
                    <div className="file-uploader col-10 mt-5 d-flex">
                        <input type="file" className="form-control rounded-pill col-10" accept=".json, .csv" onChange={FileUploader}/>
                        <input type="submit" className="ms-5 btn btn-secondary rounded-pill col-2" onClick={this.handleClick}/>
                    </div>
                </div>
                {this.Afficher()}
            </div>
        )
    }
}

export default Home;