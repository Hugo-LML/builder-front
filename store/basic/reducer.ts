import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { BasicInitialState } from './type';

const initialState: BasicInitialState = {
  message: '',
};

const slice = createSlice({
  name: 'basic',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
  extraReducers: {},
});

export const basicActionsReducer = slice.actions;
export const basicReducer = slice.reducer;
