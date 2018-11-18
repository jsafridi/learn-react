// Importing React From react (Node Modules)

//import React from "react";

// Destructuring And Creating Classes.
// Pure ES6 Style Conding.

import React,{ Component } from 'react';



// Importing CSS
import '../css/styles.css';

//Creating Header Class

class Header extends Component{

// Creating State
    state = {
        keywords:'Hello World.'
    }

//Event Handlers

inputChangeHandler = (event) => {
   // console.log(event.target.value)
   this.setState({
       keywords: event.target.value
   });
}

//Render Method Which Is Mendatory

    render(){

// Consoling The Result

console.log(this.state.keywords)

// Old Return Method With A Base Tag And Children Logo And Input Divs

        return (
            
            <header>
                <div className="logo">
                    Logo
                </div>
                <div><input type="text"

// Changing The Old OnChange Event Handler To New State Pure React.  
              
                onChange = {this.inputChangeHandler}
                />
                </div>
            </header>
        )
    }
}

export default Header;
