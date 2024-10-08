import React, { useEffect, useState } from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const currentTime = new Date().getHours();
    if (currentTime >= 5 && currentTime < 12) {
      setGreeting('Good Morning');
    } else if (currentTime >= 12 && currentTime < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, []);

  return (
    <div className='hero-container'>
      <video src='/videos/1.mp4' autoPlay loop muted />
      <h1>{greeting}</h1>
      <p>Welcome to our website</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          WATCH <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
