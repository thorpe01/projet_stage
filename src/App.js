import './App.css';
import React, {useState} from 'react';
import FileUploader from './components/FileUploader';
import Affichage from './components/Affichage'

function App() {
  const [data, setData] = useState(null);

    return (
      <div className="App container">
        <h1>App-Tab</h1>
        <div>
          <FileUploader setData={setData}/>
        </div>
        <Affichage data={data} />
      </div>
    );
}


export default App;