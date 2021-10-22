import './App.css';
import React from 'react';
import Home from './components/Home';
import Search from './components/Search';

function App() {

  

  return (
    <div className="App container">
      <h1>App-Tab</h1>
      <div>
        <Home />
        <Search details={initialDetails}/>
        {/* {JSON.stringify(JSON.parse(localStorage.getItem("data")))} */}
      </div>
    </div>
    );
}

export default App;
