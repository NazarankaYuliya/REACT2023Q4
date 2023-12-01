import { createSlice } from '@reduxjs/toolkit';

export interface FormData {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  acceptTerms: boolean;
}

const formDataSlice = createSlice({
  name: 'formData',
  initialState: {
    name: '',
    age: null,
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    acceptTerms: false,
    picture: [],
    country: '',
  },

  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setConfirmPassword: (state, action) => {
      state.confirmPassword = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setTerms: (state, action) => {
      state.acceptTerms = action.payload;
    },
  },
});

export const {
  setName,
  setAge,
  setPassword,
  setConfirmPassword,
  setEmail,
  setGender,

  setTerms,
} = formDataSlice.actions;
export default formDataSlice.reducer;
