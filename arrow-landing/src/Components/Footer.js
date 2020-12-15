import React from 'react';
import image from '../web-logo.png';
import './Layout.css';

export default function Footer() {
    return (
        <div className="desktop-footer">
            <div className="mission-statement">
                <img className="footer-logo" src={image} alt="footer-logo" />
                <h4 className="small-header">Our Mission</h4>
                <p>Pulvinar vel lorem magna pharetra. Dolor adipiscing in tempor sodales. Vestibulum sagittis egestas ac in sit.</p>
            </div>
            <div className="copyright">
                <p>Copyright © 2020. All rights reserved. Powered by ARROW </p>
                <a href=""> Privacy Policy </a>
                {/* Link Privacy Policy page in href above */}
            </div>
        </div>
    )
}
