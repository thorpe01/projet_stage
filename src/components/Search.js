import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';

function Search() {

  const [searchField, setSearchField] = useState("");
  const[datas ,setDatas]=useState(null);
  setDatas(JSON.parse(localStorage.getItem('data')))

  const filteredPersons = datas.filter(
    person => {
      return (
        person
        .name
        .toLowerCase()
        .includes(searchField.toLowerCase())
       
      );
    }
  );

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return (
      <Scroll>
        <SearchList filteredPersons={filteredPersons} />
      </Scroll>
    );
  }

  return (
    <section className="garamond">
      <div className="navy georgia ma0 ">
        <h2 className="f2">APP-tab</h2>
      </div>
      <div className="pa2">
        <input 
          className="pa3 bb br3  b--none bg-lightest-blue ma3 "
          type = "search" 
          placeholder = "tapez votre recherche " 
          onChange = {handleChange}
        />
      </div>
      {searchList()}
    </section>
  );
}

export default Search;