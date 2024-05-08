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
              <img src={item.image} alt={`Product ${index + 1}`} className="cart-item-image" />
              <span>{item.name}</span>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handlePayment} className="btn btn-primary payment-button">Proceed to Payment</button>
    </div>
  );
};

export default CartPage;
