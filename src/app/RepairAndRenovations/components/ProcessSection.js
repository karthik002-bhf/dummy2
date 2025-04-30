import React from 'react';
import { Box, Typography, Stepper, Step, StepLabel, Container, useTheme } from '@mui/material';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import HandymanIcon from '@mui/icons-material/Handyman';
import ChecklistIcon from '@mui/icons-material/Checklist';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { Button } from 'react-bootstrap';

function ProcessSection() {
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
    <div className='py-5'>
      <h1 className='text-center my-4'>Execution Process</h1>
      <div className='text-center mb-4'>A systematic approach to ensure quality at every stage of your project</div>
      <div className='col-12 row mx-0 d-flex justify-content-between'>
        <div style={{ borderBottom: '2px solid black', width: '87%', position: 'relative', top: '25px', left: '15px', zIndex: '-1' }}></div>
        {steps.map((step, index) => (
          <div className='col-2' key={index}>
            <Button variant="primary" className='' style={{ widows: '50px', height: '50px', borderRadius: '50%', }}>
              {step.icon}
            </Button>
            <div className='text-break'>
              {step.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessSection;