import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const [flippedCards, setFlippedCards] = useState([false, false, false, false, false, false]);
  const [flippedGames, setFlippedGames] = useState([false, false, false, false, false, false]);
  const [flippedCyber, setFlippedCyber] = useState([false, false, false, false, false, false]);

  const handleCardFlip = (idx) => {
    setFlippedCards(cards => cards.map((f, i) => i === idx ? !f : f));
  };

  const handleGamesFlip = (idx) => {
    setFlippedGames(cards => cards.map((f, i) => i === idx ? !f : f));
  };

  const handleCyberFlip = (idx) => {
    setFlippedCyber(cards => cards.map((f, i) => i === idx ? !f : f));
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        {/* Prima pagină - Home */}
        <section id="home" className="home-section">
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

        {/* Secțiunea Websites */}
        <section id="projects" className="projects-section">
          <div className="projects-content">
            <h1 className="gradient-text">Websites</h1>
            <div className="projects-grid">
              {[1,2,3,4,5,6].map((id, idx) => (
                <div
                  className={`project-card${flippedCards[idx] ? ' flipped' : ''}`}
                  key={id}
                  tabIndex={0}
                  onClick={() => handleCardFlip(idx)}
                  onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && handleCardFlip(idx)}
                >
                  <div className="card-inner">
                    <div className="card-front">
                      {id === 1 ? (
                        <img src={require('./gif/burger.gif')} alt="Burger" className="project-image" />
                      ) : (
                        <img src={`https://placehold.co/300x180?text=Website+${id}`} alt={`Website ${id}`} className="project-image" />
                      )}
                      <div className="project-info">
                        <h3>Website {id}</h3>
                        <p>Descriere scurtă pentru website-ul {id}.</p>
                        <button className="demo-btn">Demo</button>
                      </div>
                    </div>
                    <div className="card-back">
                      <h3>Detalii Website {id}</h3>
                      <p>Tehnologii folosite, detalii suplimentare sau link-uri.</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Secțiunea Games */}
        <section className="projects-section">
          <div className="projects-content">
            <h1 className="gradient-text">Games</h1>
            <div className="projects-grid">
              {[1,2,3,4,5,6].map((id, idx) => (
                <div
                  className={`project-card${flippedGames[idx] ? ' flipped' : ''}`}
                  key={`game-${id}`}
                  tabIndex={0}
                  onClick={() => handleGamesFlip(idx)}
                  onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && handleGamesFlip(idx)}
                >
                  <div className="card-inner">
                    <div className="card-front">
                      <img src={`https://placehold.co/300x180?text=Game+${id}`} alt={`Game ${id}`} className="project-image" />
                      <div className="project-info">
                        <h3>Game {id}</h3>
                        <p>Descriere scurtă pentru jocul {id}.</p>
                        <button className="demo-btn">Demo</button>
                      </div>
                    </div>
                    <div className="card-back">
                      <h3>Detalii Game {id}</h3>
                      <p>Tehnologii folosite, detalii suplimentare sau link-uri.</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Secțiunea CyberSecurity */}
        <section className="projects-section">
          <div className="projects-content">
            <h1 className="gradient-text">CyberSecurity</h1>
            <div className="projects-grid">
              {[1,2,3,4,5,6].map((id, idx) => (
                <div
                  className={`project-card${flippedCyber[idx] ? ' flipped' : ''}`}
                  key={`cyber-${id}`}
                  tabIndex={0}
                  onClick={() => handleCyberFlip(idx)}
                  onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && handleCyberFlip(idx)}
                >
                  <div className="card-inner">
                    <div className="card-front">
                      <img src={`https://placehold.co/300x180?text=Cyber+${id}`} alt={`CyberSecurity ${id}`} className="project-image" />
                      <div className="project-info">
                        <h3>CyberSecurity {id}</h3>
                        <p>Descriere scurtă pentru proiectul de securitate {id}.</p>
                        <button className="demo-btn">Demo</button>
                      </div>
                    </div>
                    <div className="card-back">
                      <h3>Detalii CyberSecurity {id}</h3>
                      <p>Tehnologii folosite, detalii suplimentare sau link-uri.</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* A treia pagină - Contact */}
        <section id="contact" className="contact-section">
          <div className="contact-content">
            <h1 className="gradient-text">Contact</h1>
            <p className="contact-description">
              Sunt disponibil pentru proiecte noi și colaborări interesante.
            </p>
            <form className="contact-form">
              <input type="text" name="nume" placeholder="Nume" required />
              <input type="email" name="email" placeholder="Email" required />
              <textarea name="mesaj" placeholder="Mesaj" rows="5" required></textarea>
              <button type="submit" className="contact-btn">Trimite</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App; 