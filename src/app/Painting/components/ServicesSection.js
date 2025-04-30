import React from 'react';
import { ColorLens, FormatPaint, House, } from '@mui/icons-material';
import { Button, Card, CardBody, CardImg, CardText, CardTitle } from 'react-bootstrap';

function ServicesSection() {

  const services = [
    {
      title: "Conceptual and RAL Selection Support",
      description: "We assist clients with conceptual design and RAL color selection to ensure the perfect visual and functional outcome for every project. Whether you're waterproofing, painting, or applying protective coatings, our experts help you choose finishes and color tones that align with your aesthetic vision, brand identity, and technical requirements. With guidance on texture, sheen, and shade matching using the standardized RAL color chart, we ensure your spaces look great and perform exceptionally in their environments.",
      icon: <ColorLens fontSize="large" color="primary" />,
      img: "/Images/Painting/conceptual_design.png",
    },
    {
      title: "Internal Painting",
      description: "We offer professional internal painting services designed to enhance the look and feel of your indoor spaces. From living rooms and bedrooms to kitchens and office interiors, we use premium-quality paints that ensure smooth finishes, rich color, and long-lasting durability. Our team helps you choose the right shades and textures to match your style, and we take care to protect your furniture and flooring during the process. Whether it’s a fresh coat or a full color makeover, we deliver clean, precise, and beautiful results every time.",
      icon: <FormatPaint fontSize="large" color="primary" />,
      img: "/Images/Painting/profisional_interior_painting.png",
    },
    {
      title: "External Painting",
      description: "We provide expert external painting services to protect and beautify your building’s exterior. Our team uses weather-resistant, high-performance paints that withstand harsh sun, rain, and pollution. From residential homes to commercial complexes, we ensure even coverage, durable finishes, and aesthetic appeal. We also assist in color selection to suit your architectural style and environment. Proper surface preparation, crack filling, and waterproof coatings are part of our process to ensure long-term results and curb appeal.",
      icon: <House fontSize="large" color="primary" />,
      img: "/Images/Painting/expert_external painting.png",
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