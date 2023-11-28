// App.jsx

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import Screen3 from './components/Screen3';
import OrderSummary from './components/OrderSummary';
import CheckoutPage from './components/CheckoutPage';
// import Login from './components/Login';
// import Signup from './components/Signup'; // Import the Signup component

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Screen1 />} />
        <Route path="/screen2" element={<Screen2 />} />
        <Route path="/screen3" element={<Screen3 />} />
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
