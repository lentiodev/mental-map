import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box sx={{ backgroundColor: '#eefcfb', py: 4 }}>
      <Typography variant="body1" align="center" mb={2}>
        Thank you to Mental Map, a resource for mental health articles, information, and support.
      </Typography>
      <Box display="flex" justifyContent="center" mb={2}>
        <IconButton color="primary" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <Facebook />
        </IconButton>
        <IconButton color="primary" href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <Twitter />
        </IconButton>
        <IconButton color="primary" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <Instagram />
        </IconButton>
        <IconButton color="primary" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <LinkedIn />
        </IconButton>
      </Box>
      <Typography variant="body2" align="center" color="text.secondary">
        &copy; {currentYear} Mental Map. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
