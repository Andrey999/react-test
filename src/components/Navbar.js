import React from 'react';
import { NavLink } from 'react-router-dom';
 
export const Navbar = () => (
  <nav className = "navbar navbar-dark navbar-expand bg-primary">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <NavLink className="nav-link" exact to={'/'}>Home</NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link" to={'/about'}>About</NavLink>
      </li>
    </ul>
  </nav>
);