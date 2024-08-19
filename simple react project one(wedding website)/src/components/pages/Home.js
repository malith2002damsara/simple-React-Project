import React from 'react';
import '../../App.css';
//import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

import ContactForm from './ContactForm';



function Home() {


  return (
    <>
     <HeroSection />
     <ContactForm/>
      <Footer />
     
    </>
  );
}

export default Home;