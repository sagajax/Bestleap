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
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <HeroSection />
      <Slider />
      <CurriculumSection />
      <LiveClassSchedule />
      <PlacementSupport />
      <JobTitleComponent />
      <BuildSkillsComponent />
      <Tools />
    </>
  )
}

export default App
