import React from 'react';
import './Cart.css';

const Cart = ({
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClearance,
}) => {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  return (
    <div className='cart-container'>
      <h2 className='cart-header'>Cart Items</h2>
      <div className='clear-cart'>
        {cartItems.length >= 1 && (
          <button className='clear-cart-button' onClick={handleCartClearance}>
            Clear Cart
          </button>
        )}
      </div>

      {cartItems.length === 0 && (
        <div className='cart-empty-message'>No items have been added.</div>
      )}

      <div className='cart-list'>
        {cartItems.map((item) => (
          <div key={item.id} className='cart-item'>
            <img
              className='cart-item-image'
              src={item.image}
              alt={item.name}
            />
            <div className='cart-item-details'>
              <div className='cart-item-name'>{item.name}</div>

              <div className='cart-item-buttons'>
                <button
                  className='cart-item-button add-button'
                  onClick={() => handleAddProduct(item)}
                >
                  +
                </button>

                <button
                  className='cart-item-button remove-button'
                  onClick={() => handleRemoveProduct(item)}
                >
                  -
                </button>
              </div>

              <div className='cart-item-price'>
                {item.quantity} * {item.price}$
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='cart-total'>
        Total Price:
        <div className='cart-total-price'>{totalPrice}$</div>
      </div>
    </div>
  );
};

export default Cart;
