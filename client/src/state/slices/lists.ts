import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { type List } from 'interfaces';
import { type RootState } from 'state/store';
import serverAPI from 'services/serverAPI';

export enum Status {
  idle,
  loading,
  succeeded,
  failed,
}

interface ListsState {
  lists: List[],
  status: Status
  error?: string,
}

const initialState: ListsState = {
  lists: [],
  status: Status.idle,
};

export const fetchLists = createAsyncThunk(
  'lists/fetchLists',
  async () => {
    const lists = await serverAPI.getLists();
    return lists;
  },
);

export const listsSlice = createSlice({
  name: 'lists',
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

const { setLists, resetState } = listsSlice.actions;
export const actions = {
  setLists,
  resetState,
};

export const selectLists = (state: RootState): List[] => state.listsState.lists;

export default listsSlice.reducer;
