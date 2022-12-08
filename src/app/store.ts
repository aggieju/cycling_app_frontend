import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { useDispatch } from 'react-redux'
import userReducer from "../store/user/slice"
import campingReducer from "../store/camping/slice"
import appStateReducer from "../store/appState/slice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    appState: appStateReducer,
    camping: campingReducer
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
