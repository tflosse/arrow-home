import React from 'react';
import image from '../web-logo.png';
import './Layout.css';

export default function Nav() {
    return (
        <div className="desktop-nav">
            <ul className="nav-items">
                <img className="nav-logo" src={image} alt="web-logo" />
                <li className="nav-item">Features</li>
                <li className="nav-item">Use Cases</li>
                <li className="nav-item">Pricing</li>
                <li className="nav-item">About us</li>
                <li className="nav-item">Careers</li>
            </ul>
            <div className="nav-actions">
                <button className="transparent-button" id="log-in">Log in</button>
                <button className="black-button" id="demo-request">Request a demo</button>
            </div>
        </div>
    )
};
