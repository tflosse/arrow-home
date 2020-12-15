import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import './Layout.css';

const Layout = (props) => {
    return (
        <div>
            <Nav />
            <div className="Layout-container">
                {props.children}
            </div>
            <Footer />
        </div>
    )
};
export default Layout;
