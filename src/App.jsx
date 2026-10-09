import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import profileImg from './profile.png';

function App() {
 

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
          <img src={profileImg} alt="Adu-Gyamfi Anthony" style={{ width: '75px', height: '75px', borderRadius: '100%', objectFit: 'cover' , position: 'absolute', top: '20px', right: '20px' }} />
          <img src={profileImg} alt="Adu-Gyamfi Anthony" style={{ width: '50px', height: '50px', borderRadius: '100%', objectFit: 'cover' , position: 'absolute', bottom: '20px', right: '20px' }} />
          <h1 className="welcome-banner">WELCOME TO EPI-SCI ENGINEERING EXPLORE</h1>
          <p>I'm Adu-Gyamfi Anthony, your website. An Electrical and Electronic Engineering Student at UMaT.</p>
          <p>Also, a Software Developing Student at ERA-Axis.</p>
          
        </div>
        <button
          type="button"
          className="counter"
        >
          <h3>The site's Recommended Prerequisites:</h3>
          <p><strong>1.</strong> This site is suitable for individuals interested to explore more in the field of Engineering. This individual can be a learner, teacher, lecturer, researcher or a professor in the field of Engineering.</p>
          <p><strong>2.</strong> For learners, the recommended prerequisites include a well sounded mindset to know more about Engineering field.</p>
        </button>
      </section>
      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Explore More Of Engineering On These Platforms Via The Buttons Below.</h2>
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
          <h2>Reach Out to Me On The Following Platforms Via The Buttons Below.</h2>
          <p>Check out my engineering projects and platforms. And also, your questions,suggestions and contributions are always welcome.</p>
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
