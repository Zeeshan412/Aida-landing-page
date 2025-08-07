import React from 'react';
import './App.css';
import Container from './layouts/Container';
import {
  Navbar,
  Hero,
  Overlay,
  LegalQuestions,
  WhyChoose,
  FeatureSection,
  ScoresSection,
  UsersSaySection,
  Footer,
} from './components';

function App() {
  return (
    <Container>
      <main>
        <Navbar />
        <Hero />
        <Overlay />
        <LegalQuestions />
        <WhyChoose />
        <FeatureSection />
        <ScoresSection />
        <UsersSaySection />
        <Footer />
      </main>
    </Container>
  );
}

export default App;
