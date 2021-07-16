import { createContext, useContext, useMemo, useState } from "react";

export const AppContext = createContext();

export function AppWrapper({ children }) {
    const [filters, setFilters] = useState([])

    const handleClick = (tag) => {
        if (filters.includes(tag)) return;
        setFilters([...filters, tag])
    }

    const deleteAllClick = () => {
        setFilters([])
    }

    const deleteClick = (getData) => {
        const data = filters.filter(filter => !(filter == getData))
        setFilters(data)
    }


    return (
        <AppContext.Provider value={{ filters, setFilters, handleClick, deleteAllClick, deleteClick }} >
            {children}
        </AppContext.Provider>
    )
}


export function useAppContext() {
    return useContext(AppContext);
}