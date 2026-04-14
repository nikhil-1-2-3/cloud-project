import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import SignatureExperience from './components/SignatureExperience';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import Takeaway from './components/Takeaway';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <SignatureExperience />
        <WhyChooseUs />
        <Testimonials />
        <Location />
        <Takeaway />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
