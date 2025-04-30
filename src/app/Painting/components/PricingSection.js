import React from 'react';
import { Table } from 'react-bootstrap';

function PricingSection() {
  const pricingData = [
    {
      service: "Conceptual and RAL Selection Support",
      price: "₹2 – ₹5 per sq.ft.",
    },
    {
      service: "Internal Painting",
      price: "₹12 – ₹25 per sq.ft.",
    },
    {
      service: "External Painting",
      price: "₹15 – ₹30 per sq.ft.",
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