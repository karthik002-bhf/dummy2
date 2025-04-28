import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';

function Header () {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <ConstructionIcon sx={{ mr: 2 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Repairs & Renovations
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {/* <Button color="inherit" href="#services">Services</Button> */}
          {/* <Button color="inherit" href="#why-us">Why Us</Button> */}
          {/* <Button color="inherit" href="#process">Process</Button> */}
          {/* <Button color="inherit" href="#pricing">Pricing</Button> */}
          {/* <Button color="inherit" href="#contact">Contact</Button> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;