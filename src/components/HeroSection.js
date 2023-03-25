import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/material';

const HeroContainer = styled('div')`
  background-color: #eefcfb;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const HeroTitle = styled(Typography)`
  color: #050720;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 48px;
`;

const HeroSubtitle = styled(Typography)`
  color: #050720;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 24px;
`;

const HeroCircle = styled('div')`
  background-color: #5ce0d8;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 20px;
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroTitle variant="h3">Welcome to our Mental Health Website</HeroTitle>
      <HeroSubtitle>
        A place where you can find resources, articles, and support for your mental well-being.
      </HeroSubtitle>
      <HeroCircle />
    </HeroContainer>
  );
};

export default HeroSection;
