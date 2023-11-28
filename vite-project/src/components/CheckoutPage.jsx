// CheckoutPage.js

import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import './checkoutpage.css'; // Import a separate CSS file for styling

Modal.setAppElement('#root');

const CheckoutPage = ({ onClose }) => {
  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
          width: '400px',
          margin: 'auto',
          padding: '30px', // Adjusted padding
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
          background: '#f8f8f8', // Light gray background
        },
      }}
    >
      <div className="checkout-page">
        <h2 className="checkout-heading">Thank you for ordering!</h2>
        <p className="checkout-text">
          Your order has been received. We appreciate your business.
        </p>
        <Link to="/" className="home-link">
          Back to Home
        </Link>
      </div>
    </Modal>
  );
};

export default CheckoutPage;
