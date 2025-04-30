import React from 'react';
import { ContactPhone, Home, Description, Build, Brush, DoneAll } from '@mui/icons-material';
import { Button } from 'react-bootstrap';

function ProcessSection() {
  const steps = [
    {
      label: 'Initial Consultation',
      icon: <ContactPhone />,
    },
    {
      label: 'Site Visit & Assessment',
      icon: <Home />,
    },
    {
      label: 'Quotation and Planning',
      icon: <Description />,
    },
    {
      label: 'Surface Preaparation',
      icon: <Build />,
    },
    {
      label: 'Painting Exectuion',
      icon: <Brush />,
    },
    {
      label: 'Final Walkthrough & Handover',
      icon: <DoneAll />,
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