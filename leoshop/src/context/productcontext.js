// create a context
// provider
// consumer => useContext Hook

import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";

import reducer from "../reducer/productReducer";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const AppProvider = ({ children }) => {
  const intialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
  };

  const [state, dispatch] = useReducer(reducer, intialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      // console.log('res', res);
      const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (err) {
      dispatch({ type: "API_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

// custom hooks

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
