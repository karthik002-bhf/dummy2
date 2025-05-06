import React from 'react';
import { Box, Avatar } from '@mui/material';

function WhyChooseUs({ features }) {

  return (
    <div>
      <h1 className='text-center my-4'>Why Choose Us?</h1>
      <div className='col-md-12 row mx-0 d-flex justify-content-around'>
        {features?.map((feature) => (
          <div className='col-4 col-md-2 my-2 my-md-0' key={feature?.id}>
            <div className='d-flex justify-content-center align-items-center flex-column box'>
              <div className='icon_css' >{feature?.icon}</div>
              <h5 className='font14'>{feature?.title}</h5>
              <div>{feature?.description}</div>
            </div>
            {/* <Box
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
                {feature?.icon}
              </Avatar>
              <Box>
                <h5 className='font14'>{feature?.title}</h5>
                <div>{feature?.description}</div>
              </Box>
            </Box> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;