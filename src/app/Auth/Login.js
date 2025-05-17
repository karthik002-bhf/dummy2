import FormikControl from '@/components/formikControls/FormikControl';
import { Form, Formik } from 'formik';
import Cookies from 'js-cookie';
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import * as Yup from 'yup';


function Login() {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);

    const initialValues = {
        email: '',
        password: ''
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
    });

    const onSubmit = (values, formik) => {
        // Simulate a login request
        console.log('Login values:', values);
        Cookies.set('auth_token', 'dummy_token', {
            expires: 10, // Expires in 10 days
        });
        setTimeout(() => {
            formik.setSubmitting(false);
            handleClose();
            // Redirect or show success message here
        }, 1000);
    };

    return (
        <div>
            <button onClick={() => setShow(true)} className='btn btn-primary'>Login</button>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                        {
                            formik => {
                                return (
                                    <Form>
                                        <div>
                                            <FormikControl control="input" type="email" label="Email" name="email" classname='form-control' divclass='py-2' />
                                        </div>
                                        <div>
                                            <FormikControl control="input" type="password" label="Password" name="password" classname='form-control' divclass='py-2' />
                                        </div>
                                        <button type='submit'>Login</button>
                                    </Form>
                                )
                            }
                        }
                    </Formik>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Login
