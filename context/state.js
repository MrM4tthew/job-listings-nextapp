import { createContext, useContext, useMemo, useState } from "react";

export const AppContext = createContext();

export function AppWrapper({ children }) {
    const [filters, setFilters] = useState([])

    const handleClick = (tag) => {
        if (filters.includes(tag)) return;
        setFilters([...filters, tag])
    }


    return (
        <AppContext.Provider value={{ filters, setFilters, handleClick }} >
            {children}
        </AppContext.Provider>
    )
}


export function useAppContext() {
    return useContext(AppContext);
}