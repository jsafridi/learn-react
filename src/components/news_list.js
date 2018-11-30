import React from 'react';
import NewsItem from './news_list_item';

const NewsList = (props) =>{

// Creating A Variable Called items It Will Loop Through All The Information We Get From props.news.

   const items = props.news.map((item) => {
    return(
//<NewsItem item={item}/>

// Commented Out The Old Item And Giving It An Id To Eleminate The Error We Are Getting In Browser Dev Tools.

<NewsItem key = {item.id} item = {item} /> 
)
});
    return(

// Comment Out The Old Div With {props.news} To Create A New Div For Our Map Function (Loop).


// <div>{props.news}</div>



// Creating A Div With Items For Our Map Function

    <div>
    {/* Working On Prop Children     */}
    {props.children}
        {items}
    </div>
    )
}
export default NewsList;