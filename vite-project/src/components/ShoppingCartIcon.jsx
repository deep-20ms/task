import React from 'react';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';

const ShoppingCartIcon = () => {
  const cart = useSelector((state) => state.cart);
  const totalItems = Object.values(cart).reduce((acc, quantity) => acc + quantity, 0);

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent:"space-between" }}>
      <FaShoppingCart size={30} />
      <span style={{ marginLeft: '5px' }}>{totalItems}</span>
    </div>
  );
};

export default ShoppingCartIcon;
