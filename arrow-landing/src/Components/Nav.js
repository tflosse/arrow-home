import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from '../web-logo.png';
import './Layout.css';


// Nav items are not responsive (not linked yet)
// Styled for desktop, did not have mobile wireframe
// Will add hamburger menu code 
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

// const [nav, setNav] = useState("hidden");

// const handleToggle = () => {
//   if (nav === "hidden") {
//       setNav("shown")
//   } else setNav("hidden")
// };

// Will collapse the mobile menu once a choice has been selected (needs to go in li or Link as an onclick function)
// const handleChoice = (event) => {
//   setNav("hidden")
// }

// <div onClick={handleToggle}>
// <span className="material-icons" id="Mobile-Menu">
//     {nav === "hidden" ? "menu" : "close"}
// </span>
// </div>


