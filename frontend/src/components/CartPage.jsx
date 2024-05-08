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
      <div style={{backgroundColor: "#00b106"}} className="page-header">
        <button onClick={handleBack} className="btn btn-light back-button">Back</button>
      </div>
{/*
      <div style={{position: 'absolute', top: '50%'}} className="cart-items-container">
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <div className="item-box">
              <span>{item.name}</span>
              <span>{item.price}</span>
            </div>
          </div>
        ))}
      </div>
*/}
      <div style={{position: 'absolute', top: '10%', left: '5%'}} className="large-box">
        <h2>Cart Summary</h2>
        <div style={{paddingTop:"5px"}} className="summary-items">
          {cartItems.map((item, index) => (
            <div style={{paddingTop:"5px"}} key={index} className="summary-item">
              <span>{item.name}</span>
              <span>{item.price}</span>
            </div>
          ))}
        </div>
        <div className="total-price-container">
          <div style={{paddingTop:"10px", paddingBottom: "15px"}}className="total-price">Total: ₱{calculateTotalPrice()}</div>
          <button onClick={handlePayment} className="payment-button btn btn-primary">Proceed to Payment</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
