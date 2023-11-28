import { configureStore } from '@reduxjs/toolkit';
import searchReducer, { SearchState } from './searchSlice';

export interface RootState {
  search: SearchState;
}

const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});

export default store;
