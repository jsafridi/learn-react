import React from 'react';

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
    return(
     <div>
      <h3> {item.title}</h3>
      <div> {item.feed}
       </div>
        </div>
      )
}

export default NewsItem ;