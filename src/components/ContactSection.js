'use client'
import React, { useState } from 'react';
import { Box, TextField, Button, Stack, CircularProgress, Alert, Snackbar } from '@mui/material';
import axios from 'axios';

function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleSubmit = async (e) => {
    console.log('Form submitted', e);
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value.trim(),
      email: e.target.email.value.trim(),
      phone: e.target.phone.value.trim(),
      pincode: e.target.message.value.trim(),
      locality: e.target.name.value.trim(),
      landmark: e.target.email.value.trim(),
      message: e.target.message.value.trim(),
    };

    console.log('Form data:', formData);

    axios.post('http://localhost:5000/api/contact/submit', formData)
      .then((response) => {
        console.log('Response:', response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      })

    // try {
    //   const response = await fetch('http://localhost:5000/api/contact/submit', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   const data = await response.json();

    //   if (response.ok) {
    //     setSnackbarMessage('Message sent successfully!');
    //     setSnackbarSeverity('success');
    //     e.target.reset();
    //   } else {
    //     throw new Error(data.message || 'Failed to send message');
    //   }
    // } catch (error) {
    //   console.error('Error:', error);
    //   setSnackbarMessage(error.message || 'An error occurred. Please try again.');
    //   setSnackbarSeverity('error');
    // } finally {
    //   setLoading(false);
    //   setOpenSnackbar(true);
    // }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box id="contact" sx={{ py: 4, bgcolor: 'background.paper' }}>
      <div className='container'>
        <h1 className='text-center'>
          Contact Us
        </h1>
        <div className='text-center mb-4' style={{ fontSize: '1rem' }}>
          Get in touch for a free consultation or to discuss your project needs
        </div>
        <div className='col-md-12 row d-flex justify-content-center'>
          <div className='col-md-6 card p-5 shadow-sm'>
            <h4>Send us a message</h4>
            <form onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <TextField
                  name="name"
                  required
                  fullWidth
                  label="Your Name"
                  variant="standard"
                  disabled={loading}
                  sx={{
                    '& .MuiInput-underline:before': { borderBottomColor: 'divider' },
                    '& .MuiInput-underline:after': { borderBottomColor: 'primary.main' }
                  }}
                />

                <TextField
                  name="email"
                  required
                  fullWidth
                  label="Email Address"
                  variant="standard"
                  type="email"
                  disabled={loading}
                  sx={{
                    '& .MuiInput-underline:before': { borderBottomColor: 'divider' },
                    '& .MuiInput-underline:after': { borderBottomColor: 'primary.main' }
                  }}
                />

                <TextField
                  name="phone"
                  required
                  fullWidth
                  label="Phone Number"
                  variant="standard"
                  disabled={loading}
                  sx={{
                    '& .MuiInput-underline:before': { borderBottomColor: 'divider' },
                    '& .MuiInput-underline:after': { borderBottomColor: 'primary.main' }
                  }}
                />

                <TextField
                  name="pincode"
                  required
                  fullWidth
                  label="Pincode"
                  variant="standard"
                  disabled={loading}
                  sx={{
                    '& .MuiInput-underline:before': { borderBottomColor: 'divider' },
                    '& .MuiInput-underline:after': { borderBottomColor: 'primary.main' }
                  }}
                />

                <TextField
                  name="locality"
                  required
                  fullWidth
                  label="Locality"
                  variant="standard"
                  disabled={loading}
                  sx={{
                    '& .MuiInput-underline:before': { borderBottomColor: 'divider' },
                    '& .MuiInput-underline:after': { borderBottomColor: 'primary.main' }
                  }}
                />

                <TextField
                  name="landmark"
                  required
                  fullWidth
                  label="Nearest Landmark"
                  variant="standard"
                  disabled={loading}
                  sx={{
                    '& .MuiInput-underline:before': { borderBottomColor: 'divider' },
                    '& .MuiInput-underline:after': { borderBottomColor: 'primary.main' }
                  }}
                />

                <TextField
                  name="message"
                  required
                  fullWidth
                  label="Message"
                  variant="standard"
                  multiline
                  rows={4}
                  disabled={loading}
                  sx={{
                    '& .MuiInput-underline:before': { borderBottomColor: 'divider' },
                    '& .MuiInput-underline:after': { borderBottomColor: 'primary.main' },
                    '& .MuiInputBase-root': { alignItems: 'flex-start' }
                  }}
                />
                <Box sx={{ pt: 2 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    disabled={loading}
                    endIcon={loading ? <CircularProgress size={24} /> : null}
                    sx={{ mt: 2 }}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                </Box>
              </Stack>
            </form>
          </div>
        </div>
      </div>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactSection;