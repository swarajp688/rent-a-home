import React, { useReducer } from 'react'
import { createContext } from 'react';
import properties from './Reducer/propertiesReducer';
import initialData from './initial';
export const PropertyContext = createContext({});
const PropertyContextProvider = ({children}) => {
    const [propertiesState, propertiesDispatch] = useReducer(properties,initialData);
  return (
    <PropertyContext.Provider  value={{
        propertiesState,
        propertiesDispatch
    }}>
        {children}
    </PropertyContext.Provider>
  )
}

export default PropertyContextProvider;