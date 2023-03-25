import React from 'react';
import { Button, Typography } from '@mui/material';
import { styled } from '@mui/material';
import { AnxietyIcon, DepressionIcon, AutismIcon, AddictionIcon } from './icons'; // Import the custom icons here

const SectionContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  padding: 40px 0;
`;

const SectionTitle = styled(Typography)`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 36px;
  margin-bottom: 20px;
`;

const ButtonContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const StyledButton = styled(Button)`
  font-family: 'Josefin Sans', sans-serif;
`;

const ConditionsSection = () => {
  return (
    <SectionContainer>
      <SectionTitle>Mental Health Conditions</SectionTitle>
      <ButtonContainer>
        <StyledButton
          startIcon={<AnxietyIcon />}
          variant="outlined"
          onClick={() => (window.location.href = '/anxiety')}
        >
          Anxiety
        </StyledButton>
        <StyledButton
          startIcon={<DepressionIcon />}
          variant="outlined"
          onClick={() => (window.location.href = '/depression')}
        >
          Depression
        </StyledButton>
        <StyledButton
          startIcon={<AutismIcon />}
          variant="outlined"
          onClick={() => (window.location.href = '/autism')}
        >
          Autism
        </StyledButton>
        <StyledButton
          startIcon={<AddictionIcon />}
          variant="outlined"
          onClick={() => (window.location.href = '/addiction')}
        >
          Addiction
        </StyledButton>
      </ButtonContainer>
    </SectionContainer>
  );
};

export default ConditionsSection;
