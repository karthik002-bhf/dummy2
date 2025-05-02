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
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import ScienceIcon from '@mui/icons-material/Science';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import DescriptionIcon from '@mui/icons-material/Description';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

function page() {
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
            icon: <AttachMoneyIcon fontSize="small" />,
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
