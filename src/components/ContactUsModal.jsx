import React from 'react';

const ContactUsModal = ({ show, handleClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal" style={{
      display: 'block',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 1000
    }}>
      <div className="modal-dialog" style={{ marginTop: '10%' }}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Contact Us for Payment</h5>
            <button type="button" className="btn-close" onClick={handleClose}></button>
          </div>
          <div id="text" className="modal-body">
            <p>For payment, please contact us at:</p>
            <p>Email: E-Commerce Store@shopping.com</p>
            <p>Phone: +91 9876543210</p>
          </div>
          <div className="modal-footer">
            <button type="button" id="btn" className="btn btn-secondary" onClick={handleClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsModal;