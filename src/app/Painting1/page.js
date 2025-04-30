import React from 'react';
import { Container, Row, Col, Card, ListGroup, Table, CardBody, CardTitle, CardText, ListGroupItem, CardImg } from 'react-bootstrap';

export default function PaintingServices() {
    return (
        <Container className="my-5">
            <h1 className="text-center mb-4">Professional Painting Services</h1>

            <section>
                <h2>Service Provided</h2>
                <Row className="g-4 my-3">
                    <Col md={4}>
                        <Card>
                            <CardBody>
                                <CardImg src="/images/conceptual_design.png" alt="conceptual_design" className="img-fluid" style={{ width: '100%', height: 'auto' }} />
                                <CardTitle>Conceptual and RAL Selection Support</CardTitle>
                                <CardText>
                                    We assist clients with conceptual design and RAL color selection to ensure the perfect visual and functional outcome for every project. Our experts help choose finishes and tones that align with your aesthetic vision, brand identity, and technical requirements.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card>
                            <CardBody>
                                <CardImg src="/images/profisional_interior_painting.png" alt="profisional_interior_painting" className="img-fluid" style={{ width: '100%', height: 'auto' }} />
                                <CardTitle>Internal Painting</CardTitle>
                                <CardText>
                                    We offer professional internal painting services for living rooms, bedrooms, kitchens, and office interiors using premium-quality paints for smooth finishes, rich colors, and long-lasting durability.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card>
                            <CardBody>
                                <CardImg src="/images/expert_external painting.png" alt="expert_external painting" className="img-fluid" style={{ width: '100%', height: 'auto' }} />
                                <CardTitle>External Painting</CardTitle>
                                <CardText>
                                    Our expert external painting services protect and beautify building exteriors with weather-resistant, high-performance paints. We ensure even coverage, durable finishes, and architectural color matching.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </section>

            <section className="my-5">
                <h2>Why Choose Us</h2>
                <ListGroup className="my-3">
                    <ListGroupItem>Expertise & Experience</ListGroupItem>
                    <ListGroupItem>Customized Solutions</ListGroupItem>
                    <ListGroupItem>Guaranteed Workmanship</ListGroupItem>
                    <ListGroupItem>Timely Service</ListGroupItem>
                    <ListGroupItem>Transparent Pricing</ListGroupItem>
                </ListGroup>
            </section>

            <section className="my-5">
                <h2>Our Execution Process</h2>
                <ol className="my-3">
                    <li>Initial Consultation</li>
                    <li>Site Visit and Assessment</li>
                    <li>Quotation and Planning</li>
                    <li>Surface Preparation</li>
                    <li>Painting Execution</li>
                    <li>Final Walkthrough and Handover</li>
                </ol>
            </section>

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
                            <td>Conceptual and RAL Selection Support</td>
                            <td>₹2 – ₹5 per sq.ft.</td>
                        </tr>
                        <tr>
                            <td>Internal Painting</td>
                            <td>₹12 – ₹25 per sq.ft.</td>
                        </tr>
                        <tr>
                            <td>External Painting</td>
                            <td>₹15 – ₹30 per sq.ft.</td>
                        </tr>
                    </tbody>
                </Table>
            </section>

        </Container>
    );
}







// import React from 'react'

// function page() {
//     return (
//         <div className='container-fluid'>
//             <div className=''>
//                 <h3 className='text-center'>Service Provided</h3>
//                 <div className='col-md-12 row'>
//                     <div className='col-md-6'>
//                         <img src='/images/conceptual_design.png' alt='conceptual_design' className='img-fluid' style={{ width: '100%', height: 'auto' }} />
//                     </div>
//                     <div className='col-md-6'>
//                         <h4>Conceptual and RAL Selection Support</h4>
//                         <p className=''>We assist clients with conceptual design and RAL color selection to ensure the perfect visual and functional outcome for every project. Whether you're waterproofing, painting, or applying protective coatings, our experts help you choose finishes and color tones that align with your aesthetic vision, brand identity, and technical requirements. With guidance on texture, sheen, and shade matching using the standardized RAL color chart, we ensure your spaces look great and perform exceptionally in their environments.</p>
//                     </div>
//                 </div>
//                 <div className='col-md-12 row'>
//                     <div className='col-md-6'>
//                         <h4>Internal Painting</h4>
//                         <p className=''>We offer professional internal painting services designed to enhance the look and feel of your indoor spaces. From living rooms and bedrooms to kitchens and office interiors, we use premium-quality paints that ensure smooth finishes, rich color, and long-lasting durability. Our team helps you choose the right shades and textures to match your style, and we take care to protect your furniture and flooring during the process. Whether it's a fresh coat or a full color makeover, we deliver clean, precise, and beautiful results every time.</p>
//                     </div>
//                     <div className='col-md-6'>
//                         <img src='/images/profisional_interior_painting.png' alt='profisional_interior_painting' className='img-fluid' style={{ width: '100%', height: 'auto' }} />
//                     </div>
//                 </div>
//                 <div className='col-md-12 row'>
//                     <div className='col-md-6'>
//                         <img src='/images/expert_external painting.png' alt='expert_external painting' className='img-fluid' style={{ width: '100%', height: 'auto' }} />
//                     </div>
//                     <div className='col-md-6'>
//                         <h4>External Painting</h4>
//                         <p className=''>We provide expert external painting services to protect and beautify your building's exterior. Our team uses weather-resistant, high-performance paints that withstand harsh sun, rain, and pollution. From residential homes to commercial complexes, we ensure even coverage, durable finishes, and aesthetic appeal. We also assist in color selection to suit your architectural style and environment. Proper surface preparation, crack filling, and waterproof coatings are part of our process to ensure long-term results and curb appeal.</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default page
