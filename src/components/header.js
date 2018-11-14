// Importing React From react (Node Modules)

import React from "react";
const getYear = () => {
    const newDate = new Date();
    return newDate.getFullYear();
}
const Header = () => {
  return( <div>
  The Date Is {
      getYear()};
      </div>
  )
}

export default Header;
