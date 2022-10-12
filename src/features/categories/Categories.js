import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { category, errorMsg, getCategories } from "./categoriesSlice";

export const Categories = () => {
  const dispatch = useDispatch();
  const categoryData = useSelector(category);
  const error = useSelector(errorMsg);
  return (
    <>
      <div>Categories</div>
      <div>
        <button onClick={() => dispatch(getCategories())}>Load Users</button>
      </div>
      <div>Categories : {categoryData}</div>
      <div> Error : {error}</div>
    </>
  );
};


