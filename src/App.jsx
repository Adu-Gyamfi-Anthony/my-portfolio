import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import profileImg from './profile.png'

// Import from your descriptive 'sections' folder
import IntroductionSection from './sections/IntroductionSection'
import LinksAndContactSection from './sections/LinksAndContactSection'
import BottomSpacingSection from './sections/BottomSpacingSection'

function App() {
  return (
    <>
      <div className="wave-container">
        <div className="wave"></div>
        <div className="wave layer2"></div>
      </div>

      {/* Render the descriptive components */}
      <IntroductionSection 
        heroImg={heroImg} 
        reactLogo={reactLogo} 
        viteLogo={viteLogo} 
        profileImg={profileImg} 
      />

      <div className="ticks"></div>

      <LinksAndContactSection 
        viteLogo={viteLogo} 
        reactLogo={reactLogo} 
      />

      <div className="ticks"></div>
      
      <BottomSpacingSection />
    </>
  )
}

export default App
