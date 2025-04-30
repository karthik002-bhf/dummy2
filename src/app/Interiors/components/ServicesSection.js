import React from 'react';
import { Button, Card, CardBody, CardImg, CardText, CardTitle } from 'react-bootstrap';
import { ColorLens, FormatPaint, House } from '@mui/icons-material';
import ShowerIcon from '@mui/icons-material/Shower';
import BalconyIcon from '@mui/icons-material/Balcony';


function ServicesSection() {

  const services = [
    {
      title: "Modular Kitchen Design",
      description: "We specialize in creating modular kitchen designs that are stylish, space-efficient, and tailored to your lifestyle. From layout planning to material selection, we deliver kitchens that blend functionality and aesthetics seamlessly.",
      icon: <ColorLens fontSize="large" color="primary" />,
      img: "/Images/Interiors/modular_kitchen_design_pixabay.jpg",
    },
    {
      title: "Living-Dining Designs",
      description: "Our living and dining designs focus on creating harmonious, multifunctional spaces. We optimize layouts for flow and comfort while incorporating your taste and personality into every element.",
      icon: <FormatPaint fontSize="large" color="primary" />,
      img: "/Images/Interiors/living_dining_pixabay.jpg",
    },
    {
      title: "Room Designs",
      description: "Whether it's a bedroom, study, or guest room, we design rooms that reflect your preferences while ensuring maximum comfort, utility, and style.",
      icon: <House fontSize="large" color="primary" />,
      img: "/Images/Interiors/room_design_3D.jpg",
    },
    {
      title: "Wet Areas Designs",
      description: "We craft practical and elegant designs for bathrooms, utility areas, and other wet spaces, focusing on waterproofing, material durability, and modern aesthetics.",
      icon: <ShowerIcon fontSize="large" color="primary" />,
      img: "/Images/Interiors/wet_area_design_3D.png",
    },
    {
      title: "Balcony Designs",
      description: "Transform your balconies into cozy retreats or stylish social spaces. We offer creative solutions for all sizes, incorporating greenery, lighting, and functional furniture.",
      icon: <BalconyIcon fontSize="large" color="primary" />,
      img: "/Images/Interiors/balcony_design_3D.png",
    }
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