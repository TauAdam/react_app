import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FormFields } from '../types';

interface FormSubmissionsState {
  cards: FormFields[];
}
const initialState: FormSubmissionsState = {
  cards: [],
};

const formSubmissionsSlice = createSlice({
  name: 'formSubmissions',
  initialState,
  reducers: {
    addCard(state, action: PayloadAction<FormFields>) {
      state.cards.push(action.payload);
    },
  },
});
export const { addCard } = formSubmissionsSlice.actions;
export default formSubmissionsSlice.reducer;
