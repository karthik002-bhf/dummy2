import React from 'react';
import { Table } from 'react-bootstrap';

function PricingSection() {
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

  return (
    <div className='text-center'>
      <h1>Pricing</h1>
      <div className='mb-4'>Transparent and competitive pricing for all our services</div>

      <Table striped bordered hover responsive>
        <thead className="">
          <tr className='my-5'>
            <th className='text-left'>Service Type</th>
            <th>Price Range (INR/sq.ft.)</th>
          </tr>
        </thead>
        <tbody>
          {pricingData.map((row, index) => (
            <tr key={index}>
              <td>{row.service}</td>
              <td>{row.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className='mt-2' style={{ fontSize: '0.9rem', color: '#555' }}>
        <i>* Final pricing may vary based on specific project requirements and site conditions.</i>
      </div>
    </div>
  );
};

export default PricingSection;