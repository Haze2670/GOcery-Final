import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
 return (
    <div style={{backgroundImage : "none", backgroundColor: 'white'}} className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
        {/* Light Green Line */}
        <div style={{ position: 'absolute', top: '3px', left: '0', right: '0', height: '55px', backgroundColor: '#7FFF00' }}></div>
        {/* About and Product links in the upper middle */}
        <div style={{ position: 'absolute', top: '5%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', gap: '10px', justifyContent: 'center' }}>
            <Link to='/product' className="btn btn-primary btn-sm" style={{backgroundColor: 'white', color: 'black'}}>Product</Link>
            <Link to='/about' className="btn btn-secondary btn-sm" style={{backgroundColor: 'white', color: 'black'}}>About</Link>
        </div>
        <h1>Login Success Page</h1>
        {/* Logout button in the upper right corner */}
        <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
            <Link to='/login' className="btn btn-light btn-sm">Logout</Link>
        </div>
    </div>
 )
}

export default Home;
