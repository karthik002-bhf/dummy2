import Cookies from 'js-cookie';
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';

function Logout() {
  const [show, setShow] = useState(false);

  const handleLogout = () => {
    Cookies.remove('auth_token')
    setShow(false)
    window.location.href = '/';
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <button onClick={handleShow} className='btn btn-primary'>Logout</button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to logout?</p>
          <div className='d-flex justify-content-between'>
            <button onClick={handleClose} className='btn btn-secondary'>Cancel</button>
            <button onClick={handleLogout} className='btn btn-danger'>Logout</button>
          </div>
        </Modal.Body>

      </Modal>
    </div>
  )
}

export default Logout
