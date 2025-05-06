import Image from 'next/image';
import React from 'react';
import { Button, Card, CardBody, CardImg, CardText, CardTitle } from 'react-bootstrap';

function ServicesSection({ services }) {

  return (
    <div>
      <div className='d-flex justify-content-center align-items-center'>
        {/* <Button
          variant="secondary"
          size="large"
          href="#contact"
          className=' py-2 my-2 font20' style={{ zIndex: 1,backgroundColor: '#b13fbc', color: '#fff',border: 'none' }}
        >
          Get a Free Consultation
        </Button> */}
      </div>
      <h1 className='text-center'>Our Services</h1>
      <div className='text-center mb-3'>
        Comprehensive solutions tailored to your structural repair and renovation needs
      </div>
      <div className='d-flex justify-content-center mb-4'>
        {/* <Button
          variant="secondary"
          size="large"
          href="#contact"
          className='d-flex justify-content-center align-items-center py-2' style={{ zIndex: 1 }}
        >
          Get a Free Consultation
        </Button> */}
      </div>
      <div className='col-md-12 row mx-0'>
        {services?.map((service, index) => (
          <div className='col-md-4 my-3' key={index}>
            <Card className='shadow-md' style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
              {/* <CardImg variant="top" src={service?.img} style={{ height: '300px' }} /> */}
              <CardBody className='p-0'>
                <div className=' img_div'>
                  <Image src={service?.img} alt="Feature Image" fill className='img_css' />
                </div>
                <CardTitle className='fw-bold m-2'>{service?.title}</CardTitle>
                <CardText className='mx-2 mb-3'>{service?.description}</CardText>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;