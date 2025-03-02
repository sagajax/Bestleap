import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import HeroSection from './components/Hero'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <HeroSection />
      <Slider />
    </>
  )
}

export default App
