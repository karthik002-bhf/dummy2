import React from 'react'
import HeroSection from './components/HeroSection'
import { Container } from 'react-bootstrap'
import ServicesSection from './components/ServicesSection'
import WhyChooseUs from './components/WhyChooseUs'
import ProcessSection from './components/ProcessSection'
import PricingSection from './components/PricingSection'
import ContactSection from '../../components/ContactSection'
import Header from './components/Header'

function page() {
    return (
        <div>
            {/* <Header /> */}
            {/* <HeroSection /> */}
            <div style={{ backgroundImage: 'url(/images/repair_and_renovation_1.png)', backgroundSize: 'cover', backgroundPosition: 'center', height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}></div>
            <div className='container'>
                <ServicesSection />
                <WhyChooseUs />
                <ProcessSection />
                <PricingSection />
                <ContactSection />
            </div>
        </div>
    )
}

export default page
