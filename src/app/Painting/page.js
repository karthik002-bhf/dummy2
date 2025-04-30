import React from 'react'
import ServicesSection from './components/ServicesSection'
import WhyChooseUs from './components/WhyChooseUs'
import ProcessSection from './components/ProcessSection'
import PricingSection from './components/PricingSection'
import ContactSection from '@/components/ContactSection'

function page() {
    return (
        <div>
            <div style={{ backgroundImage: 'url(/images/Painting/painting_banner_image.JPG)', backgroundSize: 'cover', backgroundPosition: 'center', height: '65vh', textAlign: 'center' }}>
                <div className='overlay' style={{ width: '100%', height: '100%', position: 'absolute', top: '50%' }}>
                    <div style={{ position: 'relative', zIndex: 1, color: '#00FFFF' }}>
                        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Painting Services</h1>
                        <p style={{ fontSize: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>Quality solutions for residential and commercial properties</p>
                    </div>
                </div>
            </div>
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
