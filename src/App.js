import React from "react";
import data from "./components/Data";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/frontend/Routes/Routes";
import { useState } from "react";
import "./App.css";
import Login from "./components/frontend/SignUp/Signup";
import { Transition } from "react-transition-group";

function App() {
  const { productItems } = data;
  const [cartItems, setCartItems] = useState([]);
  const [showLoginForm, setShowLoginForm] = useState(true);

  const handleAddProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item
        )
      );
    }
  };

  const handleCartClearance = () => {
    setCartItems([]);
  };

  const handleLogin = (username, password) => {
    if (username === "admin" && password === "17") {
      setShowLoginForm(false);
    }
  };

  return (
    <Router>
      <Transition in={!showLoginForm} timeout={500}>
        {(state) => (
          <div className={`app-content ${state}`}>
            {!showLoginForm && (
              <>
                <Header cartItems={cartItems} />
                <Routes
                  productItems={productItems}
                  cartItems={cartItems}
                  handleAddProduct={handleAddProduct}
                  handleRemoveProduct={handleRemoveProduct}
                  handleCartClearance={handleCartClearance}
                />
              </>
            )}
          </div>
        )}
      </Transition>
      {showLoginForm && <Login handleLogin={handleLogin} />}
    </Router>
  );
}

export default App;
