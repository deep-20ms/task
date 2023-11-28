// Screen1.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './screen1.css'; 


const Screen1 = () => {
  const navigate = useNavigate();

  const goToMenu = () => {
    navigate('/screen2');
  };

  return (
    <div className="container">
      <div className="navbar">
        <h1>Foods restaurant</h1>
      </div>
      <div className="content">
        <h1>Welcome to food's kitchen</h1>
        <button onClick={goToMenu}>Go to menu</button>
      </div>
      
    </div>
  );
};

export default Screen1;
