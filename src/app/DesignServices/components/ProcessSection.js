import React from 'react';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import DrawIcon from '@mui/icons-material/Draw';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Button } from 'react-bootstrap';




function ProcessSection() {
  const steps = [
    {
      label: 'Understanding Client Requirements',
      icon: <RecordVoiceOverIcon />,
    },
    {
      label: 'Concept Development & Drafts',
      icon: <DrawIcon />,
    },
    {
      label: 'Design Iterations & Finalization',
      icon: <AutoFixHighIcon />,
    },
    {
      label: 'Structural Analysis & Detailing',
      icon: <EngineeringIcon />,
    },
    {
      label: 'Vastu Compliance Review (if required)',
      icon: <SelfImprovementIcon />,
    },
    {
      label: 'Final Design Handover',
      icon: <TaskAltIcon />,
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