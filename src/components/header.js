// Importing React From react (Node Modules)

//import React from "react";

// Destructuring And Creating Classes.
// Pure ES6 Style Conding.

import React,{ Component } from 'react';

// Importing CSS
import '../css/styles.css';

//Creating Header Class

class Header extends Component{

//Event Handlers

inputChangeHandler(event){
    console.log(event.target.value)
}

//Render Method Which Is Mendatory

    render(){

// Old Return Method With A Base Header Tag And Children Logo And Input Divs

        return (
            <header>
                <div className="logo">
                    Logo
                </div>
                <div><input type="text"
                onChange = { (e) => this.inputChangeHandler(e)}
                />
                </div>
            </header>
        )
    }
}

export default Header;
