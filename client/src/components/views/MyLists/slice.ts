import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { type List } from 'interfaces';
import { type RootState } from 'state/store';
import ServerAPI from 'services/ServerAPI';

export enum Status {
  idle,
  loading,
  succeeded,
  failed,
}

interface MyListsState {
  lists: List[],
  status: Status
  error?: string,
}

const initialState: MyListsState = {
  lists: [],
  status: Status.idle,
};

export const fetchLists = createAsyncThunk(
  'myLists/fetchLists',
  async () => {
    const lists = await ServerAPI.getLists();
    return lists;
  },
);

export const myListsSlice = createSlice({
  name: 'myLists',
  initialState,
  reducers: {
    setLists: (state, action) => {
      state.lists = action.payload;
    },
    resetState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLists.pending, (state) => {
        state.status = Status.loading;
      })
      .addCase(fetchLists.fulfilled, (state, action) => {
        state.status = Status.succeeded;
        state.lists = action.payload;
      })
      .addCase(fetchLists.rejected, (state, action) => {
        state.status = Status.failed;
        state.error = action.error.message;
      });
  },
});

const { setLists, resetState } = myListsSlice.actions;
export const actions = {
  setLists,
  resetState,
};

export const selectLists = (state: RootState): List[] => state.myLists.lists;

export default myListsSlice.reducer;
