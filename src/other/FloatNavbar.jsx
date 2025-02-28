// src/components/FloatNavbar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FloatNavbar.css';

const FloatNavbar = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <div className="navbar-container">
      <button className="toggle-button" onClick={toggleNavbar}>
        {isOpen ? 'Close' : 'Menu'}
      </button>
      <nav className={`navbar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li id='show'>
            <Link to="/" onClick={closeNavbar}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={closeNavbar}>About</Link>
          </li>
          <li>
            <Link to="/experience" onClick={closeNavbar}>Services</Link>
          </li>
          <li>
            <Link to="/gallery" onClick={closeNavbar}>Gallery</Link>
          </li>
          <li>
            <Link to="/blogs" onClick={closeNavbar}>Blogs</Link>
          </li>
          <li>
            <Link to="/projects" onClick={closeNavbar}>Projects</Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeNavbar}>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default FloatNavbar;
