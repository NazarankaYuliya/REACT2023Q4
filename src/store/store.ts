import { configureStore } from '@reduxjs/toolkit';
import formDataReducer, { FormData } from './reducers/formDataReducer';
import countriesListReduser, {
  CountriesList,
} from './reducers/countryListReducer';

export interface RootState {
  formData: FormData;
  countriesList: CountriesList;
}

const store = configureStore({
  reducer: {
    formData: formDataReducer,
    countriesList: countriesListReduser,
  },
});

export default store;
