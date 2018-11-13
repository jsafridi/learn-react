// Importing React And React Dom From Node Modules
// When There Is No Extensions (.html,.js, .css)React Assumes That Its From The node_modules folder (Dependencies).

import React from "react";
import ReactDOM from "react-dom";

// Creating A Function (ES6 Format) And Assigning It To A Constant
// This Function Will Return A H1 Tag With The Hellow World To Our Page

const App = () => {



//If We Have Only One Element The Below Code Will Work
// return <h1> Hello World !!! </h1>;
// But If We Have More Than One Elements Then The Above Code Will Not Work And We Need To Change     Our Code A Little Bit.
// Always Remember There Must Be Only One ROOT ELEMENT In React And The Rest Will Be It's Children
// In This Case We Have A div With The Class Name newElement It Has h1 And Another div Children,     We Can Add More Children Whenever We Need


return (
    <div ClassName="newElement">
      <h1> Hello World !!! </h1>
      <div> Welecome To React </div>
    </div>
  )

}


// Compiling And Rendering The Code And Displaying It In Our Div With The Id Of root In Our Index.html Page In Our Public Folder

ReactDOM.render(<App />, document.querySelector("#root"));
