import React, { createContext, useState, useEffect} from "react";
import { getSpittles } from "./apiService";

export const SpittlesContext = createContext();

export const SpittlesProvider = ({children}) => {
    const [spittles, setSpittles] = useState([]);

    useEffect(() => {
        const fetchSpittles = async () => {
          try {
            const data = await getSpittles();
            setSpittles(data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchSpittles();
      }, []);

      return (
        <SpittlesContext.Provider value={{ spittles, setSpittles}}>
            {children}
        </SpittlesContext.Provider>
      )
}