import React, { createContext, useContext, useState, useEffect } from 'react';


const CartContext = createContext();

export function CartProvider({ children }) {

  const localStorageItems = JSON.parse(localStorage.getItem('cart')) || []; 
  const [cartItems, setCartItems] = useState(localStorageItems);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])

  function addToCart(product, quantity) {

    const itemIndex = cartItems.findIndex(i => i.product.id === product.id);

    if (itemIndex === -1) {
        setCartItems([...cartItems, {product, quantity}]);
    }
    else {
        const updatedCartItems = [...cartItems];
        updatedCartItems[itemIndex].quantity += quantity;
        setCartItems(updatedCartItems);
    }

    console.log(cartItems);

    }

    function increaseItemAmount(item, quantity) {
        
    }

    function decreaseItemAmount(item, quantity) {

    }


  function removeFromCart(item) {
    setCartItems(cartItems.filter((i) => i.id !== item.id));
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}