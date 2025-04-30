import React from 'react';
import { Table } from 'react-bootstrap';

function PricingSection() {
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