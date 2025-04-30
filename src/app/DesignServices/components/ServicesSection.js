import React from 'react';
import { Button, Card, CardBody, CardImg, CardText, CardTitle } from 'react-bootstrap';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';


function ServicesSection() {

  const services = [
    {
      title: "Architecture",
      description: "We offer complete architectural design solutions that balance innovation, sustainability, and functionality. Our team collaborates closely with you to bring your vision to life, from concept to construction drawings.",
      icon: <ArchitectureIcon fontSize="large" color="primary" />,
      img: "/Images/DesignServices/architecture_design_freepik.jpg",
    },
    {
      title: "2D Plans",
      description: "Our detailed 2D plans provide accurate layouts, measurements, and technical specifications essential for construction, ensuring a seamless transition from paper to project.",
      icon: <DesignServicesIcon fontSize="large" color="primary" />,
      img: "/Images/DesignServices/2D_plan_pixabay.jpg",
    },
    {
      title: "3D Elevations",
      description: "We create stunning 3D elevation designs that give a realistic view of your project before execution, helping you visualize aesthetics, materials, and structures.",
      icon: <ThreeDRotationIcon fontSize="large" color="primary" />,
      img: "/Images/DesignServices/3D_plan_vectezy.jpg",
    },
    {
      title: "Structural Design",
      description: "Our structural design services ensure your building’s safety, strength, and longevity. We integrate engineering principles to deliver solid foundations, frameworks, and support systems.",
      icon: <EngineeringIcon fontSize="large" color="primary" />,
      img: "/Images/DesignServices/structural_design_gemini.png",
    },
    {
      title: "Vastu Support",
      description: "For clients seeking harmony and positive energy, we offer Vastu-compliant design support. We incorporate Vastu principles into modern layouts without compromising style or functionality.",
      icon: <SelfImprovementIcon fontSize="large" color="primary" />,
      img: "/Images/DesignServices/vastu_support_gemini.png",
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