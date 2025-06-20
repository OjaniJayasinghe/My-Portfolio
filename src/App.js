import React from 'react';
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import MyCodingSkills from "./components/MyCodingSkills";
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from "./components/Footer";
import ChatBotWidget from './components/ChatBotWidget';
import BinaryBackground from "./components/BinaryBackground";
import Education from './components/Education';

function App() {
  return (
    <div className="App">
      <BinaryBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Header />
        <Hero />
        <About />
        <Skills/>
        <MyCodingSkills />
        <Projects />
        <Education/>
        <Contact />
        <Footer/>
        <ChatBotWidget /> {/* ✅ Chatbot added */}
      </div>
    </div>
  );
}

export default App;
