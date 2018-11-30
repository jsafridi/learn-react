import React from 'react';
import { css } from 'glamor';
// Creating A Functional Component NewsItem

// const NewsItem = (props) =>{
//     return(
//        <div>
//      <h3> {item.title}</h3>
//      <div> {item.feed}
//         </div>
//         </div>
//     )
// }


// Now With Destructuring We Will Change The props To Item And Our App Will Work Again. We Don't Need The Whole Props We Just Need The Items So Instead Of The Whole Prop Object We Are Importing Each Item (It Will Improve The Speed Of Our App).

// We Are Still Getting Error When We Open The Dev Tools Of Our Browser So But Our App Works Fine. We Need To Remove That Error By Providing A Unique Key To Each Item Now We Will Go To The Page Where We Define The Constant With Map And Will Give Our Item An Id Or Key Inorder To Eleminate The Error.


const NewsItem =({item}) => {

 // Adding Css Importing From glamor Which We Installed From npm (npm install glamor --save) 
  
 let news_item = css(
   {
    padding:'20px',
    boxSizing:'border-box',
    borderBottom:'2px solid grey',
    ':hover':{
      color:'purple'
    },
    '@media(max-width: 500px)':{
      color:'blue'
    }
   }
 )

 let news_background = css(
   {
     background:'lightgreen'
   }
 )

 // The Above Two Variables news_item And news_background Were Created To Style  Our App It Gives A Padding Of 20 Pixels Border-Boxing And Solid Grey Border Line And The Second Variable Gives Our App A Light Green Background. We Just Pass Two Classes Kind Of Things To Our Div, The One We Want To Styalize Like {...news_item} And {...news_background}. This Is Pure ES6 Formate And Doesn't Do Anything With React.


    return(
     <div {...news_item} {...news_background}>
      <h3> {item.title}</h3>
      <div> {item.feed}
       </div>
        </div>
      )
}

export default NewsItem ;