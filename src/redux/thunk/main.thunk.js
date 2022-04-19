import { createAsyncThunk } from "@reduxjs/toolkit";
import mainService from "../../services/mainService";

export const getNewsList = createAsyncThunk(
  "main/getNewsList",
  async ({ page = 1, date, loadMore }, { getState }) => {
    const { pageSize } = getState().mainReducer;
    const params = { page, pageSize };
    if (date) params.from = date;
    try {
      const res = await mainService.getNews(params);
      return {
        ...res.data,
        page,
        loadMore,
      };
    } catch {
      return null;
    }
  }
);
