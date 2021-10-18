import React, { Component } from 'react'

class Affichage extends Component {

    constructor(props){ 
        super(props); 
            this.getHeader = this.getHeader; 
            // this.getRowsData = this.getRowsData; 
            this.getKeys = this.getKeys; 
        }

    getHeader() {
        var keys = this.getKeys();

        return keys.map((key, index)=>{ 
            return <th key={key}>{key.toUpperCase()}</th> 
            })
    }

    getKeys() {
        console.log(this.props.data[0])
        return Object.keys(this.props.data[0]); 
    }
    
    renderRow = () => {

        return(
            null
        )
    }

    render () {
        return (
            <div> 
                <table> 
                    <thead> 
                        <tr>{this.getHeader()}</tr > 
                    </thead> 
                    <tbody> 
                        {/* {this.getRowsData()} */}
                    </tbody> 
                </table> 
            </div> 
        )
    }
}

export default Affichage