import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar navbar-dark bg-dark">
        <span class="navbar-brand mb-0 h1">Derrick Hardison</span>
        <ul>
          <li>
            <a href="#aboutSection">About</a>
          </li>
          <li>
            <a href="#portfolioSection">Portfolio</a>
          </li>
          <li>
            <a href="#contactSection">Contact</a>
          </li>
        </ul>
      </nav>
    );
};

export default Navbar;