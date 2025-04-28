import React from 'react'
import HeroSection from './components/HeroSection'
import { Container } from 'react-bootstrap'
import ServicesSection from './components/ServicesSection'
import WhyChooseUs from './components/WhyChooseUs'
import ProcessSection from './components/ProcessSection'
import PricingSection from './components/PricingSection'
import ContactSection from './components/ContactSection'
import Header from './components/Header'

function page() {
    return (
        <div>
            {/* <Header /> */}
            <HeroSection />
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
