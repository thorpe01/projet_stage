import React, { Component } from 'react'

class Affichage extends Component {

    constructor(props){ 
        super(props); 
            this.getHeader = this.getHeader.bind(this); 
            this.getRowsData = this.getRowsData.bind(this); 
            this.getKeys = this.getKeys.bind(this); 
        }

    // transformer les cles en nom de colonne et les afficher    
    getHeader = function() {
        var keys = this.getKeys();

        return keys.map((key, index)=>{ 
            return <th key={key}>{key.toUpperCase()}</th> 
            })
    }

    // recuperer les cles du tableau dans le state
    getKeys = function() {
        return Object.keys(this.props.data[0]); 
    }

    // creer les lignes pour chaque element (items) du tableau puis passer les cles au RenderRow
    getRowsData = function() {
        var items = this.props.data
        var keys = this.getKeys()
        return items.map((row, index) => {
            return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
        })
    } 

    render () {
        
        return (
            <div> 
                <table className='table'> 
                    <thead> 
                        <tr>{this.getHeader()}</tr > 
                    </thead> 
                    <tbody> 
                     {this.getRowsData()}
                    </tbody> 
                </table> 
            </div> 
        )
    }
}

// le RenderRow retourne les valeurs associes aux cles 
const RenderRow = (props) => {
    return props.keys.map((key, index) => {
        return <td key={props.data[key]}>{props.data[key]}</td>
    })
}

export default Affichage