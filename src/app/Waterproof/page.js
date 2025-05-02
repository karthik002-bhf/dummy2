import React from 'react'
import ContactSection from '@/components/ContactSection'
import ServicesSection from '@/components/ServicesSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import PricingSection from '@/components/PricingSection';
import ProcessSection from '@/components/ProcessSection'

import { WaterDrop, Roofing, Handyman, Restaurant } from '@mui/icons-material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PeopleIcon from '@mui/icons-material/People';
import BuildIcon from '@mui/icons-material/Build';
import ScheduleIcon from '@mui/icons-material/Schedule';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import { ContactMailOutlined, HomeRepairServiceOutlined, ReceiptOutlined, ConstructionOutlined, TaskOutlined, AssignmentTurnedInOutlined } from '@mui/icons-material';

function page() {
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

    const steps = [
        {
            label: 'Initial Enquiry',
            icon: <ContactMailOutlined />,
        },
        {
            label: 'Site Inspection',
            icon: <HomeRepairServiceOutlined />,
        },
        {
            label: 'Quote & Proposal',
            icon: <ReceiptOutlined />,
        },
        {
            label: 'Work Execution',
            icon: <ConstructionOutlined />,
        },
        {
            label: 'Quality Check',
            icon: <TaskOutlined />,
        },
        {
            label: 'Handover & Warranty',
            icon: <AssignmentTurnedInOutlined />,
        }
    ];

    const pricingData = [
        {
          service: "Acrylic Cementitious Solutions",
          price: "₹45 - ₹85",
        },
        {
          service: "Polyurethane Solutions",
          price: "₹55 - ₹110",
        },
        {
          service: "Elastomeric & Food Grade Coating Services",
          price: "₹65 - ₹125",
        },
        {
          service: "Grouting Services",
          price: "₹35 - ₹75",
        }
      ];
    return (
        <div className=''>
            {/* <HeroSection /> */}
            <div style={{ backgroundImage: 'url(/images/Waterproofing/waterproofing_banner.JPG)', backgroundSize: 'cover', backgroundPosition: 'center', height: '65vh', textAlign: 'center' }}>
                <div className='overlay' style={{ width: '100%', height: '100%', position: 'absolute', top: '35%' }}>
                    <div style={{ position: 'relative', zIndex: 1, color: '#FFF', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '2rem' }}>
                        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Waterproofing</h1>
                        {/* <p style={{ fontSize: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>We provide top-notch waterproofing solutions to protect your property from water damage.</p> */}
                    </div>
                </div>
            </div>
            <div className='container'>
                <ServicesSection services={services} />
                <WhyChooseUs features={features} />
                <ProcessSection steps={steps} />
                <PricingSection pricingData={pricingData} />
                <ContactSection />
            </div>
        </div>
    )
}

export default page
