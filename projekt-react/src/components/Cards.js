import React from "react";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC items</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <CardItem
              src="images/img-9.jpg"
              text="New shirts albo coś"
              label="Offer"
              path="/shop"
            />
            <CardItem
              src="images/img-9.jpg"
              text="New shirts albo coś"
              label="Offer"
              path="/shop"
            />
            <CardItem
              src="images/img-9.jpg"
              text="New shirts albo coś"
              label="Offer"
              path="/shop"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
