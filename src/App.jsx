import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import HeroSection from './components/Hero'
import CurriculumSection from './components/CurriculumSection'
import LiveClassSchedule from './components/LiveClass'
import PlacementSupport from './components/Support'
import JobTitleComponent from './components/JobTitle'
import BuildSkillsComponent from './components/BuildSkill'
import Tools from './components/Tools'
import Certificate from './components/Certificate'
import FAQSection from './components/Faq'
import ContactCard from './components/ContactCard'
import BottomFixedNavbar from './components/BottomFixedNavbar' // Import the component

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className='h-20 bg-green-950'></div>
      <HeroSection />
      <Slider />
      <CurriculumSection />
      <LiveClassSchedule />
      <PlacementSupport />
      <JobTitleComponent />
      <BuildSkillsComponent />
      <Tools />
      <Certificate/>
      <FAQSection />
      <ContactCard />
      <BottomFixedNavbar /> {/* Add the component at the end */}
    </>
  )
}

export default App