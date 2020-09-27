import React, { createContext, useContext, useState } from "react";

export const Context = createContext(null);
import CartContext from "./CartContext";

const AppContext: React.FC = ({ children }) => {
  const { products } = useContext(CartContext);

  return <Context.Provider value={{ products }}>{children}</Context.Provider>;
};
export default AppContext;
