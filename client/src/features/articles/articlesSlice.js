import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const axios = require('axios');

export const fetchArticles = createAsyncThunk('articles/fetchArticles', async (options, { getState }) => {
  const state = getState().articles;
  const params = { keyword: state.keyword, sort: state.sort };
  const res = await axios.get('http://localhost:5000', { params });
  return res.data;
});

const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    data: [],
    keyword: '',
    sort: '',
  },
  reducers: {
    updateKeyword(state, action) {
      state.keyword = action.payload;
    },
    updateSort(state, action) {
      state.sort = action.payload;
    }
  },
  extraReducers: {
    [fetchArticles.fulfilled]: (state, action) => {
      state.data = action.payload;
    }
  }
});

export const { updateKeyword, updateSort } = articlesSlice.actions;

export default articlesSlice.reducer;

