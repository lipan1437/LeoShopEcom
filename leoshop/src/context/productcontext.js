// create a context
// provider
// consumer => useContext Hook

import { createContext, useContext, useEffect } from "react";
import axios from "axios"
const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const AppProvider = ({ children }) => {


  const getProducts = async(url) =>{
        const res = await axios.get(url);
        // console.log('res', res);
        const products = await res.data
        console.log('products', products);
  }

  useEffect(()=>{
  getProducts(API);
  },[])

  return (
    <AppContext.Provider value={{ myName: "leo shop" }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
