import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';
// import ShoppingCartIcon from './ShoppingCartIcon'; 
import OrderSummary from './OrderSummary'; 
import hamburgerImage from '../images/burger.jpeg';
import cokeImage from '../images/coke.jpeg';
import friesImage from '../images/fries.jpeg';
import pepsiImage from '../images/pepsi.jpeg';

const Screen3 = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [showOrderSummary, setShowOrderSummary] = useState(false);

  const staticItems = [
    { name: 'hamburger', image: hamburgerImage },
    { name: 'coke', image: cokeImage },
    { name: 'fries', image: friesImage },
    { name: 'pepsi', image: pepsiImage },
  ];

  const getItemCost = (item) => {
    const itemPrices = {
      hamburger: 200,
      coke: 100,
      fries: 50,
      pepsi: 50,
    };
    return itemPrices[item] || 0;
  };

  const getTotalCost = () => {
    return Object.entries(cart).reduce((total, [item, quantity]) => {
      return total + getItemCost(item) * quantity;
    }, 0);
  };

  const getTotalQuantity = () => {
    return Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  };

  const handleAddToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: { item } });
  };

  const handleShowOrderSummary = () => {
    setShowOrderSummary(true);
  };

  const handleCloseOrderSummary = () => {
    setShowOrderSummary(false);
  };

  return (
    <div className="container">
      <div className="navbar">
        <h1>Foods restaurant</h1>
        <div className="cart-icon" onClick={handleShowOrderSummary}>
          <FaShoppingCart size={30} style={{ marginLeft: 'auto' }} />
          <span className="cart-badge">{getTotalQuantity()}</span>
        </div>
      </div>
      <div className="content">
        {staticItems.map((itemData) => (
          <div className="menu-item" key={itemData.name}>
            <img src={itemData.image} alt={itemData.name} />
            <p>{itemData.name}</p>
            <p>price: {getItemCost(itemData.name)}</p>
            <p>quantity: {cart[itemData.name] || 0}</p>
            {/* <button onClick={() => handleAddToCart(itemData.name)}>Add to Cart</button> */}
          </div>
        ))}
        <p>Total Cost: {getTotalCost()}</p>
      </div>

      {showOrderSummary && (
        <OrderSummary onClose={handleCloseOrderSummary} />
      )}
    </div>
  );
};

export default Screen3;
