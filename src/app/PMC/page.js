import ContactSection from '@/components/ContactSection'
import React from 'react'
import { Engineering, Build, Calculate, Checklist, MonetizationOn } from '@mui/icons-material';
import ServicesSection from '@/components/ServicesSection'
import PricingSection from '@/components/PricingSection';
import ProcessSection from '@/components/ProcessSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PeopleIcon from '@mui/icons-material/People';
import BuildIcon from '@mui/icons-material/Build';
import ScheduleIcon from '@mui/icons-material/Schedule';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import {
    LocationOn as LocationOnIcon,
    ContactMail as ContactMailIcon,
    Assessment as AssessmentIcon,
    GroupWork as GroupWorkIcon,
    Chat as ChatIcon,
    Description as DescriptionIcon
} from '@mui/icons-material';


function page() {
    const services = [
        {
            title: "Project Planning & Management",
            description: "We offer end-to-end project planning and management services to ensure your construction or renovation project runs smoothly, stays on schedule, and within budget. From initial timelines to resource allocation, we oversee every detail for successful delivery.",
            icon: <Engineering fontSize="large" color="primary" />,
            img: "/Images/Pmc/project_plan_management.jpg",
        },
        {
            title: "Construction Management",
            description: "Our construction management service ensures on-site coordination, contractor supervision, and compliance with safety and quality standards. We act as your trusted partner, ensuring each phase of construction is executed efficiently and transparently.",
            icon: <Build fontSize="large" color="primary" />,
            img: "/Images/Pmc/construction_mgmt.jpg",
        },
        {
            title: "Cost Consultancy & Quantity Survey",
            description: "We provide accurate cost estimation, budgeting, and quantity surveying to help you plan your finances wisely. Our team ensures that every rupee spent is accounted for, helping you avoid overruns and unexpected costs.",
            icon: <Calculate fontSize="large" color="primary" />,
            img: "/Images/Pmc/cost_consultancy_freepik.jpg",
        },
        {
            title: "Quality Audits",
            description: "Our quality audits focus on identifying construction flaws, material mismatches, or non-compliance with specifications. We provide clear, actionable insights to help you maintain high standards throughout your project lifecycle.",
            icon: <Checklist fontSize="large" color="primary" />,
            img: "/Images/Pmc/quality_audit.jpg",
        },
        {
            title: "Valuations",
            description: "We offer property and asset valuation services based on current market trends, structural conditions, and development potential. Whether you're buying, selling, or refinancing, our certified reports provide the clarity you need for confident decisions.",
            icon: <MonetizationOn fontSize="large" color="primary" />,
            img: "/Images/Pmc/valuation_image.jpeg",
        }
    ];

    const pricingData = [
        {
            service: "Project Planning & Management",
            price: "₹10 – ₹25 per sq.ft. (or project-based from ₹50,000 onwards)",
        },
        {
            service: "Construction Management",
            price: "₹15 – ₹30 per sq.ft. (based on scope & complexity)",
        },
        {
            service: "Cost Consultancy & Quantity Survey",
            price: "₹3 – ₹8 per sq.ft. (or lump sum for smaller projects)",
        },
        {
            service: "Quality Audits",
            price: "₹5 – ₹10 per sq.ft. (or ₹5,000 – ₹25,000 per audit)",
        },
        {
            service: "Valuations",
            price: "₹2,500 – ₹15,000 per report (depending on property type & size)",
        },
    ];

    const steps = [
        {
            label: 'Initial Discussion & Briefing',
            icon: <ContactMailIcon />,           // Represents initial contact
        },
        {
            label: 'Site Visit & Feasibility Review',
            icon: <LocationOnIcon />,            // Represents location/visit
        },
        {
            label: 'Strategic Planning & Proposal',
            icon: <AssessmentIcon />,            // Represents analysis/planning
        },
        {
            label: 'Team Coordination & Resource Planning',
            icon: <GroupWorkIcon />,             // Represents team collaboration
        },
        {
            label: 'Reporting & Communication',
            icon: <ChatIcon />,                  // Represents communication
        },
        {
            label: 'Final Review & Documentation',
            icon: <DescriptionIcon />,           // Represents documentation
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
    return (
        <div>
            <div style={{ backgroundImage: 'url(/images/Pmc/PMC_banner_image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '65vh', textAlign: 'center' }}>
                <div className='overlay' style={{ width: '100%', height: '100%', position: 'absolute', top: '35%' }}>
                    <div style={{ position: 'relative', zIndex: 1, color: '#FFF', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '2rem' }}>
                        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Project Management Consultant</h1>
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
