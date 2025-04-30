import React from 'react';
import { Box, Typography, Button, Container, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';

const HeroBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  height: '60vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: theme.spacing(4),
}));

const HeroSection = () => {
  const theme = useTheme();

  return (
    <HeroBox>
      <Container maxWidth="md">
        <FormatPaintIcon sx={{ fontSize: 80, mb: 3 }} />
        <Typography variant="h2" component="h1" gutterBottom>
          Interior Design 
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
    </HeroBox>
  );
};

export default HeroSection;