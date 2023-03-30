import React, { useState } from 'react';
import Navbar from './NavBar';
import fetch from 'isomorphic-fetch';
import { styled } from '@mui/material';

const StyledPage = styled('div')`
  background-color: #${({ backgroundColor }) => backgroundColor || 'fff'};
  height: 100vh;
`;

const StyledQuoteCard = styled('div')`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  margin: 0 auto;
  padding: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const StyledButton = styled('button')`
  background-color: #5ce0d8;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 20px;
  padding: 8px 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 61%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

function QuoteGenerator() {
  const [quote, setQuote] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('fff');

  const getQuote = () => {
    fetch('https://type.fit/api/quotes')
      .then((response) => response.json())
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        setQuote(data[randomIndex].text);
        setBackgroundColor(
          Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')
        );
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
    <Navbar />
    <StyledPage backgroundColor={backgroundColor}>
      <StyledQuoteCard>
        <h1>Get Your Quote of the Day!</h1>
        <p>{quote}</p>
        <StyledButton onClick={getQuote}>Generate Quote</StyledButton>
      </StyledQuoteCard>
    </StyledPage>
    </>
  );
}

export default QuoteGenerator;

