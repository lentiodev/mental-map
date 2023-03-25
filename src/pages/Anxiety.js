import React from 'react';
import Navbar from '../components/NavBar';
import { Typography } from '@mui/material';
import { styled } from '@mui/material';

const Container = styled('div')`
  padding: 40px;
`;

const Anxiety = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Typography variant="h4">ConditionName</Typography>
        <Typography>
          A full description for the ConditionName mental health symptom goes here.
        </Typography>
      </Container>
    </>
  );
};

export default Anxiety;
