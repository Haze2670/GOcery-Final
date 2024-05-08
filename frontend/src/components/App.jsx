import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Register from './Register';
import ProductPage from './ProductPage'; // Ensure this import path is correct
import About from './About';
import CartPage from './CartPage';


function App() {
 return (
    <div style={{ marginTop: '-3.5rem' }}>
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<ProductPage />} /> {/* Route for ProductPage */}
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<CartPage cartItems={[]} />} /> {/* Pass cartItems prop to CartPage */}
        </Routes>
      </Router>
    </div>
 );
}

export default App;
