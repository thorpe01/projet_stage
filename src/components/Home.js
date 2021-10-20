import React, { Component } from 'react';
import FileUploader from './FileUploader';

class Home extends Component {

    render () {
        return (
            <div>
                <div className="Home">
                    <div className="file-uploader col-10 mt-5">
                        <input type="file" className="form-control col-10" accept=".json, .csv" onChange={FileUploader}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;