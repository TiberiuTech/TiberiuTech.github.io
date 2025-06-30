import React from 'react';
import './Navbar.css';
import homeIcon from '../icons/home.png';
import projectsIcon from '../icons/projects.png';
import contactIcon from '../icons/contact.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-bg">
        <ul>
          <li>
            <a href="#home">
              <img src={homeIcon} alt="Home" />
            </a>
          </li>
          <li>
            <a href="#projects">
              <img src={projectsIcon} alt="Projects" />
            </a>
          </li>
          <li>
            <a href="#contact">
              <img src={contactIcon} alt="Contact" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 