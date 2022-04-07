import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterSlice from './features/counterSlice';
import languageSlice from './features/languageSlice';

const rootReducer = combineReducers({
  language: languageSlice,
  counter: counterSlice
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch

const store = configureStore({
  reducer: rootReducer,
});

export default store;