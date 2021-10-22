import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Card=({person})=> {
  return(
    
    <div className="table">
      <div>
        <h2>{person.name}</h2>
        <p>{person.email}</p>
      </div>
    </div>
  );
}

export default Card;