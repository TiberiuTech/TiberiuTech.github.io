import React, { useState, useEffect } from 'react';
import './Navbar.css';

const sections = [
  { id: 'home', icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 10.5L12 4l9 6.5V20a1 1 0 0 1-1 1h-5v-5h-6v5H4a1 1 0 0 1-1-1V10.5z"/>
    </svg>
  ), alt: 'Home' },
  { id: 'projects', icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
    </svg>
  ), alt: 'Projects' },
  { id: 'contact', icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 6.5a2.5 2.5 0 0 0-2.5-2.5h-13A2.5 2.5 0 0 0 3 6.5v11A2.5 2.5 0 0 0 5.5 20h13a2.5 2.5 0 0 0 2.5-2.5v-11zm-2.5-.5a.5.5 0 0 1 .5.5v.379l-7 4.667-7-4.667V6.5a.5.5 0 0 1 .5-.5h13zM20 8.121V17.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V8.121l7 4.667 7-4.667z"/>
    </svg>
  ), alt: 'Contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let currentSection = 'home';
      sections.forEach(section => {
        const el = document.getElementById(section.id);
        if (el) {
          const offsetTop = el.offsetTop;
          if (scrollPosition >= offsetTop) {
            currentSection = section.id;
          }
        }
      });
      setActiveSection(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-bg">
        <ul>
          {sections.map(section => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={
                  activeSection === section.id
                    ? `active active-${section.id}`
                    : ''
                }
              >
                <span className="navbar-icon">{section.icon}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 