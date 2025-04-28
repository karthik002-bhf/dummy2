import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Container,
  useTheme,
  Button
} from '@mui/material';
import AssessmentIcon from '@mui/icons-material/Assessment';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ConstructionIcon from '@mui/icons-material/Construction';
import HandymanIcon from '@mui/icons-material/Handyman';

function ServicesSection() {
  // const theme = useTheme();

  const services = [
    {
      title: "Structural Assessment",
      description: "We begin with a detailed structural assessment to evaluate the integrity of your building. Our team inspects visible and hidden signs of damage, wear, or stress, identifying any potential safety risks or weaknesses in the structure.",
      icon: <AssessmentIcon fontSize="large" color="primary" style={{ width: "100px", height: '100px' }} />,
    },
    {
      title: "Repair Design & Vetting",
      description: "Based on the assessment, we create a customized repair plan. This includes technical drawings, material selection, and method recommendations. We also offer third-party vetting, if needed, to ensure compliance and quality assurance.",
      icon: <EngineeringIcon fontSize="large" color="primary" style={{ width: "100px", height: '100px' }} />,
    },
    {
      title: "Repair Executions",
      description: "Our skilled professionals carry out the repairs with precision and care. From minor fixes to major restorations, we use quality materials and proven techniques to restore structural strength and improve longevity.",
      icon: <ConstructionIcon fontSize="large" color="primary" style={{ width: "100px", height: '100px' }} />,
    },
    {
      title: "Post-Repair Maintenance",
      description: "We provide comprehensive maintenance plans after repairs to ensure long-term structural health. Our follow-up services help prevent future issues and maintain the integrity of your property.",
      icon: <HandymanIcon fontSize="large" color="primary" style={{ width: "100px", height: '100px' }} />,
    }
  ];

  return (
    <div className='container'>
      <h1 className='text-center'>Our Services</h1>
      <div className='text-center mb-5'>
        Comprehensive solutions tailored to your structural repair and renovation needs
      </div>
      <div className='d-flex justify-content-center mb-4'>
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
      </div>

      <div className='col-12 row'>
        {services.map((service, index) => (
          <div className='col-6 my-4' key={index}>
            <Card sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-5px)',
              },
              borderRadius: 2
            }}>
              <CardContent sx={{
                flexGrow: 1,
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
              }}>
                {/* <Box sx={{
                  width: 200,
                  height: 200,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '100%',
                  mb: 3
                }}> */}
                  {service.icon}
                {/* </Box> */}
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;