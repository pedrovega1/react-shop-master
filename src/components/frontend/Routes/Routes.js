import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import Products from '../Products/Products';
import Signup from '../SignUp/Signup';
import Cart from '../Cart/Cart';
// export 'Switch' (imported as 'Switch') was not found in 'react-router-dom'
// если выдается такая ошибка, это надо читать документацию новой 6 версии

// В новой, 6й версии кое что изменилось!

// import { Switch, Route } from "react-router-dom";

// заменить на

// import { Routes ,Route } from 'react-router-dom';

const routes = ({productItems, cartItems, handleAddProduct, handleRemoveProduct,  handleCartClearance }) => {
  return (
    <div>
        <Routes>

        <Route exact path='/' 
          element={<Products 
          productItems={productItems} 
          handleAddProduct={handleAddProduct}/>}
        />
        <Route exact path='/signup'
          element = {<Signup/>}
        />
        <Route exact path='/cart'
          element = {<Cart 
          cartItems = {cartItems}  
          handleAddProduct={handleAddProduct}
          handleRemoveProduct ={ handleRemoveProduct}
          handleCartClearance = {handleCartClearance}
          />}
        />

        </Routes>
        
    </div>
  )
}

export default routes