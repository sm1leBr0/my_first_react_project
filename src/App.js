import React from 'react'
import Navbar from './components/Navbar'
import Options from './components/Options'
import Services from './components/Services'
import Footer from './components/Footer'
import Paralax from './components/Paralax'
import News from './components/News'
import Slider from './components/Slider'
import Ourworks from './components/Ourworks'

function App() {
  return (
    <>
      <Navbar />
      <Options />
      <Services />
      <Paralax />
      <Ourworks />
      <News />
      <Slider />
      <Footer />
    </>
  )
}

export default App
