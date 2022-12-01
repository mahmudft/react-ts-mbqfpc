import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  posts: ['test'],
  apidata: [],
  error: '',
};

export const fetchApiFromPlaceholder = createAsyncThunk(
  'api/fetch',
  async () => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
    const response = await data.json();
    return response;
  }
);

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addList: (state, action) => {
      state.posts.push(action.payload.slice(0, 10));
    },
    removeList: (state, action) => {
      state.posts = state.posts.filter((el) => el != action.payload);
    },
  },
  extraReducers: {
    [fetchApiFromPlaceholder.fulfilled]: (state, action) => {
      state.apidata.push(action.payload);
    },
    [fetchApiFromPlaceholder.rejected]: (state, action) => {
      state.error = 'Error happened';
    },
  },
});

export const { addList, removeList } = listSlice.actions;

export default listSlice.reducer;
