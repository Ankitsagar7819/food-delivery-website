import React, { createContext, useState } from 'react';
import { food_items } from '../Food';

// Create the context
export const dataContext = createContext();

function UserContext({ children }) {
  // Move useState inside the component
  const [input, setInput] = useState("");
  const [filteredItems, setFilteredItems] = useState(food_items); 
  const [showCart, setShowCart] = useState(false)

  // Data to be provided by the context
  const data = {
    input,
    setInput,
    filteredItems,
    setFilteredItems, 
    showCart,
    setShowCart
  };

  return (
    <dataContext.Provider value={data}>
      {children}
    </dataContext.Provider>
  );
}

export default UserContext;
