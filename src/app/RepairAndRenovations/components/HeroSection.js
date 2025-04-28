import React from 'react';
import { Box, Typography, Button, Container, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import ConstructionIcon from '@mui/icons-material/Construction';

// const HeroBox = styled(Box)(({ theme }) => ({
//   backgroundColor: theme.palette.primary.main,
//   color: theme.palette.common.white,
//   height: '60vh',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   textAlign: 'center',
//   padding: theme.spacing(4),
// }));

function HeroSection () {
  // const theme = useTheme();

  return (
    // <HeroBox>
    <div className=''>
      <div style={{backgroundImage: 'url(/images/repair_and_renovation_1.png)', backgroundSize: 'cover', backgroundPosition: 'center', height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem'}}></div>
      <div className='container'>
        {/* <ConstructionIcon sx={{ fontSize: 80, mb: 3 }} /> */}
        {/* <Typography variant="h2" component="h1" gutterBottom>
          Expert Structural Repairs & Renovations
        </Typography> */}
        {/* <Typography variant="h5" component="p" gutterBottom sx={{ mb: 4 }}>
          Quality solutions for residential and commercial properties
        </Typography> */}
        {/* <Button 
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
        </Button> */}
      </div>
      </div>
    // </HeroBox>
  );
};

export default HeroSection;