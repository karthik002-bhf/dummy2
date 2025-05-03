import React from 'react'
import ContactSection from '@/components/ContactSection'
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ProcessSection from '@/components/ProcessSection';
import PricingSection from '@/components/PricingSection';


import ArchitectureIcon from '@mui/icons-material/Architecture';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PeopleIcon from '@mui/icons-material/People';
import BuildIcon from '@mui/icons-material/Build';
import ScheduleIcon from '@mui/icons-material/Schedule';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import DrawIcon from '@mui/icons-material/Draw';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Button } from 'react-bootstrap';

function page() {
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
            label: 'Understanding Client Requirements',
            icon: <RecordVoiceOverIcon />,
        },
        {
            label: 'Concept Development & Drafts',
            icon: <DrawIcon />,
        },
        {
            label: 'Design Iterations & Finalization',
            icon: <AutoFixHighIcon />,
        },
        {
            label: 'Structural Analysis & Detailing',
            icon: <EngineeringIcon />,
        },
        {
            label: 'Vastu Compliance Review (if required)',
            icon: <SelfImprovementIcon />,
        },
        {
            label: 'Final Design Handover',
            icon: <TaskAltIcon />,
        }
    ];

    const pricingData = [
        {
            service: "Architecture",
            price: "₹30,000 – ₹2,00,000 per project (depending on scope)",
        },
        {
            service: "2D Plans",
            price: "₹10 – ₹20 per sq.ft.",
        },
        {
            service: "3D Elevations",
            price: "₹5,000 – ₹25,000 per elevation",
        },
        {
            service: "Structural Design",
            price: "₹8 – ₹15 per sq.ft.",
        },
        {
            service: "Vastu Support",
            price: "₹5,000 – ₹15,000 (project-based)",
        },
    ];
    return (
        <div>
            <div style={{ backgroundImage: 'url(/images/DesignServices/Design_services_banner_img.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '40vh', textAlign: 'center' }}>
                <div className='overlay' style={{ width: '100%', height: '100%', position: 'absolute', top: '15%' }}>
                    <div style={{ position: 'relative', zIndex: 1, color: '#FFF', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '2rem' }}>
                        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Design Services</h1>
                        {/* <p style={{ fontSize: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>Quality solutions for residential and commercial properties</p> */}
                    </div>
                </div>
                <div className='d-flex justify-content-center align-items-center' style={{ position: 'absolute', top: '40%', right: '2%' }}>
                    <Button
                        variant="secondary"
                        size="large"
                        href="#contact"
                        className=' py-2 my-2 font20' style={{ zIndex: 1, backgroundColor: '#b13fbc', color: '#fff', border: 'none' }}
                    >
                        Get a Free Consultation
                    </Button>
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
