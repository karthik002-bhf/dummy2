import React, { useState } from 'react';
import { Modal, Nav } from 'react-bootstrap';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Cookies from 'js-cookie';
import FormikControl from '@/components/formikControls/FormikControl';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function AuthModal() {
    const [show, setShow] = useState(false);
    const [activeTab, setActiveTab] = useState('login');

    const [showPassword, setShowPassword] = useState(false);
    const toggleVisibility = () => {
        setShowPassword(prev => !prev);
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const loginInitialValues = {
        email: '',
        password: ''
    };

    const signupInitialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    };

    const loginValidationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
    });

    const signupValidationSchema = Yup.object().shape({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required'),
    });

    const handleLoginSubmit = (values, formik) => {
        console.log('Login values:', values);
        Cookies.set('auth_token', 'dummy_token', { expires: 10 });
        setTimeout(() => {
            formik.setSubmitting(false);
            handleClose();
            window.location.reload();
        }, 1000);
    };

    const handleSignupSubmit = (values, formik) => {
        console.log('Signup values:', values);
        // Simulate signup and set token
        Cookies.set('auth_token', 'signup_dummy_token', { expires: 10 });
        setTimeout(() => {
            formik.setSubmitting(false);
            handleClose();
        }, 1000);
    };

    return (
        <div>
            <button onClick={handleShow} className='btn btn-primary'>Login / Signup</button>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{activeTab === 'login' ? 'Login' : 'Signup'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="">
                        <div className="nav">
                            <Nav variant="pills" className="flex-row col-12 text-center" activeKey={activeTab} onSelect={(k) => { setActiveTab(k), setShowPassword(false) }}>
                                <Nav.Item className='flex-grow-1'>
                                    <Nav.Link eventKey="login">Login</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className='flex-grow-1'>
                                    <Nav.Link eventKey="signup">Signup</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                        <div className="flex-grow-1">
                            {activeTab === 'login' && (
                                <Formik initialValues={loginInitialValues} validationSchema={loginValidationSchema} onSubmit={handleLoginSubmit}>
                                    {(formik) => (
                                        <Form>
                                            <FormikControl control="input" type="email" label="Email" name="email" classname='form-control' divclass='py-2' />
                                            <FormikControl control="input" type={showPassword ? 'text' : 'password'} label="Password" name="password" classname='form-control' divclass='py-2' form_group={
                                                <div className='input-group-text p-0'>
                                                    <span
                                                        onClick={toggleVisibility}
                                                        style={{
                                                            display: 'flex',
                                                            justifyContent: 'end',
                                                            alignItems: 'center',
                                                            cursor: 'pointer',
                                                            color: '#6c757d',
                                                            margin: '10px',
                                                        }}
                                                    >
                                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                                    </span>
                                                </div>} />
                                            <button type="submit" className="btn btn-success mt-3">Login</button>
                                        </Form>
                                    )}
                                </Formik>
                            )}
                            {activeTab === 'signup' && (
                                <Formik initialValues={signupInitialValues} validationSchema={signupValidationSchema} onSubmit={handleSignupSubmit}>
                                    {(formik) => (
                                        <Form>
                                            <FormikControl control="input" type="text" label="Name" name="name" classname='form-control' divclass='py-2' />
                                            <FormikControl control="input" type="email" label="Email" name="email" classname='form-control' divclass='py-2' />
                                            <FormikControl control="input" type={showPassword ? 'text' : 'password'} label="Password" name="password" classname='form-control' divclass='py-2' />
                                            <FormikControl control="input" type={showPassword ? 'text' : 'password'} label="Confirm Password" name="confirmPassword" classname='form-control' divclass='py-2' form_group={
                                                <div className='input-group-text p-0'>
                                                    <span
                                                        onClick={toggleVisibility}
                                                        style={{
                                                            display: 'flex',
                                                            justifyContent: 'end',
                                                            alignItems: 'center',
                                                            cursor: 'pointer',
                                                            color: '#6c757d',
                                                            margin: '10px',
                                                        }}
                                                    >
                                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                                    </span>
                                                </div>} />

                                            <button type="submit" className="btn btn-primary mt-3">Signup</button>
                                        </Form>
                                    )}
                                </Formik>
                            )}
                        </div>
                    </div>
                </Modal.Body>

            </Modal>
        </div>
    );
}

export default AuthModal;
