import { configureStore } from '@reduxjs/toolkit';
import listsReducer from 'state/slices/lists';

export const store = configureStore({
  reducer: {
    listsState: listsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
