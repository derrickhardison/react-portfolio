import React from 'react';
import "./style.css";

const Navbar = () => {
    return (
        <nav id="navbar" class="navbar">
        <span class="navbar-brand mb-0 h1 portfolioName">Derrick Hardison</span>
        <ul>
          <li>
            <a href="#/">About</a>
          </li>
          <li>
            <a href="#/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#/contact">Contact</a>
          </li>
        </ul>
      </nav>
    );
};

export default Navbar;