import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, users, errorMsg, getTest, postResponse, postTest } from "./userSlice";

export const User = () => {
  const dispatch = useDispatch();
  const userData = useSelector(users);
  const error = useSelector(errorMsg);
  const callOnclick = () => {alert("button clicked")};
  const postMessage = useSelector(postResponse);
  return (
    <>
      <div>User</div>
      <div><button onClick={() => dispatch(getTest())}>Load Users</button></div>
      <div>Users : {userData}</div>
      <div> Error : {error}</div>
      <div><button onClick={() => dispatch(postTest())}>Make sample post Call</button></div>
      <div>PostMessage : {postMessage}</div>
    </>
  );
};
