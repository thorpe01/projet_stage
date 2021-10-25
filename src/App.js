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
        <Search />
       
      </div>
    </div>
    );
}

export default App;
