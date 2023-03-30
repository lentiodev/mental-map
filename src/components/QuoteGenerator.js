import React, { useState } from 'react';
import Navbar from './NavBar';
import fetch from 'isomorphic-fetch';
import { styled } from '@mui/material';

const StyledPage = styled('div')`
  background-color: #${({ backgroundColor }) => backgroundColor || 'fff'};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledQuoteCard = styled('div')`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  margin: 0 auto;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  margin-top: 32px;

  &:hover {
    background-color: #52c2b9;
  }
`;

const StyledQuote = styled('span')`
  font-size: 24px;
  margin-top: 16px;
`;

const StyledAuthor = styled('span')`
  font-size: 20px;
  margin-top: 8px;
`;

function QuoteGenerator() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('fff');

  const getQuote = () => {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        setQuote(`"${data.content}"`);
        setAuthor(`- ${data.author}`);
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
          <h1>Inspirational Saying of the Day</h1>
          <StyledQuote>{quote}</StyledQuote>
          <StyledAuthor>{author}</StyledAuthor>
        </StyledQuoteCard>
        <StyledButton onClick={getQuote}>Generate Quote</StyledButton>
      </StyledPage>
    </>
  );
}

export default QuoteGenerator;
