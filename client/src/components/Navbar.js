import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
   return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
        <NavLink className="navbar-brand mb-0 h1" to="/">MERN-Stack Todo</NavLink>
        <div className="navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">Todos <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/create">Create Todos <span className="sr-only">(current)</span></NavLink>
            </li>
          </ul>
        </div>
      </nav>
   )
}

export default Navbar
