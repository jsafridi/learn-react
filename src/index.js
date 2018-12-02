// Importing React And React Dom From Node Modules
// When There Is No Extensions (.html,.js, .css)React Assumes That Its From The node_modules folder (Dependencies).

//import React from "react";

// For State We Need To Import React Component From react

import React,{Component} from 'react';
import ReactDOM from "react-dom";
import JSON from './db.json';

// Importing Components Which We Created

import Header from "./components/header";
import NewsList from './components/news_list'; 

// Creating A Function (ES6 Format) And Assigning It To A Constant
// This Function Will Return A H1 Tag With The Hellow World To Our Page

// const App = () => {
  //If We Have Only One Element The Below Code Will Work
  // return <h1> Hello World !!! </h1>;
  // But If We Have More Than One Elements Then The Above Code Will Not Work And We Need To Change     Our Code A Little Bit.
  // Always Remember There Must Be Only One ROOT ELEMENT In React And The Rest Will Be It's Children
  // In This Case We Have A div With The Class Name newElement It Has h1 And Another div Children,     We Can Add More Children Whenever We Need


  // We Need To Create A Class Base Component For Creating A New State For Our News Section So I Comment Out The Old Stateless Component And Below I Will Create A New Class Based Component With The Same Name App.

  class App extends Component {
// Creating A New State Of News For Fetching Data From db.json File And Rendering It To Our Desired Location


    state = {
      news:JSON,


    // Creating An Empty Array To Store The User Inputs And Match With The Titles Of Our News App  

    filtered:[]

    }
  // Creating A New Fat Arrow Function Which Will Filter Through Props (Data) And Filter Out The Keywords We Type And Display It On Our Desired Location On Our App....
  
  getKeyword = (event)=>{

  // Since We Don't Need Console.log I Am Going To Comment It Out

   //console.log('Hellow React!!!')

  // Creating Two Variables One For The Keywords A User Inputs To Search Something And The Other To Filter All The News And Match It With The User Inputed Keywords.
  
  let keyword = event.target.value;
  let filtered = this.state.news.filter((item) =>{
    return item.title.indexOf(keyword) > -1
    });
  
   // Setting The State To Get The Filtered Data Which We Have Stored In The Empty Array filtered
   
    this.setState({
      filtered
    })
  }

render(){

//Creating Two New Variables

 let newsFiltered = this.state.filtered;
 let newsWhole = this.state.news 
  return (
 
  
    /* <div ClassName="newElement">
      <h1> Hello World !!! </h1>
      <div> Welecome To React </div>
    </div> */

    //Creating New Component Which Is Header For Our News Application.


// Pass The keywords As A Prop TO Header Tag Which Will Get Data From getKeyword Function.
     <div>   
     <Header  keywords = {this.getKeyword}/>
    <NewsList news ={newsFiltered.length === 0 ? newsWhole : newsFiltered} >
       {/* <h3>
          Hello React:
        </h3>
        <p>
          React Is A Wonderful Technology, The Best Frontend Framework.
        </p> */}

        </NewsList>
    </div>

    )
}
}

// Compiling And Rendering The Code And Displaying It In Our Div With The Id Of root In Our Index.html Page In Our Public Folder

ReactDOM.render(<App />, document.querySelector("#root"));
