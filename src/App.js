import './App.css';
import React, {Component} from 'react';
import FileUploader from './components/FileUploader';

class App extends Component {
  state = {
    data:null
  }

  render(){
    return (
      <div className="App container">
        <h1>App-Tab</h1>
        <div>
          <FileUploader data={this.state.data}/>
        </div>
      </div>
    );
  }
}

export default App;