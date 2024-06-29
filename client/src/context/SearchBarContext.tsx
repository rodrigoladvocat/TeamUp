import React, { useContext, useState } from "react";
import { createContext } from "react";

interface SearchBarContextProps {
    search: string;
    setSearch: (value: string) => void;
}

const SearchBarContext = createContext<SearchBarContextProps>({} as SearchBarContextProps);

export function useSearchBar() {
    return useContext(SearchBarContext);
}

export const SearchBarProvider = ({ children }: { children: React.ReactNode }) => {
    const [search, setSearch] = useState('');

    return (
        <SearchBarContext.Provider value={{ search, setSearch }}>
            {children}
        </SearchBarContext.Provider>
    );
}