import React from 'react'
import {NavLink} from 'react-router-dom';

 function Navbar(props) {
    return (

      <div className="topnav">
      <NavLink activeClassName='active' to='/'>Home</NavLink>
    <NavLink exact activeClassName='active_class' to='/stable'>Stable</NavLink>
    <NavLink exact activeClassName='active_class' to='/addusers'>AddUsers</NavLink>
    
    </div>
    );
}
export default Navbar;
