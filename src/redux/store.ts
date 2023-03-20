import { configureStore } from '@reduxjs/toolkit';
import isOpenNewReducer from './Reducher/isOpenNewCompany';

const store = configureStore({
  reducer: {
    isOpenNew: isOpenNewReducer,
  },
});

export default store;
