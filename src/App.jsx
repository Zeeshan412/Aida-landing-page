import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyChoose from './components/WhyChoose'
import FeatureSection from './components/FeatureSection'
import ScoresSection from './components/ScoresSection'
import Footer from './components/Footer'
import Container from './layouts/Container'
import Overlay from './components/Overlay'
import LegalQuestions from './components/LegalQuestions'
import UsersSaySection from './components/UsersSaySection';

function App() {
  return (
    <Container>
      <Navbar />
      <Hero />
      <Overlay />
      <LegalQuestions />
      <WhyChoose />
      <FeatureSection />
      <ScoresSection />
      <UsersSaySection />
      <Footer />
    </Container>
  )
}

export default App