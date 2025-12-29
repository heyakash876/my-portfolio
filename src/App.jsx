
import React from 'react';
import Ballpit from './components/Ballpit';
import TextPressure from './components/TextPressure';
import About from './components/About';
import NavBar from './components/NavBar';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import './App.css';
import ProfileCard from './components/ProfileCard';
import Dock from './components/Dock';

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <div className="ballpit-container">
        <Ballpit
          count={100}
          gravity={0}
          friction={0.995}
          wallBounce={0.9}
          followCursor={false}
          colors={['#007bff', '#ff00ff', '#00ffff', '#ffffff']}
          ambientColor={'#ffffff'}
          lightIntensity={200}
        />
      </div>

      <div className="content-wrapper">
        <div className="hero-section">
          <div className="hero-text">
            <div style={{ position: 'relative', height: '300px', width: '100%' }}>
              <TextPressure text="AKASH VERMA" flex={true} alpha={false} stroke={false} width={true} weight={true} italic={true} />
            </div>
            <h2 className="title">AI Engineer</h2>
            <p className="intro-line">
              Architecting intelligent systems that bridge the gap between imagination and reality.
            </p>
          </div>


        </div>



        <div style={{ display: 'flex', justifyContent: 'center', margin: '4rem 0' }}>
          <ProfileCard
            name="Akash Verma"
            title="AI Engineer"
            handle="heyakash876"
            status="Online"
            contactText="Get in Touch"

            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={true}
            onContactClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        </div>

        <div id="about">
          <About />
        </div>
        <Skills />
        <div id="projects">
          <Projects />
        </div>
        <Contact />
        <Footer />
      </div>
      <Dock />
    </div>
  );
}

export default App;
