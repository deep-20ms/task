
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { increment,decrement } from '../features/cart/cartSlice';
import CheckoutPage from './CheckoutPage';
import './ordersummary.css';

Modal.setAppElement('#root');

const OrderSummary = ({ onClose }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [isCheckoutOpen, setCheckoutOpen] = useState(false);

  const getItemCost = (item) => {
    const itemPrices = {
      hamburger: 200,
      coke: 100,
      fries: 50,
      pepsi: 50,
    };

    return itemPrices[item] || 0;
  };

  const getTotalCost = () => {
    return Object.entries(cart).reduce((total, [item, quantity]) => {
      return total + getItemCost(item) * quantity;
    }, 0);
  };

  const handleIncrement = (item) => {
    dispatch(increment({ item }));
  };

  const handleDecrement = (item) => {
    dispatch(decrement({ item }));
  };

  const handleCheckout = () => {
    setCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setCheckoutOpen(false);
    onClose();
  };

  return (
    <>
      <Modal
        isOpen={!isCheckoutOpen}
        onRequestClose={onClose}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            width: '400px',
            margin: 'auto',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
            background: '#fff',
          },
        }}
      >
        <div className="order-summary">
          <h2 className="summary-heading">Order Summary</h2>
          <ul className="summary-list">
            {Object.entries(cart).map(([item, quantity]) => (
              <li key={item} className="summary-item">
                <span className="item-name">{item}</span>
                <span className="item-quantity">
                  Quantity:
                  <button onClick={() => handleDecrement(item)}>-</button>
                  {quantity}
                  <button onClick={() => handleIncrement(item)}>+</button>
                </span>
                <span className="item-total">Total Price: ${getItemCost(item) * quantity}</span>
              </li>
            ))}
          </ul>
          <p className="total-cost">Total Cost: ${getTotalCost()}</p>
          <div className="button-container">
            <button onClick={handleCheckout} className="checkout-button">
              Checkout
            </button>
            <button onClick={onClose} className="cancel-button">
              Cancel
            </button>
          </div>
          <div className="back-to-home">
            <Link to="/" className="home-link">
              Back to Home
            </Link>
          </div>
        </div>
      </Modal>

      {isCheckoutOpen && <CheckoutPage onClose={handleCloseCheckout} />}
    </>
  );
};

export default OrderSummary;