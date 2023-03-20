import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IsOpenNewState {
  isOpenNew: boolean;
}

const initialState: IsOpenNewState = {
  isOpenNew: false,
};

export const isOpenNewSlice = createSlice({
  name: 'isOpenNew',
  initialState,
  reducers: {
    setIsOpenNew: (state, action: PayloadAction<boolean>) => {
      state.isOpenNew = action.payload;
    },
  },
});

export const { setIsOpenNew } = isOpenNewSlice.actions;

export default isOpenNewSlice.reducer;
