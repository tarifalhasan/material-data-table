import isOpenNewReducer from './redux/Reducher/isOpenNewCompany';

export interface RootState {
  isOpenNew: {
    isOpenNew: boolean;
  };
  // Add other reducer states here
}

const rootReducer = {
  isOpenNew: isOpenNewReducer,
  // Add other reducers here
};

export default rootReducer;
