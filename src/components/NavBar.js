import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { styled } from '@mui/material';

const StyledAppBar = styled(AppBar)`
  background-color: #eefcfb;
`;

const StyledNavLink = styled(NavLink)`
  color: #050720;
  text-decoration: none;
  margin-right: 10px;

  &.active {
    font-weight: bold;
  }
`;

const StyledLogo = styled(Typography)`
  color: #5ce0d8;
  font-family: 'Josefin Sans', sans-serif;
  display: flex;
  align-items: center;
`;

const Navbar = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <StyledLogo variant="h6" style={{ flexGrow: 1 }}>
          <PsychologyIcon
            sx={{
              backgroundColor: '#050720',
              borderRadius: '50%',
              marginRight: '8px',
              width: '32px',
              height: '32px',
              padding: '4px'
            }}
          />
          Mental Map
        </StyledLogo>
        <StyledNavLink to="/articles" activeClassName="active">
          <Button color="inherit">Articles</Button>
        </StyledNavLink>
        <StyledNavLink to="/about" activeClassName="active">
          <Button color="inherit">About Us</Button>
        </StyledNavLink>
        <StyledNavLink to="/contact" activeClassName="active">
          <Button color="inherit">Contact</Button>
        </StyledNavLink>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
