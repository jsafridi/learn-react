import React from 'react';

const NewsList = (props) =>{
    
// Creating A Variable Called items It Will Loop Through All The Information We Get From props.news.

   const items = props.news.map((item) => {
    return(
        <div>
     <h3> {item.title}</h3>
     <div> {item.feed}
        </div>
        </div>
)
});



    return(




// Comment Out The Old Div With {props.news} To Create A New Div For Our Map Function (Loop).


// <div>{props.news}</div>



    // Creating A Div With Items For Our Map Function

    <div>
        {items}
    </div>
    )
}
export default NewsList;