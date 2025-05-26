import React from 'react';
import ContactSection from '../../components/ContactSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ProcessSection from '@/components/ProcessSection';
import PricingSection from '@/components/PricingSection';

import AssessmentIcon from '@mui/icons-material/Assessment';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ConstructionIcon from '@mui/icons-material/Construction';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PeopleIcon from '@mui/icons-material/People';
import BuildIcon from '@mui/icons-material/Build';
import ScheduleIcon from '@mui/icons-material/Schedule';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import HandymanIcon from '@mui/icons-material/Handyman';
import ChecklistIcon from '@mui/icons-material/Checklist';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

function page() {
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
            icon: <CurrencyRupeeIcon fontSize="small" />,
            // <AttachMoneyIcon fontSize="small" />,
            // description: "No hidden fees with detailed cost breakdowns"
        }
    ];

    const steps = [
        {
            label: 'Initial Consultation',
            icon: <ContactPhoneIcon />,
        },
        {
            label: 'Site Inspection & Structural Assessment',
            icon: <HomeWorkIcon />,
        },
        {
            label: 'Repair Planning & Design Vetting',
            icon: <DesignServicesIcon />,
        },
        {
            label: 'Work Execution',
            icon: <HandymanIcon />,
        },
        {
            label: 'Quality Check & Finishing',
            icon: <ChecklistIcon />,
        },
        {
            label: 'Project Handover',
            icon: <AssignmentTurnedInIcon />,
        },
    ];

    const pricingData = [
        {
            service: "Structural Assessment",
            price: "₹3 – ₹6 per sq.ft. (or ₹1500 – ₹5000 per visit for small sites)",
        },
        {
            service: "Repair Design & Vetting",
            price: "₹5 – ₹10 per sq.ft.",
        },
        {
            service: "Repair Executions",
            price: "₹20 – ₹60 per sq.ft. (varies based on damage severity and materials used)",
        },
    ];
    return (
        <div className=''>
            <div style={{ backgroundImage: 'url(/images/Repair_Renovation/Repair_renovation_banner_img.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}></div>
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
