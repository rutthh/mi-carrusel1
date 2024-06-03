import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
return (
    <div className="home-container">
    <div className="ambar-container">
        <h1 className="ambar">Ambar</h1>
        <div className="welcome-container">
        <Link to="/carousel" className="welcome-link">
            Welcome to the art page
        </Link>
        </div>
    </div>
    </div>
);
}

export default Home;

