 
 
import React from 'react';
import Navbar from './NavBar';
import HeroSection from './HeroSection';
import ConditionsSection from './ConditionsSection';

import { styled } from '@mui/material';
import { Link } from 'react-router-dom';

import Footer from './Footer';

const StyledButton = styled(Link)`
  background-color: #5ce0d8;
  color: #fff;
  border-radius: 50%;
  font-size: 60px;
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 61%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-decoration: none;
  
`;

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ConditionsSection />
      <StyledButton to="/QuoteGenerator">
        <span style={{ fontSize: '1.5rem' }}>Get Quote</span>
      </StyledButton>
      <Footer />
    </>
  );
};

export default Home;
