import React from 'react';
import AssessmentIcon from '@mui/icons-material/Assessment';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ConstructionIcon from '@mui/icons-material/Construction';
import HandymanIcon from '@mui/icons-material/Handyman';
import { Button, Card, CardBody, CardImg, CardText, CardTitle } from 'react-bootstrap';

function ServicesSection() {

  const services = [
    {
      title: "Structural Assessment",
      description: "We begin with a detailed structural assessment to evaluate the integrity of your building. Our team inspects visible and hidden signs of damage, wear, or stress, identifying any potential safety risks or weaknesses in the structure.",
      icon: <AssessmentIcon fontSize="large" color="primary" style={{ width: "100px", height: '100px' }} />,
      img: "/Images/Repair_Renovation/structural_assessment.jpg",
    },
    {
      title: "Repair Design & Vetting",
      description: "Based on the assessment, we create a customized repair plan. This includes technical drawings, material selection, and method recommendations. We also offer third-party vetting, if needed, to ensure compliance and quality assurance.",
      icon: <EngineeringIcon fontSize="large" color="primary" style={{ width: "100px", height: '100px' }} />,
      img: "/Images/Repair_Renovation/repair_design_vetting.jpg",
    },
    {
      title: "Repair Executions",
      description: "Our skilled professionals carry out the repairs with precision and care. From minor fixes to major restorations, we use quality materials and proven techniques to restore structural strength and improve longevity.",
      icon: <ConstructionIcon fontSize="large" color="primary" style={{ width: "100px", height: '100px' }} />,
      img: "/Images/Repair_Renovation/repair_execution.jpg",
    },
    {
      title: "Post-Repair Maintenance",
      description: "We provide comprehensive maintenance plans after repairs to ensure long-term structural health. Our follow-up services help prevent future issues and maintain the integrity of your property.",
      icon: <HandymanIcon fontSize="large" color="primary" style={{ width: "100px", height: '100px' }} />,
      img: "/Images/Repair_Renovation/post_repair_maintainence.png",
    }
  ];

  return (
    <div>
      <h1 className='text-center'>Our Services</h1>
      <div className='text-center mb-5'>
        Comprehensive solutions tailored to your structural repair and renovation needs
      </div>
      <div className='d-flex justify-content-center mb-4'>
        <Button
          variant="secondary"
          size="large"
          href="#contact"
          className='d-flex justify-content-center align-items-center py-2'
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