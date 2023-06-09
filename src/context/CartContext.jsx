import React, { createContext, useContext, useState, useEffect } from 'react';


const CartContext = createContext();

//TODO Extract finding object in localstorage into separate function

export function CartProvider({ children }) {

  const localStorageItems = JSON.parse(localStorage.getItem('cart')) || []; 
  const [cartItems, setCartItems] = useState(localStorageItems);
  const [cartItemAmount, setCartItemAmount] = useState(localStorageItems.length || 0);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
        setCartItemAmount(cartItems.length);
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

    function changeItemQuantity(selectedItem, newQuantity) {

      const itemIndex = cartItems.findIndex(i => i.product.id === selectedItem.product.id);

      const updatedCartItems = [...cartItems];
      updatedCartItems[itemIndex].quantity = newQuantity;
      setCartItems(updatedCartItems);

      console.log(cartItems);

    }


  function removeFromCart(selectedItem) {
    const itemIndex = cartItems.findIndex(i => i.product.id === selectedItem.product.id);

    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(itemIndex, 1);
    setCartItems(updatedCartItems);

  }

  function calculateTotalPrice() {

    let total = 0;

    cartItems.forEach(item => {
       total += item.product.price * item.quantity;
      
    });

    return total.toFixed(2);
  }

  return (
    <CartContext.Provider value={{ cartItems, cartItemAmount, addToCart, removeFromCart, changeItemQuantity, calculateTotalPrice, setCartItems }}>
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