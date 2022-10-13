import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  category : [],
  loading: false,
  error: "test it error",
};

export const getCategories = createAsyncThunk(
  "category/getCategories",
  async () => {
    return axios
      .get("http://localhost:3000/categories")
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .catch((error) => {
        return error;
      });
  },
);
const categoriesSlice = createSlice({
  name: "categoriesSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        console.log("pending");
        state.loading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        console.log("fullfilled");
        console.log(action);
        state.loading = false;
        state.category = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        console.log("rejected");
        console.log(action);
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const category = (state) => state.category.category;
export const errorMsg = (state) => state.category.error;

export default categoriesSlice.reducer;
