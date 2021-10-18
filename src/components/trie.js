
import React, { Component } from 'react'

class Trie extends Component {
    render () {
        return (
            <div className="search">
                <input  type="text" name="searchbar" id="searchbar" placeholder="Rechercher"/>
            </div>
            <div className="search_resutls">
            
            </div>

        )
    }
}

export default Trie