export default function LinksAndContactSection({ viteLogo, reactLogo }) {
  return (
    <section id="next-steps">
      <div id="docs">
        <svg className="icon" role="presentation" aria-hidden="true">
          <use href="/icons.svg#documentation-icon"></use>
        </svg>
        <h2>Explore More Of Engineering On These Platforms Via The Buttons Below.</h2>
        <ul>
          <li>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <img className="logo" src={viteLogo} alt="" />
              LinkedIn Profile
            </a>
          </li>
          <li>
            <a href="https://deepstemhub.com" target="_blank" rel="noreferrer">
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
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <svg className="button-icon" role="presentation" aria-hidden="true">
                <use href="/icons.svg#github-icon"></use>
              </svg>
              GitHub
            </a>
          </li>
          <li>
            <a href="https://wa.me" target="_blank" rel="noreferrer">
              <svg className="button-icon" role="presentation" aria-hidden="true">
                <use href="/icons.svg#social-icon"></use>
              </svg>
              WhatsApp
            </a>
          </li>
          <li>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <svg className="button-icon" role="presentation" aria-hidden="true">
                <use href="/icons.svg#social-icon"></use>
              </svg>
              GitHub Profile
            </a>
          </li>
          <li>
            <a href="https://bsky.app" target="_blank" rel="noreferrer">
              <svg className="button-icon" role="presentation" aria-hidden="true">
                <use href="/icons.svg#bluesky-icon"></use>
              </svg>
              Bluesky
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
