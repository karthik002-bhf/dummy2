import React from 'react';
import ContactSection from '@/components/ContactSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ProcessSection from '@/components/ProcessSection';
import PricingSection from '@/components/PricingSection';

import { ColorLens, FormatPaint, House, } from '@mui/icons-material';
import { ContactPhone, Home, Description, Build, Brush, DoneAll } from '@mui/icons-material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PeopleIcon from '@mui/icons-material/People';
import BuildIcon from '@mui/icons-material/Build';
import ScheduleIcon from '@mui/icons-material/Schedule';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

function page() {
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
            label: 'Initial Consultation',
            icon: <ContactPhone />,
        },
        {
            label: 'Site Visit & Assessment',
            icon: <Home />,
        },
        {
            label: 'Quotation and Planning',
            icon: <Description />,
        },
        {
            label: 'Surface Preaparation',
            icon: <Build />,
        },
        {
            label: 'Painting Exectuion',
            icon: <Brush />,
        },
        {
            label: 'Final Walkthrough & Handover',
            icon: <DoneAll />,
        },
    ];

    const pricingData = [
        {
            service: "Conceptual and RAL Selection Support",
            price: "₹2 – ₹5 per sq.ft.",
        },
        {
            service: "Internal Painting",
            price: "₹12 – ₹25 per sq.ft.",
        },
        {
            service: "External Painting",
            price: "₹15 – ₹30 per sq.ft.",
        },
    ];
    return (
        <div>
            <div style={{ backgroundImage: 'url(/images/Painting/painting_banner_image.JPG)', backgroundSize: 'cover', backgroundPosition: 'center', height: '65vh', textAlign: 'center' }}>
                <div className='overlay' style={{ width: '100%', height: '100%', position: 'absolute', top: '35%' }}>
                    <div style={{ position: 'relative', zIndex: 1, color: '#FFF', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '2rem' }}>
                        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Painting Services</h1>
                        {/* <p style={{ fontSize: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>Quality soluztions for residential and commercial properties</p> */}
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
