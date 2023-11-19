import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchResults: [],
    searchResultCount: 0,
    isLoading: false,
  },
  reducers: {
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    setSearchResultCount: (state, action) => {
      state.searchResultCount = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setSearchResults, setSearchResultCount, setIsLoading } =
  searchSlice.actions;

export default searchSlice.reducer;
