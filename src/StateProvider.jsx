/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React,{createContext,useContext,useReducer} from 'react'

// Prepare the data layer
export const StateContext = createContext();

// Wrap our app and provide the data layer to every component inside the app
export const StateProvider = ({reducer,initialState,children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)

// Pull information from the data layer

export const useStateValue = () => useContext(StateContext)
