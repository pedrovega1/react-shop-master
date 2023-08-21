import React from 'react';
import './Products.css';

const Products = ({ productItems, handleAddProduct }) => {
  return (
    <div className='products-container'>
      {productItems.map((productItem) => (
        <div key={productItem.id} className='product-card'>
          <div className='product-image-container'>
            <img
              className='product-image'
              src={productItem.image}
              alt={productItem.name}
            />
          </div>

          <h3 className='product-name'>{productItem.name}</h3>

          <div className='product-price'>${productItem.price}</div>

          <button
            className='product-add-button'
            onClick={() => handleAddProduct(productItem)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
