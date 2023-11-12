import React, { ReactNode, createContext, useState } from 'react';
import { StarWarsCharacter } from '../types';

interface SearchContextType {
  searchResults: StarWarsCharacter[];
  setSearchResults: React.Dispatch<React.SetStateAction<StarWarsCharacter[]>>;
  searchResultCount: number;
  setSearchResultCount: React.Dispatch<React.SetStateAction<number>>;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SearchContext = createContext<SearchContextType>({
  searchResults: [],
  setSearchResults: () => {},
  searchResultCount: 0,
  setSearchResultCount: () => {},
  searchValue: '',
  setSearchValue: () => {},
  currentPage: 1,
  setCurrentPage: () => {},
  isLoading: false,
  setIsLoading: () => {},
});

export function SearchContextProvider({ children }: { children: ReactNode }) {
  const [searchResults, setSearchResults] = useState<StarWarsCharacter[]>([]);
  const [searchResultCount, setSearchResultCount] = useState(0);
  const [searchValue, setSearchValue] = useState(
    localStorage.getItem('searchTerm') || ''
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const contextValue: SearchContextType = {
    searchResults,
    setSearchResults,
    searchResultCount,
    setSearchResultCount,
    searchValue,
    setSearchValue,
    currentPage,
    setCurrentPage,
    isLoading,
    setIsLoading,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
}
