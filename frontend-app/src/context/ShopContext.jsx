import { createContext } from "react";
import { products } from "../assets/assets";

// Create the context
export const ShopContext = createContext();

// Create the context provider component
const ShopContextProvider = (props) => {
  const currency = '$';
  const delivery_fee = 10;
  const value = {
    products, 
    currency, 
    delivery_fee
  };

  return (
    // Use the ShopContext.Provider to provide the context value
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
