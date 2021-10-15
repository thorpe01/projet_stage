import './App.css';
import React, {useState} from 'react';
import FileUploader from './components/FileUploader';
import axios from 'axios';

const App = () => {
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const submitForm = () => {
    const formData = new FormData();
    formData.append("name",name);
    formData.append("file", selectedFile);

    axios
      .post("/components",formData)
      .then((res) => {alert("File Upload success");
    })
      .catch((err) => alert("File Upload Error"));
  };

  return (
    <div className="App container">
        <h1>App-Tab</h1>
        <div>
          <form action="#" className="my-5">
              <input type="text" className="form-control" value={name} onChange= {(e) => setName(e.target.value)} disabled/>
              <FileUploader onFileSelectSuccess={(file) => setSelectedFile(file)} onFileSelectError={({error}) => alert(error)}/>
              <button onClick={submitForm} className="btn btn-secondary">Submit</button>
          </form>
        </div>
    </div>
  );
}

export default App;