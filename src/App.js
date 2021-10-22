import React from 'react';
import Search from './components/Search';



const initialDetails = [
    {
      id: 1,
      name: "Jane D",
      email: "janedoe@gmail.com",
      address: "New Delhi, India",
    },
    {
      id: 2,
      name: "Mary Rosamund",
      email: "agra@rosie.com",
      address: "Tbilisi, India",
    },
    {
      id: 3,
      name: "edouard michelin ",
      email: "irene@johnlock.com",
      address: "Baker Street, India",
    },
    {
      id: 4,
      name: "jules mac ",
      email: "mary@johnlock.com",
      address: "Baker Street, India",
    },
    {
      id: 5,
      name: "Mac",
      email: "britishgovt@gmail.com",
      address: "London, India",
    },
  ];


 const App = () =>{
  return (
    <div className="tc ma0 pa4 min-vh-100">
      <Search details={initialDetails}/>
    </div>
  );
}

export default App;




