import { configureStore, ThunkAction, Action, createReducer } from '@reduxjs/toolkit';
import peopleListsReducer from '../features/lists/ListsSlice';

export const store = configureStore({
  reducer: {
    peopleLists: peopleListsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
