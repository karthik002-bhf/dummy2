import React from 'react';
import { Engineering, Build, Calculate, Checklist, MonetizationOn } from '@mui/icons-material';
import { Button, Card, CardBody, CardImg, CardText, CardTitle } from 'react-bootstrap';

function ServicesSection() {

  const services = [
    {
      title: "Project Planning & Management",
      description: "We offer end-to-end project planning and management services to ensure your construction or renovation project runs smoothly, stays on schedule, and within budget. From initial timelines to resource allocation, we oversee every detail for successful delivery.",
      icon: <Engineering fontSize="large" color="primary" />,
      img: "/Images/Pmc/project_plan_management.jpg",
    },
    {
      title: "Construction Management",
      description: "Our construction management service ensures on-site coordination, contractor supervision, and compliance with safety and quality standards. We act as your trusted partner, ensuring each phase of construction is executed efficiently and transparently.",
      icon: <Build fontSize="large" color="primary" />,
      img: "/Images/Pmc/construction_mgmt.jpg",
    },
    {
      title: "Cost Consultancy & Quantity Survey",
      description: "We provide accurate cost estimation, budgeting, and quantity surveying to help you plan your finances wisely. Our team ensures that every rupee spent is accounted for, helping you avoid overruns and unexpected costs.",
      icon: <Calculate fontSize="large" color="primary" />,
      img: "/Images/Pmc/cost_consultancy_freepik.jpg",
    },
    {
      title: "Quality Audits",
      description: "Our quality audits focus on identifying construction flaws, material mismatches, or non-compliance with specifications. We provide clear, actionable insights to help you maintain high standards throughout your project lifecycle.",
      icon: <Checklist fontSize="large" color="primary" />,
      img: "/Images/Pmc/quality_audit.jpg",
    },
    {
      title: "Valuations",
      description: "We offer property and asset valuation services based on current market trends, structural conditions, and development potential. Whether you're buying, selling, or refinancing, our certified reports provide the clarity you need for confident decisions.",
      icon: <MonetizationOn fontSize="large" color="primary" />,
      img: "/Images/Pmc/valuation_image.jpeg",
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