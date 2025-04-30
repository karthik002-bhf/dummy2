import React from 'react';
import { Box, Avatar } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PeopleIcon from '@mui/icons-material/People';
import BuildIcon from '@mui/icons-material/Build';
import ScheduleIcon from '@mui/icons-material/Schedule';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

function WhyChooseUs() {

  const features = [
    {
      id: 1,
      title: "Expertise & Experience",
      icon: <PeopleIcon fontSize="small" />,
      // description: "20+ years of specialized structural repair experience"
    },
    {
      id: 2,
      title: "Tailored Design Solutions",
      icon: <BuildIcon fontSize="small" />,
      // description: "Personalized repair plans for each unique structure"
    },
    {
      id: 3,
      title: "High-Quality Material Selection",
      icon: <CheckCircleIcon fontSize="small" />,
      // description: "5-year warranty on all structural repairs"
    },
    {
      id: 4,
      title: "Timely Service",
      icon: <ScheduleIcon fontSize="small" />,
      // description: "On-time project completion with daily progress reports"
    },
    {
      id: 5,
      title: "Transparent Pricing",
      icon: <AttachMoneyIcon fontSize="small" />,
      // description: "No hidden fees with detailed cost breakdowns"
    }
  ];

  return (
    <div>
      <h1 className='text-center my-4'>Why Choose Us?</h1>
      <div className='col-md-12 row mx-0 d-flex justify-content-around'>
        {features.map((feature) => (
          <div className='col-4 col-md-2 my-2 my-md-0' key={feature.id}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                bgcolor: 'white',
                p: 1,
                borderRadius: 2,
                boxShadow: 1,
                '&:hover': {
                  boxShadow: 3
                }
              }}
            >
              <Avatar
                sx={{
                  width: 40,
                  height: 40,
                  bgcolor: 'primary.light',
                  color: 'primary.main'
                }}
              >
                {feature.icon}
              </Avatar>
              <Box>
                <h5 className='font14'>{feature.title}</h5>
                <div>{feature.description}</div>
              </Box>
            </Box>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;