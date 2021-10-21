import React, { Component } from 'react';
import FileUploader from './FileUploader';

class Home extends Component {
    state = {
        data:null
    }

    render () {
        return (
            <div>
                <div className="Home">
                    <div className="file-uploader col-10 mt-5">
                        <input type="file" className="form-control rounded-pill col-10" accept=".json, .csv" onChange={FileUploader}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;