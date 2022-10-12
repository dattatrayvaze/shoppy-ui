import React from "react";
import HomeAppliances from "./images/HomeAppliances.jpg"
import Phones from "./images/Phones.jpg"
import Wearables from "./images/Wearables.png"
import KitchenAppliances from "./images/KitchenAppliances.jpg"
import Computer from "./images/Computer.jpg"
import Cameras from "./images/Cameras.jpg"
import './css/card.css'
export default function Card() {
    return (
        <>
        <h2 className="heading">Shop By Category</h2>
        <br></br>
        <div className="cards">
            <div className="card">
                <img src={HomeAppliances} alt="" />
                <h4 className="categoryname">Home Appliances</h4>
            </div>
            <div className="card">
                <img src={Phones} alt="" />
                <h4 className="categoryname">Phones</h4>
            </div>
            <div className="card">
                <img src={Wearables} alt="" />
                <h4 className="categoryname">Wearables</h4>
            </div>
            <div className="card">
                <img src={KitchenAppliances} alt="" />
                <h4 className="categoryname">Kitchen Appliances</h4>
            </div>
            <div className="card">
                <img src={Computer} alt="" />
                <h4 className="categoryname">Computers And Tablets</h4>
            </div>
            <div className="card">
                <img src={Cameras} alt="" />
                <h4 className="categoryname">Cameras</h4>
            </div>
        </div>
        </>
    )
}