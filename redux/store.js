import { configureStore } from '@reduxjs/toolkit';
import listSlice from './reducer';

const store = configureStore({
  reducer: listSlice,
});

export default store;
