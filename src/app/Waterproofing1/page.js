import React from 'react'
import { Table } from 'react-bootstrap'

function Page() {
  return (
    <div className='container-fluid' style={{ backgroundImage: 'url(/images/waterproofing_banner.JPG)', backgroundSize: 'cover', backgroundPosition: 'center', height: '70vh' }}>
      <div className='overlay' style={{  top: '60%', position: 'absolute' }}>
        <div className='text-center py-5' style={{ color: '#00FFFF' }}>
          <h1>Waterproofing</h1>
          <div className='d-flex justify-content-center'>
            <p className='col-md-6'>We provide top-notch waterproofing solutions to protect your property from water damage.</p>
          </div>
        </div>
        <div className='text-center py-5'>
          <h1 className=''>Our Waterproofing Services</h1>
          <div className='col-md-12 row mx-0 d-flex justify-content-between'>
            <div className='col-md-3 bg-white p-3 my-2 mx-1'>
              <h2>Basement Waterproofing</h2>
              <p>We ensure your basement stays dry and free from moisture.</p>
            </div>
            <div className='col-md-3 bg-white p-3 my-2'>
              <h2>Roof Waterproofing</h2>
              <p>Protect your roof from leaks and water damage.</p>
            </div>
            <div className='col-md-3 bg-white p-3 my-2'>
              <h2>Bathroom & Kitchen Waterproofing</h2>
              <p>Prevent water damage in your bathrooms with our expert solutions.</p>
            </div>
            <div className='col-md-3 bg-white p-3 my-2'>
              <h2>Terrace & Balcony Waterproofing</h2>
              <p>Keep your balconies safe from water damage.</p>
            </div>
            <div className='col-md-3 bg-white p-3 my-2'>
              <h2>External Wall & Foundation Waterproofing</h2>
              <p>Keep your foundation safe from water intrusion.</p>
            </div>
            {/* <div className='col-md-3 bg-white p-3 my-2'>
            <h2>Swimming Pool Waterproofing</h2>
            <p>Ensure your pool remains leak-free and safe.</p>
          </div> */}
            <div className='col-md-3 bg-white p-3 my-2'>
              <h2>Crack Filling & Groutings</h2>
              <p>We prevent the water leaks from wall cracks and grouting use high-quality membranes for effective waterproofing.</p>
            </div>
          </div>
        </div>
        <div className='text-center py-5 bg-light'>
          <h5>Why Choose Us ?</h5>
          <div className='text-center py-5'>
            <div className='col-md-12 row d-flex justify-content-between'>
              <div className='col-md-3 p-3 my-2'>
                <h2>Expertise & Expertise</h2>
                <p>Our team has years of experience in waterproofing solutions.</p>
              </div>
              <div className='col-md-3 p-3 my-2'>
                <h2>Quality Materials</h2>
                <p>We use only the best materials for long-lasting results.</p>
              </div>
              <div className='col-md-3 p-3 my-2'>
                <h2>Customer Satisfaction</h2>
                <p>Your satisfaction is our top priority.</p>
              </div>
              <div className='col-md-3 p-3 my-2'>
                <h2>Affordable Pricing</h2>
                <p>We offer competitive pricing without compromising on quality.</p>
              </div>
              <div className='col-md-3 p-3 my-2'>
                <h2>Warranty</h2>
                <p>We provide warranties on our waterproofing services.</p>
              </div>
              <div className='col-md-3 p-3 my-2'>
                <h2>Free Consultation</h2>
                <p>Contact us for a free consultation and estimate.</p>
              </div>
              <div className='col-md-3 p-3 my-2'>
                <h2>24/7 Support</h2>
                <p>We are here to assist you anytime.</p>
              </div>
              <div className='col-md-3 p-3 my-2'>
                <h2>Eco-Friendly Solutions</h2>
                <p>We use eco-friendly materials and methods.</p>
              </div>
              <div className='col-md-3 p-3 my-2'>
                <h2>Licensed & Insured</h2>
                <p>We are a licensed and insured waterproofing company.</p>
              </div>
              <div className='col-md-3 p-3 my-2'>
                <h2>Timely Completion</h2>
                <p>We complete our projects on time and within budget.</p>
              </div>
              <div className='col-md-3 p-3 my-2'>
                <h2>Customized Solutions</h2>
                <p>We provide customized waterproofing solutions to meet your needs.</p>
              </div>
              <div className='col-md-3 p-3 my-2'>
                <h2>Advanced Technology</h2>
                <p>We use the latest technology for effective waterproofing.</p>
              </div>
              <div className='col-md-3 p-3 my-2'>
                <h2>Transparent Pricing</h2>
                <p> No hidden charges, just honest pricing.</p>
              </div>
              <div className='col-md-3 p-3 my-2'>
                <h2>Safety First</h2>
                <p>We prioritize safety in all our projects.</p>
              </div>
              <div className='col-md-3 p-3 my-2'>
                <h2>Comprehensive Services</h2>
                <p>We offer a wide range of waterproofing services.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='text-center py-5'>
          <h4 className='fw-bold'>Our Execution Process</h4>
          <div className='col-md-12 row d-flex justify-content-between'>
            <div className='col-md-3 p-3 my-2'>
              <h2>Initial Enquiry</h2>
              <p>Reach out to us via the enquiry form or call.</p>
            </div>
            <div className='col-md-3 p-3 my-2'>
              <h2>Inspection</h2>
              <p>We inspect your property to identify waterproofing needs.</p>
            </div>
            <div className='col-md-3 p-3 my-2'>
              <h2>Planning</h2>
              <p>We create a customized waterproofing plan for your property.</p>
            </div>
            <div className='col-md-3 p-3 my-2'>
              <h2>Execution</h2>
              <p>Our team executes the waterproofing plan with precision.</p>
            </div>
            <div className='col-md-3 p-3 my-2'>
              <h2>Quality Check</h2>
              <p>We conduct a thorough quality check after completion.</p>
            </div>
            <div className='col-md-3 p-3 my-2'>
              <h2>Follow-Up</h2>
              <p>We follow up to ensure your satisfaction with our services.</p>
            </div>
            <div className='col-md-3 p-3 my-2'>
              <h2>Feedback</h2>
              <p>We value your feedback to improve our services.</p>
            </div>
            <div className='col-md-3 p-3 my-2'>
              <h2>Warranty</h2>
              <p>We provide a warranty for our waterproofing services.</p>
            </div>
            <div className='col-md-3 p-3 my-2'>
              <h2>Maintenance</h2>
              <p>We offer maintenance services to keep your property waterproof.</p>
            </div>
            <div className='col-md-3 p-3 my-2'>
              <h2>Emergency Services</h2>
              <p>We provide emergency waterproofing services when needed.</p>
            </div>
            <div className='col-md-3 p-3 my-2'>
              <h2>Documentation</h2>
              <p>We provide documentation of the work done for your records.</p>
            </div>
          </div>
        </div>
        <section className="my-5">
          <h2>Rate Ranges</h2>
          <Table striped bordered hover className="my-3">
            <thead>
              <tr>
                <th>Service Type</th>
                <th>Price Range (INR/sq.ft.)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Acrylic Cementitious Solutions</td>
                <td>₹45 - ₹85 per sq.ft.</td>
              </tr>
              <tr>
                <td>Polyurethane Solutions</td>
                <td>₹55 - ₹110 per sq.ft.</td>
              </tr>
              <tr>
                <td>Elastomeric & Food Grade Coating Services</td>
                <td>₹65 - ₹125 per sq.ft.</td>
              </tr>
              <tr>
                <td>Grouting Services</td>
                <td>₹35 - ₹75 per sq.ft.</td>
              </tr>
            </tbody>
          </Table>
        </section>
      </div>
    </div>
  )
}

export default Page
