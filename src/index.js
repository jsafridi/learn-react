// Importing React And React Dom From Node Modules
// When There Is No Extensions (.html,.js, .css)React Assumes That Its From The node_modules folder (Dependencies).

import React from 'react';
import ReactDOM from 'react-dom';

// Creating A Function (ES6 Format) And Assigning It To A Constant
// This Function Will Return A H1 Tag With The Hellow World To Our Page


const App = () =>{


//If We Have Only One Element The Below Code Will Work But If We Have More Than One Elements It Won't Work So We Need To Change It A Little Bit.    
return <h1> Hello World !!! </h1>

/** 
return (
    <div ClassName = "newElement">
    <h1> Hello Wordld !!! </h1>
    <div> Welecome To React </div>
    </div>
    ) 
 */   
}

// Compiling And Rendering The Code And Displaying It In Our Div With The Id Of root In Our Index.html Page In Our Public Folder

ReactDOM.render(<App/>,document.querySelector('#root'));