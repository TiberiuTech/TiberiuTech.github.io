import React from 'react';
import './NavBar.css';

const NavBar = ({ onLogoClick }) => {
  return (
    <header className="header">
      <nav className="nav-bar">
        <div className="nav-brand">
          <h2 className="gradient-text logo-clickable" onClick={onLogoClick}>
            Tiberiu's Portfolio
          </h2>
        </div>
        <div className="nav-links">
          <span className="nav-link gradient-text">Projects</span>
          <span className="nav-link gradient-text">Contact</span>
        </div>
      </nav>
    </header>
  );
};

export default NavBar; 