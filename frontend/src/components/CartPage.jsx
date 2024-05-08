// CartPage.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CartPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cartItems = location.state?.cartItems || [];

  const handleBack = () => {
    navigate('/product'); // Navigate back to the ProductPage
  };

  const calculateTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += parseFloat(item.price.replace('₱', '').replace(',', ''));
    });
    return total.toFixed(2);
  };

  const handlePayment = () => {
    // Handle payment logic here
    console.log('Processing payment...');
  };

  return (
    <div className="cart-page">
      <div className="page-header">
        <button onClick={handleBack} className="btn btn-light back-button">Back</button>
      </div>
      <div className="cart-items-container">
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <div className="item-box">
              {/* Removed image */}
              <span>{item.name}</span>
              <span>{item.price}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="large-box">
        <h2>Cart Summary</h2>
        <div className="summary-items">
          {cartItems.map((item, index) => (
            <div key={index} className="summary-item">
              <span>{item.name}</span>
              <span>{item.price}</span>
            </div>
          ))}
        </div>
        <div className="total-price-container">
          <div className="total-price">Total: ₱{calculateTotalPrice()}</div>
          <button onClick={handlePayment} className="btn btn-primary payment-button">Proceed to Payment</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
