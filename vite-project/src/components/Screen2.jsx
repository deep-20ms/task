// Screen2.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './screen2.css'; 
import hamburgerImage from '../images/burger.jpeg';
import cokeImage from '../images/coke.jpeg';
import friesImage from '../images/fries.jpeg';
import pepsiImage from '../images/pepsi.jpeg';
import { useDispatch } from 'react-redux';
import { increment, decrement } from '../features/cart/cartSlice';


const Screen2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleIncrement = (item) => {
    dispatch(increment({ item }));
    navigate('/screen3'); 
  };

  const handleDecrement = (item) => {
    dispatch(decrement({ item }));
    navigate('/screen3');
  };  
  return (
    <div className="container">
      <div className="navbar">
        <h1>Foods restaurant</h1>
      </div>
      <div className="content">
        <div className="menu-item">
          <img src={hamburgerImage} alt="Hamburger" />
          <p>Hamburger</p>
          <p>price:200</p>
          <button onClick={() => handleIncrement('hamburger')}>+</button>
          <button onClick={() => handleDecrement('hamburger')}>-</button> 
          
        </div>
        <div className="menu-item">
          <img src={cokeImage} alt="Coke" />
          <p>Coke</p>
          <p>price:100</p>
          <button onClick={() => handleIncrement('coke')}>+</button>
          <button onClick={() => handleDecrement('coke')}>-</button>


        </div>
        <div className="menu-item">
          <img src={friesImage} alt="Fries" />
          <p>Fries</p>
          <p>price:50</p>
          <button onClick={() => handleIncrement('fries')}>+</button>
          <button onClick={() => handleDecrement('fries')}>-</button>


        </div>
        <div className="menu-item">
          <img src={pepsiImage} alt="Pepsi" />
          <p>Pepsi</p>
          <p>price:50</p>
          <button onClick={() => handleIncrement('pepsi')}>+</button>
          <button onClick={() => handleDecrement('pepsi')}>-</button>
        </div>
      </div>
    </div>
  );
};

export default Screen2;
