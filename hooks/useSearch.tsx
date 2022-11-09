import { createContext, useState, FC, useContext } from "react";

type SearchContextType = {
  textSearch: string;
  setTextSearch(search: string): void;
  categorySearch: string;
  setCategorySearch(search: string): void;
}

export const SearchContext = createContext({} as SearchContextType);

export const SearchStorage:React.FC<any> = ({ children }) => {
  const [textSearch, setTextSearch] = useState("");
  const [categorySearch, setCategorySearch] = useState("");
  return (
    <SearchContext.Provider value={{textSearch, categorySearch, setTextSearch, setCategorySearch}}>
      {children}
    </SearchContext.Provider>
  )
}


const useSearch = () => {
  const context = useContext(SearchContext);
  return context;
}

export default useSearch;
