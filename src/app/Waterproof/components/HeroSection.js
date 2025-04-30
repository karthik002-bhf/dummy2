import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/system';
import PlumbingIcon from '@mui/icons-material/Plumbing';



const HeroSection = () => {

  return (
    <div>
      <Container maxWidth="md">
        <PlumbingIcon sx={{ fontSize: 80, mb: 3 }} />
        <Typography variant="h2" component="h1" gutterBottom>
          Waterproofing
        </Typography>
        <Typography variant="h5" component="p" gutterBottom sx={{ mb: 4 }}>
          Quality solutions for residential and commercial properties
        </Typography>
        <Button 
          variant="contained" 
          color="secondary" 
          size="large"
          href="#contact"
          sx={{ 
            px: 4,
            py: 2,
            fontSize: '1.1rem'
          }}
        >
          Get a Free Consultation
        </Button>
      </Container>
    </div>
  );
};

export default HeroSection;