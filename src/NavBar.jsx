import React from 'react';
import { NavLink } from 'react-router-dom';


import  './Nav.css';

const NavBar = () => {
  return (
    <div className="OuterX">
        <div className="OuterY">
          <div className="OuterZ">
    <div>
    <p>
    Topics
    </p>
    
    </div>

    
    <nav className="NavX">
      <ul className="xz">
        <li>
          <NavLink to="/Physics" activeClassName="active" className="LinkX">
            Analytical Thought
          </NavLink>
        </li>
        <li>
          <NavLink to="/component2" activeClassName="active" className="LinkX">
            Creative Thought
          </NavLink>
        </li>
        <li>
          <NavLink to="/component3" activeClassName="active" className="LinkX">
             Intuitive Thought
          </NavLink>
        </li>
        <li>
          <NavLink to="/component4" activeClassName="active" className="LinkX">
             Reflective Thought
          </NavLink>
        </li>
        <li>
          <NavLink to="/component5" activeClassName="active" className="LinkX">
             Emotional Thought
          </NavLink>
        </li>
        <li>
          <NavLink to="/TextUploader" activeClassName="active" className="LinkX">
              TextUploader
          </NavLink>
        </li>
      </ul>
    </nav>

       </div>

     </div>
   </div>

  );
};

export default NavBar;
