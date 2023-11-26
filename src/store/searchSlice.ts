import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchValue: '',
    itemsPerPage: 10,
    currentPage: 1,
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
      state.isLoading = action.payload;
    },
    setSearchResultCount: (state, action) => {
      state.isLoading = action.payload;
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
} = searchSlice.actions;
export default searchSlice.reducer;
