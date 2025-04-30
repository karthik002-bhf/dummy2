import React from 'react';
import { Table } from 'react-bootstrap';

function PricingSection() {
  const pricingData = [
    {
      service: "Modular Kitchen Design",
      price: "₹500 – ₹2,500 per sq.ft.",
    },
    {
      service: "Living-Dining Designs",
      price: "₹300 – ₹1,200 per sq.ft.",
    },
    {
      service: "Room Designs",
      price: "₹250 – ₹1,000 per sq.ft.",
    },
    {
      service: "Wet Areas Designs",
      price: "₹400 – ₹1,500 per sq.ft.",
    },
    {
      service: "Balcony Designs",
      price: "₹300 – ₹1,000 per sq.ft.",
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