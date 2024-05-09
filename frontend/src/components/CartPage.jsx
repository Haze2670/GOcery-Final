// CartPage.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './CartPage.css';

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
    // Prepare payment details
    const paymentDetails = {
       products: cartItems.map(item => ({
         name: item.name,
         price: parseFloat(item.price.replace('₱', '').replace(',', '')),
         description: item.description // Assuming each item has a 'description' property
       })),
       totalPrice: calculateTotalPrice(),
       description: "Payment for cart items" // You can customize this as needed
    };
   
    // Send payment details to the backend
    fetch('http://localhost:3001/payment', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(paymentDetails),
    })
    .then(response => response.json())
    .then(data => {
       console.log('Payment processed successfully:', data);
       // Optionally, navigate to a success page or show a success message
    })
    .catch((error) => {
       console.error('Error processing payment:', error);
       // Optionally, show an error message to the user
    });
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
      <div style={{position: 'absolute', top: '10%', left: '10%', paddingLeft: "250px"}} className="large-box">
        <h2>Cart Summary</h2>
        <div style={{paddingLeft: "15px", paddingTop:"5px"}} className="summary-items">
          {cartItems.map((item, index) => (
            <div key={index} className="summary-item">
              <div style={{paddingRight: '100px'}} className="item-details">
                <span>{item.name}</span>
                <span>Price: {item.price}</span>
              </div>
              <div className="item-image">
                <img src={item.image} alt={item.name} style={{paddingLeft: '',width: '100px', height: '100px', objectFit: 'cover'}} />
              </div>
              <hr />
            </div>
          ))}
        </div>
        <div style={{paddingLeft:"50px"}} className="total-price-container">
          <div style={{left: "50%",paddingTop:"10px", paddingBottom: "15px"}}className="total-price">Total: ₱{calculateTotalPrice()}</div>
          <button style={{width: "300px"}} o  nClick={handlePayment} className="payment-button btn btn-primary">Proceed to Payment</button>
        </div>
      </div>
    </div>
 );
};

export default CartPage;