import React from 'react';
import ContactSection from '@/components/ContactSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ProcessSection from '@/components/ProcessSection';
import PricingSection from '@/components/PricingSection';

import { Build, Terrain } from '@mui/icons-material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PeopleIcon from '@mui/icons-material/People';
import BuildIcon from '@mui/icons-material/Build';
import ScheduleIcon from '@mui/icons-material/Schedule';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import ScienceIcon from '@mui/icons-material/Science';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import DescriptionIcon from '@mui/icons-material/Description';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

function page() {
    // Add Soil, Water, Steel, Concrete, Blocks, Bricks, Wood, Flooring Materials, Paints
    const service_description = "We offer best support in Testing of Building Materials as per Industry Standards and Codes.";
    const services = [
        {
            title: "Soil Testing",
            description: "We provide comprehensive testing of soil materials to determine their physical and chemical properties. Our tests include soil classification, compaction, moisture content, and more to ensure your construction project is built on a solid foundation.",
            icon: <Build fontSize="large" color="primary" />,
            img: "/Images/LabTest/lab_testing_soil.png",
        },
        {
            title: "Water Testing",
            description: "We provide comprehensive testing of water quality to ensure it meets safety and regulatory standards. Our tests include chemical analysis, microbiological testing, and physical assessments to guarantee safe drinking water and compliance with environmental regulations.",
            icon: <Build fontSize="large" color="primary" />,
            img: "/Images/LabTest/lab_testing_water.png",
        },
        {
            title: "Steel Testing",
            description: "We provide comprehensive testing of steel materials to determine their physical and chemical properties. Our tests include tensile strength, yield strength, and chemical composition analysis to ensure your construction project is built on a solid foundation.",
            icon: <Build fontSize="large" color="primary" />,
            img: "/Images/LabTest/lab_testing_steel.png",
        },
        {
            title: "Concrete Testing",
            description: "We provide comprehensive testing of concrete materials to determine their physical and chemical properties. Our tests include compressive strength, flexural strength, and chemical composition analysis to ensure your construction project is built on a solid foundation.",
            icon: <Build fontSize="large" color="primary" />,
            img: "/Images/LabTest/lab_testing_concrete.png",
        },
        {
            title: "Blocks Testing",
            description: "We provide comprehensive testing of block materials to determine their physical and chemical properties. Our tests include compressive strength, water absorption, and dimensional accuracy to ensure your construction project is built on a solid foundation.",
            icon: <Build fontSize="large" color="primary" />,
            img: "/Images/LabTest/lab_testing_blocks.png",
        },
        {
            title: "Bricks Testing",
            description: "We provide comprehensive testing of brick materials to determine their physical and chemical properties. Our tests include compressive strength, water absorption, and dimensional accuracy to ensure your construction project is built on a solid foundation.",
            icon: <Build fontSize="large" color="primary" />,
            img: "/Images/LabTest/lab_testing_bricks.png",
        },
        {
            title: "Wood Testing",
            description: "We provide comprehensive testing of wood materials to determine their physical and chemical properties. Our tests include moisture content, density, and chemical composition analysis to ensure your construction project is built on a solid foundation.",
            icon: <Terrain fontSize="large" color="primary" />,
            img: "/Images/LabTest/lab_testing_wood.png",
        },
        {
            title: "Flooring Materials Testing",
            description: "We provide comprehensive testing of flooring materials to determine their physical and chemical properties. Our tests include moisture content, density, and chemical composition analysis to ensure your construction project is built on a solid foundation.",
            icon: <Terrain fontSize="large" color="primary" />,
            img: "/Images/LabTest/lab_testing_flooring.png",
        },
        {
            title: "Paints Testing",
            description: "We provide comprehensive testing of paints and coatings to determine their physical and chemical properties. Our tests include adhesion, hardness, and chemical resistance analysis to ensure your construction project is built on a solid foundation.",
            icon: <Terrain fontSize="large" color="primary" />,
            img: "/Images/LabTest/lab_testing_paints.png",
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
            title: "Tailored Design Solutions",
            icon: <BuildIcon fontSize="small" />,
            // description: "Personalized repair plans for each unique structure"
        },
        {
            id: 3,
            title: "High-Quality Material Selection",
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
            icon: <CurrencyRupeeIcon fontSize="small" />
            // <AttachMoneyIcon fontSize="small" />,
            // description: "No hidden fees with detailed cost breakdowns"
        }
    ];

    const steps = [
        {
            label: 'Sample Collection & Field Inspection',
            icon: <ContactSupportIcon />,
        },
        {
            label: 'Laboratory Analysis Based on Test Requirements',
            icon: <ScienceIcon />,
        },
        {
            label: 'Data Review & Interpretation',
            icon: <AnalyticsIcon />,
        },
        {
            label: 'Report Generation with Recommendations',
            icon: <DescriptionIcon />,
        },
        {
            label: 'Follow-up Advisory (if required)',
            icon: <SupportAgentIcon />,
        }
    ];

    const pricingData = [
        {
            service: "Building Materials Testing",
            price: "₹500 – ₹5,000 per test (varies by material)",
        },
        {
            service: "Soil & Water Testing",
            price: "₹2,000 – ₹10,000 per site/sample",
        },
    ];
    return (
        <div>
            <div style={{ backgroundImage: 'url(/images/LabTest/lab_test_banner_img.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '65vh', textAlign: 'center' }}>
                <div className='overlay' style={{ width: '100%', height: '100%', position: 'absolute', top: '50%' }}>
                    <div style={{ position: 'relative', zIndex: 1, color: '#00FFFF' }}>
                        {/* <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Project Management Consultant</h1>
                        <p style={{ fontSize: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>Quality solutions for residential and commercial properties</p> */}
                    </div>
                </div>
            </div>
            <div className='container'>
                <ServicesSection services={services} service_description={service_description} />
                <WhyChooseUs features={features} />
                <ProcessSection steps={steps} />
                <PricingSection pricingData={pricingData} />
                <ContactSection />
            </div>
        </div>
    )
}

export default page
