import './App.css';
import React, {useState} from 'react';
import FileUploader from './components/FileUploader';

function App() {
  const [data, setData] = useState(null);

    return (
      <div className="App container">
        <h1>App-Tab</h1>
        <div>
          <FileUploader setData={setData}/>
          <p>{data}</p>
        </div>
      </div>
    );
}


export default App;