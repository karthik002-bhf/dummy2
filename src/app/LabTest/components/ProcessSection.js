import React from 'react';
import { Button } from 'react-bootstrap';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import ScienceIcon from '@mui/icons-material/Science';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import DescriptionIcon from '@mui/icons-material/Description';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';


function ProcessSection() {
  const steps = [
    {
      label: 'Sample Collection & Field Inspection',
      icon: <ContactSupportIcon />,
    },
    {
      label: 'Laboratory Analysis Based on Test Requirements',
      icon: <ScienceIcon />,
    },
    {
      label: 'Data Review & Interpretation',
      icon: <AnalyticsIcon />,
    },
    {
      label: 'Report Generation with Recommendations',
      icon: <DescriptionIcon />,
    },
    {
      label: 'Follow-up Advisory (if required)',
      icon: <SupportAgentIcon />,
    }
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