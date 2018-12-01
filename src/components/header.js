// Importing React From react (Node Modules)

//import React from "react";

// Destructuring And Creating Classes.
// Pure ES6 Style Conding.

//import React,{ Component } from 'react';

// Now We Are Introducing A More Concise And Less Coding Model Functional Component And Will Make Some Changes Which Will Reduce Our Code.


// First I Removed The {Component} Because We Are Not Using Class Based Components

import React from 'react';

// Importing CSS
import '../css/styles.css';

//Creating Header Class

//class Header extends Component{

// Instead Of Class Header I Am Going To Change It To A Functional Component
const Header = (props) => {

// Commenting Out From Creating State To Render Because We Don't Need Them For Functional Base Components Meaning Less Code.

// // Creating State

// // Commenting Out The State As We Don't Need It For Functional Components.
//   state = {
//         Message:'I Love React.'
//      }
// //Event Handlers

// inputChangeHandler = (event) => {
//     console.log(event.target.value)
   
   
   
//    // Here Event Is Typing Something In The Input And The Target Is Html Input Tag While Whatever We Type In The Input Is The Value So It Basically Record Anything We Type In The Input And Display It Wherever We Want To See.

//    this.setState({
//        keywords: event.target.value
//   });
// }

// //Render Method Which Is Mendatory

//     render(){

//  Consoling The Result

// console.log(this.state.keywords)

//  Old Return Method With A Base Tag And Children Logo And Input Divs

        return (
            
            <header>
                <div className="logo">
                    Logo
                </div>
                <div><input type="text"

// Changing The Old OnChange Event Handler To New State Pure React.  
              
//onChange = {this.inputChangeHandler}

// Now I Am Going To Change The inputChangeHandler To this.props.keywords, It Will Grab The Data From The Keywords Function Defined In Index.js

// Since We Don't Need this Because We Are Not Using Class Based Components So I Am Going To Type It Again Without This.
//onChange = {this.props.keywords}

// onChange Without this Keyword.
onChange={props.keywords}
                />
                </div>
            </header>
        )
    }


export default Header;
