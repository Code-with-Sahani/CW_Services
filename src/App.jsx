import React from 'react' 
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import AboutSection from './Components/AboutSection';
import ServicesSection from './Components/ServicesSection';
import IndustriesSection from './Components/IndustriesSection';
import TechnologiSection from './Components/Technologisection';
import ClientsSection from './Components/ClientsSection';
import ContactPage from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <HeroSection/>
      <AboutSection/>
      <ServicesSection/>
      <IndustriesSection/>
      <TechnologiSection/>
      <ClientsSection/>
      <ContactPage/>
      <Footer/>
    </div>
  )
}

export default App;
