import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from './Components/Layout';
import './App.css';


function App() {
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
