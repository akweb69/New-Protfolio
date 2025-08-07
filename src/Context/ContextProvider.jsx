// src/Context/Context.jsx
import React, { createContext, useState } from 'react';

// Create and export context
export const AppContext = createContext();

const ContextProvider = ({ children }) => {
    // States
    const [user, setUser] = useState(null);
    const [allUser, setAllUser] = useState([]);

    // Value to share
    const contextValue = {
        user,
        setUser,
        allUser,
        setAllUser,
    };


    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};

export default ContextProvider;
