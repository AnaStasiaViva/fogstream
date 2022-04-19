import { createSlice } from "@reduxjs/toolkit";

import { getNewsList } from "../thunk/main.thunk";

const initialState = {
  list: [],
  page: 1,
  pageSize: 10,
  totalResults: 0,
  canLoadMore: false,
  loaded: false,
};

export const { actions: mainActions, reducer: mainReducer } = createSlice({
  name: "news",
  initialState,
  reducers: {
    setPageSizeQuery(state, { payload }) {
      if (state.pageSize !== payload) {
        state.pageSize = payload;
        state.page = 1;
        state.list = [];
      }
    },
  },
  extraReducers: {
    [getNewsList.fulfilled]: (state, { payload }) => {
      if (!payload) return state;

      const list = payload.loadMore
        ? [...state.list, ...payload.articles]
        : payload.articles;

      state.list = list;
      state.page = payload.page;
      state.totalResults = payload.totalResults;
      state.canLoadMore = list.length < state.totalResults;
      state.loaded = true;
    },
  },
});
