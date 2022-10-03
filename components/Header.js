import React, { useState, useEffect } from "react";
import logoo from "../images/logoo.png";
import "./Header.css";
import { BsFillPersonFill } from "react-icons/bs";
import { MdShoppingCart } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import FadeMenu from "./FadeMenu";
import Pincode from "./Pincode";

const Header = () => {
  return (
    <div>
      <div className="head">
        <img className="logo" src={logoo} alt="Shopy logo" />
        <FadeMenu />
        <div className="search">
          <div className="st">what are you looking for?</div>
          <GoSearch className="srch" />
        </div>
        <Pincode />
        <BsFillPersonFill className="login" />
        <MdShoppingCart className="cart" />
      </div>
    </div>
  );
};

export default Header;
