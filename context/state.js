import { createContext, useContext, useMemo, useState } from "react";

export const AppContext = createContext();

export function AppWrapper({ children }) {
    const [rules, setRules] = useState([])
    const [click, setClick] = useState([])

    const value = useMemo(() => ({ rules, setRules }), [rules, setRules])
    const clickState = useMemo(() => ({ click, setClick }), [click, setClick])

    return (
        <AppContext.Provider value={{ rules, setRules, click, setClick }} >
            {children}
        </AppContext.Provider>
    )
}


export function useAppContext() {
    return useContext(AppContext);
}