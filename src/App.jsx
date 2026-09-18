import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import profileImg from './profile.png';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="wave-container">
      <div className="wave"></div>
      <div className="wave layer2"></div>
    </div>

      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <img src={profileImg} alt="Anthony Adu-Gyamfi" style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover' }} />
          <h1>ADU-GYAMFI ANTHONY</h1>
          <p>Electrical and Electronic Engineering Student at UMaT.</p>
          <p>Also, a Software Developing Student at ERA.</p>
          
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
             <a href="https://linkedin.com" target="_blank">
              <img className="logo" src={viteLogo} alt="" />
              LinkedIn Profile
            </a>
            </li>
            <li>
              <a href="https://deepstemhub.com" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                DeepStem Hub
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Find Me Online</h2>
          <p>Check out my engineering projects and platforms</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://wa.me" target="_blank">
                <svg 
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#social-icon"></use>
                </svg>
                WhatsApp
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank">
                <svg 
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#social-icon"></use>
                </svg>
                GitHub Profile
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
