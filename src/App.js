import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';

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

  const githubLinks = [
    'https://github.com/TiberiuTech/burger',
    'https://github.com/TiberiuTech/techshop', 
    'https://github.com/TiberiuTech/Crypto',
    'https://github.com/user/website4',
    'https://github.com/user/website5',
    'https://github.com/user/website6',
  ];

  return (
    <div className="App">
      <NavBar />
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
                      ) : id === 2 ? (
                        <img src={require('./gif/techshop.gif')} alt="TechShop" className="project-image" />
                      ) : id === 3 ? (
                        <img src={require('./gif/crypto.gif')} alt="Crypto" className="project-image" />
                      ) : (
                        <img src={`https://placehold.co/300x180?text=Website+${id}`} alt={`Website ${id}`} className="project-image" />
                      )}
                      <div className="project-info">
                        <h3 style={(id === 1 || id === 2 || id === 3) ? { color: '#00f2fe', marginTop: 0, marginBottom: '-0.3rem' } : {}}>
                          {id === 1 ? "Papa's Burger" : id === 2 ? 'TechShop' : id === 3 ? 'Crypto' : `Website ${id}`}
                        </h3>
                        <p>
                          {id === 1
                            ? 'Fast-food restaurant web app with interactive burger menu.'
                            : id === 2
                              ? 'Online electronics store with dedicated pages and interactive cart.'
                              : id === 3
                                ? 'Cryptocurrency price tracking and market analysis platform.'
                                : `Descriere scurtă pentru website-ul ${id}.`}
                        </p>
                        <a
                          href={githubLinks[id - 1]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="github-link"
                          title="View on GitHub"
                          onClick={e => e.stopPropagation()}
                        >
                          <svg height="28" width="28" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="card-back">
                      <h3 style={(id === 1 || id === 2 || id === 3) ? { color: '#00f2fe', marginTop: '1.5rem', marginBottom: '0.7rem' } : {}}>
                        {id === 1 ? 'Details' : id === 2 ? 'Details' : id === 3 ? 'Details' : `Detalii Website ${id}`}
                      </h3>
                      <p>
                        {id === 1
                          ? 'Web application for a fast-food restaurant featuring an interactive burger menu, filtering, search, favorites, shopping cart, and reviews, built with HTML, CSS, and JavaScript.'
                          : id === 2
                            ? 'Web application for an electronics store featuring category pages for phones, tablets, laptops, and accessories, advanced product search, interactive shopping cart, and order confirmation. Built with HTML, CSS, and JavaScript.'
                            : id === 3
                              ? 'Custom cryptocurrency token integrated into the platform, enabling secure transactions, wallet storage, and real-time balance updates. The token supports transfers, trading, and portfolio management, and is implemented as a smart contract on the blockchain. Built with Solidity, JavaScript, and web3 technologies.'
                              : 'Tehnologii folosite, detalii suplimentare sau link-uri.'}
                      </p>
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
                        <a
                          href={githubLinks[id - 1]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="github-link"
                          title="View on GitHub"
                          onClick={e => e.stopPropagation()}
                        >
                          <svg height="28" width="28" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                          </svg>
                        </a>
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
                        <a
                          href={githubLinks[id - 1]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="github-link"
                          title="View on GitHub"
                          onClick={e => e.stopPropagation()}
                        >
                          <svg height="28" width="28" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="card-back">
                      <h3 style={(id === 1 || id === 2 || id === 3) ? { color: '#00f2fe', marginTop: '1.5rem', marginBottom: '0.7rem' } : {}}>
                        {id === 1 ? 'Details' : id === 2 ? 'Details' : id === 3 ? 'Details' : `Detalii Website ${id}`}
                      </h3>
                      <p>
                        {id === 1
                          ? 'Web application for a fast-food restaurant featuring an interactive burger menu, filtering, search, favorites, shopping cart, and reviews, built with HTML, CSS, and JavaScript.'
                          : id === 2
                            ? 'Web application for an electronics store featuring category pages for phones, tablets, laptops, and accessories, advanced product search, interactive shopping cart, and order confirmation. Built with HTML, CSS, and JavaScript.'
                            : id === 3
                              ? 'Custom cryptocurrency token integrated into the platform, enabling secure transactions, wallet storage, and real-time balance updates. The token supports transfers, trading, and portfolio management, and is implemented as a smart contract on the blockchain. Built with Solidity, JavaScript, and web3 technologies.'
                              : 'Tehnologii folosite, detalii suplimentare sau link-uri.'}
                      </p>
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