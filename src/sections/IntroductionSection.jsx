export default function IntroductionSection({ heroImg, reactLogo, viteLogo, profileImg }) {
  return (
    <section id="center">
      <div className="hero">
        <img src={heroImg} className="base" width="170" height="179" alt="" />
        <img src={reactLogo} className="framework" alt="React logo" />
        <img src={viteLogo} className="vite" alt="Vite logo" />
      </div>
      <div>
        <img src={profileImg} alt="Adu-Gyamfi Anthony" style={{ width: '75px', height: '75px', borderRadius: '100%', objectFit: 'cover', position: 'absolute', top: '20px', right: '20px' }} />
        <img src={profileImg} alt="Adu-Gyamfi Anthony" style={{ width: '50px', height: '50px', borderRadius: '100%', objectFit: 'cover', position: 'absolute', bottom: '20px', right: '20px' }} />
        <h1 className="welcome-banner">WELCOME TO EPI-SCI ENGINEERING EXPLORE</h1>
        <p>I'm Adu-Gyamfi Anthony, your website. An Electrical and Electronic Engineering Student at UMaT.</p>
        <p>Also, a Software Developing Student at ERA-Axis.</p>
      </div>
      <button type="button" className="counter">
        <h3>The site's Recommended Prerequisites:</h3>
        <p><strong>1.</strong> This site is suitable for individuals interested to explore more in the field of Engineering. This individual can be a learner, teacher, lecturer, researcher or a professor in the field of Engineering.</p>
        <p><strong>2.</strong> For learners, the recommended prerequisites include a well sounded mindset to know more about Engineering field.</p>
      </button>
    </section>
  )
}
