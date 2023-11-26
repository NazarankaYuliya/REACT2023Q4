import { createSlice } from '@reduxjs/toolkit';

const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    mainPageLoading: false,
    detailsPageLoading: false,
  },
  reducers: {
    setMainPageLoading: (state, action) => {
      state.mainPageLoading = action.payload;
    },
    setDetailsPageLoading: (state, action) => {
      state.detailsPageLoading = action.payload;
    },
  },
});

export const { setMainPageLoading, setDetailsPageLoading } =
  loadingSlice.actions;
export default loadingSlice.reducer;
