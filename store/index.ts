import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { basicReducer } from './basic/reducer';

const reducer = combineReducers({
  basic: basicReducer,
});

export const store = configureStore({
  reducer: reducer,
});

export const useAppDispatch = () => store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
