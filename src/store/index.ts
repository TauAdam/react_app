import { configureStore } from '@reduxjs/toolkit';
import { rickAndMortyApi } from '../api';
import formReducer from './form.slice';
import searchText from './searchText.slice';

export const store = configureStore({
  reducer: {
    formReducer,
    searchText,
    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickAndMortyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
