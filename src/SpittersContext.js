import React, {createContext, useState, useEffect} from "react";
import { getSpitters, deleteSpitter, addSpitter } from "./apiService";

export const SpittersContext = createContext();

export const SpittersProvider = ({children}) => {
    const [spitters, setSpitters] = useState([]);

    useEffect(() => {
        fetchSpitters();
      }, []);
    
      const fetchSpitters = async () => {
        try {
          const data = await getSpitters();
          setSpitters(data);
        } catch (error) {
          console.error(error);
        }
      };
    
      const handleAddSpitter = async (spitter) => {
        try {
            await addSpitter(spitter);
            fetchSpitters();
        } catch (error) {
            console.error(error)
        }
      }

      const handleDelete = async (id) => {
        try {
          await deleteSpitter(id);
          fetchSpitters();
        } catch (error) {
          console.error(error);
        }
      };

      return (
        <SpittersContext.Provider value={{ spitters, handleDelete, handleAddSpitter}}>
            {children}
        </SpittersContext.Provider>
      )
}