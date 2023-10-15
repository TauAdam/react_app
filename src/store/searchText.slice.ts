import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  text: '',
};

const searchTextSlice = createSlice({
  name: 'searchText',
  initialState,
  reducers: {
    setText(state, action: PayloadAction<string>) {
      state.text = action.payload;
    },
  },
});
export const { setText } = searchTextSlice.actions;
export default searchTextSlice.reducer;
