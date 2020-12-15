import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from './Components/Nav';
import Home from './Components/Home';
import Modules from './Components/Modules';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Modules />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
