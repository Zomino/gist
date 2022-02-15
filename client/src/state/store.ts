import { configureStore } from '@reduxjs/toolkit';
import myListsReducer from 'components/views/MyLists/slice';

export const store = configureStore({
  reducer: {
    myLists: myListsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
