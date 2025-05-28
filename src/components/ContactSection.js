'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import FormikControl from './formikControls/FormikControl';
import LoadButton from './formikControls/LoadButton';

function ContactSection({ from }) {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    pincode: '',
    locality: '',
    landmark: '',
    message: ''
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('*Name is required'),
    email: Yup.string().email('Invalid email').required('*Email is required'),
    phone: Yup.string().required('*Phone number is required'),
    pincode: Yup.string().required('*Pincode is required'),
    locality: Yup.string().required('*Locality is required'),
    landmark: Yup.string().required('*Landmark is required'),
    message: Yup.string().required('*Message is required')
  });

  const onSubmit = (values, formik) => {
    console.log('Form submitted', values);
    setLoading(true);
    // formik.setSubmitting(false);

    const formData = new FormData();
    Object.entries(values).map(e => {
      formData.append(e[0], e[1]);
    })

    axios.post('http://localhost:5000/api/contact/submit', formData)
      .then((response) => {
        console.log('Response:', response.data);
        setLoading(false);
        formik.setSubmitting(false);
      })
      .catch((error) => {
        console.error('Error:', error);
      })
  }

  return (
    <div className='my-4' data-aos="fade-up">
      <h1 className='text-center'>
        Contact Us
      </h1>
      <div className='text-center mb-4' style={{ fontSize: '1rem' }}>
        Get in touch for a free consultation or to discuss your project needs
      </div>
      <div className='col-md-12 row mx-0 d-flex justify-content-center'>
        <div className={`${from == 'modal' ? '' : 'col-md-6'} card p-5 shadow-sm`}>
          <h4 className='text-center'>Send us a message</h4>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
              (formik) => {
                // console.log('Formik props:', formik);
                return (
                  <Form>
                    <FormikControl control="input" type="text" label="Your Name*" name="name" classname='form-control' divclass='py-2' />
                    <FormikControl control="input" type="email" label="Email*" name="email" classname='form-control' divclass='py-2' />
                    <FormikControl control="input" type="text" label="Phone Number*" name="phone" classname='form-control' divclass='py-2' />
                    <FormikControl control="input" type="number" label="Pincode*" name="pincode" classname='form-control' divclass='py-2' />
                    <FormikControl control="input" type="text" label="Locality*" name="locality" classname='form-control' divclass='py-2' />
                    <FormikControl control="input" type="text" label="Nearest Landmark*" name="landmark" classname='form-control' divclass='py-2' />
                    <FormikControl control="textarea" type="text" label="Message" name="message" classname='form-control' divclass='py-2' />
                    <div className='pt-4 d-flex justify-content-center'>
                      <LoadButton bname={loading ? 'Sending...' : 'Send Message'} bclass='btn-md submit_btn py-2 px-3' type='submit' isLoading={loading} />
                    </div>
                  </Form>
                )
              }
            }
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;