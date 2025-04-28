import React from 'react';
import { Box, Typography, Stepper, Step, StepLabel, Container, useTheme } from '@mui/material';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import HandymanIcon from '@mui/icons-material/Handyman';
import ChecklistIcon from '@mui/icons-material/Checklist';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

function ProcessSection() {
  // const theme = useTheme();
  const steps = [
    {
      label: 'Initial Consultation',
      icon: <ContactPhoneIcon />,
    },
    {
      label: 'Site Inspection & Structural Assessment',
      icon: <HomeWorkIcon />,
    },
    {
      label: 'Repair Planning & Design Vetting',
      icon: <DesignServicesIcon />,
    },
    {
      label: 'Work Execution',
      icon: <HandymanIcon />,
    },
    {
      label: 'Quality Check & Finishing',
      icon: <ChecklistIcon />,
    },
    {
      label: 'Project Handover',
      icon: <AssignmentTurnedInIcon />,
    },
  ];

  return (
    // <Box id="process" sx={{ py: 8 }}>
    <div className='container py-5'>
      <h1 className='text-center my-4'>
        Execution Process
      </h1>
      <div className='text-center mb-4'>
        A systematic approach to ensure quality at every stage of your project
      </div>

      <Box sx={{ width: '100%', overflowX: 'auto' }}>
        <div className='col-12 row d-flex justify-content-between' style={{ padding: '2rem', }}>
          {steps.map((step, index) => (
            <div className='col-2' key={index}>
              <Box sx={{
                bgcolor: 'primary.main',
                color: 'white',
                width: 40,
                height: 40,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {step.icon}
              </Box>
              {step.label}
            </div>
            // <Step key={index}>
            //   <StepLabel 
            //     StepIconComponent={() => (
            //       <Box sx={{ 
            //         bgcolor: 'primary.main', 
            //         color: 'white', 
            //         width: 40, 
            //         height: 40, 
            //         borderRadius: '50%',
            //         display: 'flex',
            //         alignItems: 'center',
            //         justifyContent: 'center'
            //       }}>
            //         {step.icon}
            //       </Box>
            //     )}
            //   >
            //     {step.label}
            //   </StepLabel>
            // </Step>
          ))}
        </div>
      </Box>
    </div>
    // </Box>
  );
};

export default ProcessSection;