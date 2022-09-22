import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./userAPI";
import axios from "axios";
const initialState = {
  users: [],
  loading: false,
  error: "test it error",
  postResponse: "",
};

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  //console.log("In getUsers()");
  //const data = await fetchUsers();
  //return data;
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      console.log(response);
      return response.data.map((user) => user.name);
    })
    .catch((error) => {
      return error;
    });
});
export const getTest = createAsyncThunk("users/getTest", async () => {
  //console.log("In getUsers()");
  //const data = await fetchUsers();
  //return data;
  return axios
    .get("http://localhost:3000/test")
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      return error;
    });
});

/*export const postTest = createAsyncThunk("users/postTest", async () => {
  //console.log("In getUsers()");
  //const data = await fetchUsers();
  //return data;
  return axios
    .get("http://localhost:3000/csrfToken")
    .then((response) => {
      console.log(response);
      let config = {
        headers: {"csrf-token":response.data.csrfToken}
      };
      axios
        .post("http://localhost:3000/test", null, config)
        .then((response) => {
          console.log(response);
          return response.data;
        })
        .catch((error) => {
          return error;
        });
      return response.data;
    })
    .catch((error) => {
      return error;
    });
});*/

export const postTest = createAsyncThunk("users/postTest", async () => {
    return axios
          .post("http://localhost:3000/test")
          .then((response) => {
            console.log(response);
            return response.data;
          })
          .catch((error) => {
            return error;
          });
  });

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        console.log("pending");
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        console.log("fullfilled");
        console.log(action);
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        console.log("rejected");
        console.log(action);
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getTest.pending, (state) => {
        console.log("pending");
        state.loading = true;
      })
      .addCase(getTest.fulfilled, (state, action) => {
        console.log("fullfilled");
        console.log(action);
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getTest.rejected, (state, action) => {
        console.log("rejected");
        console.log(action);
        state.loading = false;
        state.error = action.error;
      })
      .addCase(postTest.pending, (state) => {
        console.log("pending");
        state.loading = true;
      })
      .addCase(postTest.fulfilled, (state, action) => {
        console.log("fullfilled");
        console.log(action);
        state.loading = false;
        state.postResponse = action.payload.test;
      })
      .addCase(postTest.rejected, (state, action) => {
        console.log("rejected");
        console.log(action);
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const users = (state) => state.user.users;
export const errorMsg = (state) => state.user.error;
export const postResponse = (state) => state.user.postResponse;

export default userSlice.reducer;
