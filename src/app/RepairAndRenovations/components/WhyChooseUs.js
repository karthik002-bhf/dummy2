import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
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
      title: "Customized Solutions",
      icon: <BuildIcon fontSize="small" />,
      // description: "Personalized repair plans for each unique structure"
    },
    {
      id: 3,
      title: "Guaranteed Workmanship",
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
    <div className='container'>
      <h1 className='text-center my-4'>
        Why Choose Us?
      </h1>

      <div className='col-12 row d-flex justify-content-between'>
        {features.map((feature) => (
          <div className='col-2' key={feature.id}>
            <Box
              sx={{
                alignItems: 'center',
                gap: 0.5,
                bgcolor: 'white',
                p: 1,
                borderRadius: 2,
                boxShadow: 1,
                height: '100%',
                '&:hover': {
                  boxShadow: 3
                }
              }}
            >
              <div className='text-center'>
                <Avatar
                  sx={{
                    width: 40,
                    height: 40,
                    bgcolor: 'primary.light',
                    color: 'primary.main',
                    marginX: 'auto',
                  }}
                >
                  {feature.icon}
                </Avatar>
                <h5>
                  {feature.title}
                </h5>
                <div>
                  {feature.description}
                </div>
              </div>
            </Box>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;