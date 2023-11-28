import { createSlice } from '@reduxjs/toolkit';
import { StarWarsCharacter } from '../types';

export interface SearchState {
  searchValue: string;
  itemsPerPage: number;
  currentPage: number;
  totalPages: number;
  isLoading: boolean;
  searchResults: StarWarsCharacter[];
  searchResultCount: number;
}

const searchTerm =
  typeof window !== 'undefined' ? localStorage.getItem('searchTerm') : '';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchValue: searchTerm,
    itemsPerPage: 10,
    currentPage: 1,
    totalPages: 0,
    isLoading: false,
    searchResults: [],
    searchResultCount: 0,
  },
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setItemsPerPage: (state, action) => {
      state.itemsPerPage = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    setSearchResultCount: (state, action) => {
      state.searchResultCount = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
  },
});

export const {
  setSearchValue,
  setItemsPerPage,
  setCurrentPage,
  setIsLoading,
  setSearchResults,
  setSearchResultCount,
  setTotalPages,
} = searchSlice.actions;
export default searchSlice.reducer;
