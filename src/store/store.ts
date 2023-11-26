import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import loadingReducer from './loadingSlice';

const store = configureStore({
  reducer: {
    search: searchReducer,
    loading: loadingReducer,
  },
});

export default store;
