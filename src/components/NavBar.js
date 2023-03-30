import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
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
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  const drawerItems = (
    <List>
      <ListItem button component={NavLink} to="/" activeClassName="active" onClick={handleDrawerToggle}>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button component={NavLink} to="/articles" activeClassName="active" onClick={handleDrawerToggle}>
        <ListItemText primary="Articles" />
      </ListItem>
      <ListItem button component={NavLink} to="/about" activeClassName="active" onClick={handleDrawerToggle}>
        <ListItemText primary="About Us" />
      </ListItem>
      <ListItem button component={NavLink} to="/contact" activeClassName="active" onClick={handleDrawerToggle}>
        <ListItemText primary="Contact" />
      </ListItem>
    </List>
  );

  return (
    <React.Fragment>
      <StyledAppBar position="static">
        <Toolbar>
          {isMobile && (
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle} sx={{ color: '#050720' }}>
              <MenuIcon />
            </IconButton>
          )}
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
          {!isMobile && (
            <React.Fragment>
              <StyledNavLink to="/" activeClassName="active">
                <Button color="inherit">Home</Button>
              </StyledNavLink>
              <StyledNavLink to="/articles" activeClassName="active">
                <Button color="inherit">Articles</Button>
              </StyledNavLink>
              <StyledNavLink to="/about" activeClassName="active">
                <Button color="inherit">About Us</Button>
              </StyledNavLink>
              <StyledNavLink to="/contact" activeClassName="active">
                <Button color="inherit">Contact</Button>
              </StyledNavLink>
            </React.Fragment>
          )}
        </Toolbar>
      </StyledAppBar>
      <Drawer anchor="right" open={openDrawer} onClose={handleDrawerToggle}>
        {drawerItems}
      </Drawer>
    </React.Fragment>
  );
};

export default Navbar;
