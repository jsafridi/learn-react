// Importing React From react (Node Modules)

import React from "react";
const user = {
    name: 'Javed',
    lastName: 'Afridi',
    age: 33
}
const Header = () => {
  return( <div>
            <div>Name:      {user.name}</div>
            <div>Last Name: {user.lastName}</div>
            <div>Age:       {user.age}</div>
      </div>
  )
  }

export default Header;
