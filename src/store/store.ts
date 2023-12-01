import { configureStore } from '@reduxjs/toolkit';
import formDataReducer, { FormData } from './reducers/formDatareducer';

export interface RootState {
  formData: FormData;
}

const store = configureStore({
  reducer: {
    formData: formDataReducer,
  },
});

export default store;
