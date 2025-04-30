import React from 'react';
import { Button, Card, CardBody, CardImg, CardText, CardTitle } from 'react-bootstrap';
import { Build, Terrain } from '@mui/icons-material';


function ServicesSection() {

  const services = [
    {
      title: "Building Materials Testing",
      description: "We provide comprehensive testing of construction materials including cement, concrete, aggregates, steel, bricks, and more. Our certified laboratory ensures compliance with national and international standards to guarantee quality, strength, and durability.",
      icon: <Build fontSize="large" color="primary" />,
      img: "/Images/LabTest/lab_testing_building_material.png",
    },
    {
      title: "Soil & Water Testing",
      description: "Our soil and water testing services help assess the suitability of your site for construction and ensure safe water quality. Tests include soil bearing capacity, composition, contamination levels, pH balance, and water potability for domestic or industrial use.",
      icon: <Terrain fontSize="large" color="primary" />,
      img: "/Images/LabTest/lab_testing_soil_water.png",  
    },
  ];

  return (
    <div>
      <h1 className='text-center'>Our Services</h1>
      <div className='text-center mb-3'>
        Comprehensive solutions tailored to your structural repair and renovation needs
      </div>
      <div className='d-flex justify-content-center mb-4'>
        <Button
          variant="secondary"
          size="large"
          href="#contact"
          className='d-flex justify-content-center align-items-center py-2' style={{ zIndex: 1 }}
        >
          Get a Free Consultation
        </Button>
      </div>
      <div className='col-12 row mx-0'>
        {services.map((service, index) => (
          <div className='col-6 my-3' key={index}>
            <Card className='' style={{ width: '100%', height: '100%' }}>
              <CardImg variant="top" src={service.img} style={{ height: '300px' }} />
              <CardBody className='my-auto py-auto'>
                <CardTitle className='fw-bold'>{service.title}</CardTitle>
                <CardText>{service.description}</CardText>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;