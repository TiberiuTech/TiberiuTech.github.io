import React from 'react';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      <NavBar onLogoClick={handleLogoClick} />
      <main className="main-content">
        {/* Prima pagină - Home */}
        <section className="home-section">
          <div className="home-content">
            <div className="left-section">
              <h1 className="gradient-text">Full-Stack Web Developer</h1>
              <p className="home-description">
                Dezvolt aplicații web moderne și performante, 
                de la frontend la backend, cu tehnologiile de ultimă generație.
              </p>
            </div>
            <div className="right-section">
              <div className="hero-image">
                {/* Aici poți adăuga o imagine sau un element vizual */}
              </div>
            </div>
          </div>
          <div className="mouse_scroll">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <div>
              <span className="m_scroll_arrows unu"></span>
              <span className="m_scroll_arrows doi"></span>
              <span className="m_scroll_arrows trei"></span>
            </div>
          </div>
        </section>

        {/* A doua pagină - Projects */}
        <section className="projects-section">
          <div className="projects-content">
            <h1 className="gradient-text">My Projects</h1>
            <p className="projects-description">
              Aici vei găsi proiectele mele recente și tehnologiile folosite.
            </p>
            {/* Aici vei adăuga proiectele */}
          </div>
        </section>

        {/* A treia pagină - Contact */}
        <section className="contact-section">
          <div className="contact-content">
            <h1 className="gradient-text">Contact</h1>
            <p className="contact-description">
              Sunt disponibil pentru proiecte noi și colaborări interesante.
            </p>
            {/* Aici vei adăuga informațiile de contact */}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App; 