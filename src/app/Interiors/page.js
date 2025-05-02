import React from 'react'
import ContactSection from '@/components/ContactSection'
import ServicesSection from '@/components/ServicesSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import ProcessSection from '@/components/ProcessSection'
import PricingSection from '@/components/PricingSection'

import { ColorLens, FormatPaint, House } from '@mui/icons-material';
import { ContactPhone, Home, Palette, DesignServices, Construction, AssignmentTurnedIn } from '@mui/icons-material';
import ShowerIcon from '@mui/icons-material/Shower';
import BalconyIcon from '@mui/icons-material/Balcony';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PeopleIcon from '@mui/icons-material/People';
import BuildIcon from '@mui/icons-material/Build';
import ScheduleIcon from '@mui/icons-material/Schedule';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

function page() {

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
            label: 'Initial Consultation & Requirement Gathering',
            icon: <ContactPhone />,
        },
        {
            label: 'Site Visit & Measurements',
            icon: <Home />,
        },
        {
            label: 'Conceptualization & Mood Boards',
            icon: <Palette />,
        },
        {
            label: '3D Designs & Material Finalization',
            icon: <DesignServices />,
        },
        {
            label: 'Execution & Quality Checks',
            icon: <Construction />,
        },
        {
            label: 'Final Handover',
            icon: <AssignmentTurnedIn />,
        },
    ];

    const pricingData = [
        {
            service: "Modular Kitchen Design",
            price: "₹500 – ₹2,500 per sq.ft.",
        },
        {
            service: "Living-Dining Designs",
            price: "₹300 – ₹1,200 per sq.ft.",
        },
        {
            service: "Room Designs",
            price: "₹250 – ₹1,000 per sq.ft.",
        },
        {
            service: "Wet Areas Designs",
            price: "₹400 – ₹1,500 per sq.ft.",
        },
        {
            service: "Balcony Designs",
            price: "₹300 – ₹1,000 per sq.ft.",
        },
    ];
    return (
        <div>
            <div style={{ backgroundImage: 'url(/images/Interiors/Interior_banner_img.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '65vh', textAlign: 'center' }}>
                <div className='overlay' style={{ width: '100%', height: '100%', position: 'absolute', top: '35%' }}>
                    <div style={{ position: 'relative', zIndex: 1, color: '#FFF', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '2rem' }}>
                        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Interior Design </h1>
                        {/* <p style={{ fontSize: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>Quality solutions for residential and commercial properties</p> */}
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
