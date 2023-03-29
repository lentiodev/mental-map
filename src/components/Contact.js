import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import Navbar from './NavBar';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const contactData = {
      name,
      email,
      message,
    };

    localStorage.setItem('contactData', JSON.stringify(contactData));
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <>
    <Navbar />
    <Box
      sx={{
        width: '100%',
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eefcfb',
        py: 4,
      }}
    >
      <Typography variant="h4" mb={4} textAlign="center">
        Contact Us
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: { xs: '90%', sm: '60%', md: '40%' },
          gap: 2,
        }}
      >
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          label="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          variant="outlined"
          fullWidth
          multiline
          rows={6}
          required
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#5ce0d8',
            color: '#fff',
            ':hover': {
              backgroundColor: '#4dbac3',
            },
          }}
          type="submit"
        >
          Send
        </Button>
      </Box>
    </Box>
    </>
  );
};

export default Contact;