import React from 'react';
import { WaterDrop, Roofing, Handyman, Restaurant } from '@mui/icons-material';
import { Button, Card, CardBody, CardImg, CardText, CardTitle } from 'react-bootstrap';

function ServicesSection() {

  const services = [
    {
      title: "Acrylic Cementitious Solutions",
      description: "Acrylic cementitious waterproofing solutions are a blend of polymer-modified cement and acrylic additives. They form a flexible, durable coating that adheres well to concrete and masonry surfaces. Ideal for wet areas like bathrooms, terraces, and water tanks, this solution provides excellent protection against water penetration, cracks, and weather damage while allowing the surface to breathe. It's easy to apply and is resistant to UV rays and efflorescence.",
      icon: <WaterDrop fontSize="large" color="primary" />,
      img: "/Images/Waterproofing/acrylic_cementitious_solution.png",
    },
    {
      title: "Polyurethane (PU) Solutions",
      description: "We provide Polyurethane (PU) waterproofing solutions that offer superior flexibility, seamless protection, and long-lasting durability. Ideal for surfaces prone to movement or heavy exposure to the elements—such as terraces, roofs, and balconies—our PU applications create a tough, elastic membrane that resists water, UV rays, and chemicals. Whether it's a residential or commercial property, our expertly applied PU coating ensures strong adhesion and reliable leak-proof performance even in the most demanding conditions.",
      icon: <Roofing fontSize="large" color="primary" />,
      img: "/Images/Waterproofing/polyurethane_solutions_from_advanced-chemsitry.jpg",
    },
    {
      title: "Elastomeric and Food Grade Coating Services",
      description: "We offer Elastomeric and Food Grade Coating services tailored for specialized environments. Our elastomeric coatings are flexible, breathable membranes designed to bridge cracks and protect exterior walls and roofs from water, UV, and weather damage. For food-grade areas, we use certified coatings that are safe, hygienic, and compliant with industry standards, ideal for food processing zones, commercial kitchens, and water tanks. These coatings provide a seamless, non-toxic, and easy-to-clean surface, ensuring long-term durability and safety in sensitive applications.",
      icon: <Restaurant fontSize="large" color="primary" />,
      img: "/Images/Waterproofing/Elastomeric_and_Food_Grade_Coating_Services.png",
    },
    {
      title: "Grouting Services",
      description: "We provide professional grouting services to fill and seal cracks, gaps, or joints in concrete, tiles, and masonry structures. Our solutions are ideal for water seepage issues, structural repairs, and surface reinforcement. Whether it’s pressure grouting, cementitious grouting, or chemical injection grouting, we use high-quality materials and precise techniques to restore structural integrity and prevent water ingress. Common applications include basements, water tanks, tiled surfaces, and foundation cracks. Our team ensures clean, durable, and effective results tailored to your site’s needs.",
      icon: <Handyman fontSize="large" color="primary" />,
      img: "/Images/Waterproofing/grouting_service_from_i.pinimg.jpg",
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