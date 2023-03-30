import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#050720', minHeight: '200px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: { xs: 'column', md: 'row' }, padding: 2 }}>
      <Typography variant="h6" sx={{ color: '#FFCF43' }}>
        Mental Map: Feel good with best solutions
      </Typography>
      <Box>
        <Typography variant="h6" sx={{ color: 'white', mb: 1 }}>
          About Us
        </Typography>
        <Box sx={{ flexDirection: 'column' }}>
          <Button href="/about" target="_blank" rel="noopener" sx={{ color: 'white' }}>Mission</Button>
          <Button href="/about" target="_blank" rel="noopener" sx={{ color: 'white' }}>Problem</Button>
          <Button href="/about" target="_blank" rel="noopener" sx={{ color: 'white' }}>Solution</Button>
        </Box>
      </Box>
      <Box>
        <Typography variant="h6" sx={{ color: 'white', mb: 1 }}>
          Contact Us
        </Typography>
        <Box sx={{ flexDirection: 'column', alignItems: 'center' }}>
          <Button href="https://github.com/ivonamaria" target="_blank" rel="noopener" sx={{ color: 'white', mb: 1 }}>
            <GitHubIcon fontSize="small" sx={{ marginRight: '5px' }} />
            Iwona
          </Button>
          <Button href="https://github.com/web3cryptoidea" target="_blank" rel="noopener" sx={{ color: 'white', mb: 1 }}>
            <GitHubIcon fontSize="small" sx={{ marginRight: '5px' }} />
            Natalia
          </Button>
          <Button href="https://github.com/lentiodev" target="_blank" rel="noopener" sx={{ color: 'white', mb: 1 }}>
            <GitHubIcon fontSize="small" sx={{ marginRight: '5px' }} />
            Lentio
          </Button>
          <Button href="https://github.com/VitaliyZhark" target="_blank" rel="noopener" sx={{ color: 'white' }}>
            <GitHubIcon fontSize="small" sx={{ marginRight: '5px' }} />
            Vitaliy
          </Button>
        </Box>
      </Box>
      <Typography variant="body2" sx={{ color: '#5ce0d8', textAlign: 'center', marginTop: '50px' }}>
        &copy; All rights reserved. 2023
      </Typography>
    </Box>
  );
};

export default Footer;

