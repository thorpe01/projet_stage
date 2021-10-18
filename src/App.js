import './App.css';
import React, {useState} from 'react';
import FileUploader from './components/FileUploader';
import axios from 'axios';

function App() {

  return (
    <div className="App container">
        <h1>App-Tab</h1>
        <div>
              <FileUploader />
        </div>
    </div>
  );
}

export default App;