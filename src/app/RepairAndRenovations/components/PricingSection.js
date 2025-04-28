import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function PricingSection() {
  const pricingData = [
    {
      service: "Structural Assessment",
      price: "₹3 – ₹6 per sq.ft. (or ₹1500 – ₹5000 per visit for small sites)",
    },
    {
      service: "Repair Design & Vetting",
      price: "₹5 – ₹10 per sq.ft.",
    },
    {
      service: "Repair Executions",
      price: "₹20 – ₹60 per sq.ft. (varies based on damage severity and materials used)",
    },
  ];

  return (
    // <Box id="pricing" sx={{ py: 8, bgcolor: 'background.paper' }}>
      <div className='container text-center'>
        <h1>Pricing</h1>
        <div className='mb-5'>
          Transparent and competitive pricing for all our services
        </div>

        <TableContainer component={Paper} elevation={3}>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: 'primary.main' }}>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Service Type</TableCell>
                <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>Price Range (INR/sq.ft.)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pricingData.map((row, index) => (
                <tr key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                  <TableCell component="th" scope="row">
                    {row.service}
                  </TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                </tr>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <div className='mt-4' style={{ fontSize: '0.9rem', color: '#555' }}>
          <i>* Final pricing may vary based on specific project requirements and site conditions.</i>
        </div>
      </div>
    // </Box>
  );
};

export default PricingSection;